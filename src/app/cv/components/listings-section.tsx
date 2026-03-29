"use client"

import { useEffect, useState } from "react"
import { ClipboardList, Plus, X, ExternalLink } from "lucide-react"
import type { Listing } from "@/app/cv/lib/resume-data"

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso))
}

export function ListingsSection() {
  const [listings, setListings] = useState<Listing[]>([])
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch("/api/listings")
      .then((r) => r.json())
      .then(setListings)
  }, [])

  const handleAdd = async () => {
    const trimmed = url.trim()
    if (!trimmed) return

    setLoading(true)
    const res = await fetch("/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: trimmed }),
    })
    const listing: Listing = await res.json()
    setListings((prev) => [listing, ...prev])
    setUrl("")
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    await fetch("/api/listings", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
    setListings((prev) => prev.filter((l) => l.id !== id))
  }

  return (
    <section aria-labelledby="listings-heading">
      <h2
        id="listings-heading"
        className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground mb-6"
      >
        <ClipboardList className="h-5 w-5 text-primary" aria-hidden="true" />
        Listings
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleAdd()
        }}
        className="flex gap-2 mb-6"
      >
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.linkedin.com/jobs/view/..."
          className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </form>

      {listings.length === 0 ? (
        <p className="text-sm text-muted-foreground">No listings yet.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="flex items-center justify-between gap-3 rounded-md border border-border bg-secondary p-3"
            >
              <div className="flex flex-col gap-0.5 min-w-0">
                <a
                  href={listing.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary truncate"
                >
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{listing.url}</span>
                </a>
                <span className="text-xs text-muted-foreground">
                  {formatDate(listing.addedAt)}
                </span>
              </div>
              <button
                onClick={() => handleDelete(listing.id)}
                className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                aria-label="Remove listing"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

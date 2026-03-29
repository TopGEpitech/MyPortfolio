import { NextResponse } from "next/server"
import fs from "node:fs/promises"
import path from "node:path"
import type { Listing } from "@/app/cv/lib/resume-data"

const filePath = path.join(process.cwd(), "data", "listings.json")

async function readListings(): Promise<Listing[]> {
  try {
    const raw = await fs.readFile(filePath, "utf-8")
    return JSON.parse(raw)
  } catch {
    return []
  }
}

async function writeListings(listings: Listing[]) {
  await fs.writeFile(filePath, JSON.stringify(listings, null, 2) + "\n")
}

export async function GET() {
  const listings = await readListings()
  return NextResponse.json(listings)
}

export async function POST(request: Request) {
  const { url } = (await request.json()) as { url: string }

  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "url is required" }, { status: 400 })
  }

  const listing: Listing = {
    id: crypto.randomUUID(),
    url: url.trim(),
    addedAt: new Date().toISOString(),
  }

  const listings = await readListings()
  listings.unshift(listing)
  await writeListings(listings)

  return NextResponse.json(listing, { status: 201 })
}

export async function DELETE(request: Request) {
  const { id } = (await request.json()) as { id: string }

  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 })
  }

  const listings = await readListings()
  const filtered = listings.filter((l) => l.id !== id)
  await writeListings(filtered)

  return NextResponse.json({ ok: true })
}

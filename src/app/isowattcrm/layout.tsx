"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./styles.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Building2,
  LayoutGrid,
  Map,
  ExternalLink
} from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/isowattcrm") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  const navItems = [
    { href: "/isowattcrm", label: "Dashboard", icon: LayoutDashboard },
    { href: "/isowattcrm/leads", label: "Leads", icon: Users },
    { href: "/isowattcrm/business", label: "Business", icon: Building2 },
  ]

  const topLinks = [
    { href: "/parcoursvente", label: "Parcours", icon: LayoutGrid },
    { href: "/proposals", label: "Proposals", icon: ExternalLink },
    { href: "/roadmap", label: "Comparatif", icon: Map },
  ]

  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Sidebar */}
          <div className="w-64 bg-slate-900/50 backdrop-blur-sm border-r border-slate-700 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-slate-700">
              <h1 className="text-xl font-bold text-white">ISOWATT CRM</h1>
              <p className="text-sm text-slate-400">Gestion des leads</p>
            </div>

            {/* Liens secondaires */}
            <div className="p-4 border-b border-slate-700">
              <p className="text-xs text-slate-500 uppercase font-semibold mb-3">Autres outils</p>
              <div className="space-y-1">
                {topLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Navigation principale */}
            <nav className="flex-1 p-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive(item.href)
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

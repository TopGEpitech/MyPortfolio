"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, Building2, TrendingUp, Plus } from "lucide-react"
import Link from "next/link"
import { leads, businesses } from "./data"

export default function Dashboard() {
  // Calcul des statistiques depuis les données réelles
  const totalLeads = leads.length
  const convertedLeads = businesses.length
  const activeBusinesses = businesses.filter(b => b.status === "En cours" || b.status === "Planifié").length

  const totalRevenue = businesses
    .filter(b => b.status === "Terminé")
    .reduce((sum, business) => sum + Number.parseInt(business.value.replace(/[€\s]/g, "")), 0)

  const stats = [
    {
      title: "Total Leads",
      value: totalLeads.toString(),
      change: "+12%",
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: "Leads Convertis",
      value: convertedLeads.toString(),
      change: "+8%",
      icon: TrendingUp,
      color: "text-green-400",
    },
    {
      title: "Business Actifs",
      value: activeBusinesses.toString(),
      change: "+15%",
      icon: Building2,
      color: "text-blue-400",
    },
    {
      title: "Revenus du Mois",
      value: `€${totalRevenue.toLocaleString()}`,
      change: "+23%",
      icon: BarChart3,
      color: "text-purple-400",
    },
  ]

  // Les 3 leads les plus récents
  const recentLeads = leads.slice(0, 3)

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Tableau de Bord</h1>
            <p className="text-slate-400">Vue d'ensemble de votre activité ISOWATT</p>
          </div>
          <div className="flex gap-3">
            <Button disabled className="bg-blue-600/50 cursor-not-allowed">
              <Plus className="mr-2 h-4 w-4" />
              Nouveau Lead
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-xs text-green-400">{stat.change} par rapport au mois dernier</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Leads Récents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">{lead.name}</p>
                      <p className="text-sm text-slate-400">{lead.email}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center rounded-full bg-blue-600/20 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                        {lead.status}
                      </span>
                      <p className="text-xs text-slate-400">{lead.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-4 w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
              >
                <Link href="/isowattcrm/leads">Voir tous les leads</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">Activité Récente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <div>
                    <p className="text-sm text-white">Lead converti en business</p>
                    <p className="text-xs text-slate-400">Il y a 2 heures</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <div>
                    <p className="text-sm text-white">Nouveau lead ajouté</p>
                    <p className="text-xs text-slate-400">Il y a 4 heures</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <div>
                    <p className="text-sm text-white">Rendez-vous planifié</p>
                    <p className="text-xs text-slate-400">Il y a 6 heures</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

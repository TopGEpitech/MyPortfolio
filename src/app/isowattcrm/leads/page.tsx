"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, Eye, ArrowRight } from "lucide-react"
import Link from "next/link"
import { leads } from "../data"

export default function LeadsPage() {

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Nouveau":
        return "bg-blue-600/20 text-blue-400"
      case "Contacté":
        return "bg-yellow-600/20 text-yellow-400"
      case "Qualifié":
        return "bg-green-600/20 text-green-400"
      case "Proposition":
        return "bg-purple-600/20 text-purple-400"
      default:
        return "bg-gray-600/20 text-gray-400"
    }
  }

  const convertToBusiness = (leadId: number) => {
    alert(`Lead ${leadId} converti en business !`)
  }

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Tous les Leads</h1>
            <p className="text-slate-400">Gérez vos prospects ISOWATT</p>
          </div>
          <Button disabled className="bg-blue-600/50 cursor-not-allowed">
            <Plus className="mr-2 h-4 w-4" />
            Nouveau Lead
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 border-slate-700 bg-slate-800/50 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Rechercher un lead..."
                  className="pl-10 border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent">
                Filtrer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Liste des Leads ({leads.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700">
                  <TableHead className="text-slate-300">Nom</TableHead>
                  <TableHead className="text-slate-300">Contact</TableHead>
                  <TableHead className="text-slate-300">Statut</TableHead>
                  <TableHead className="text-slate-300">Source</TableHead>
                  <TableHead className="text-slate-300">Score</TableHead>
                  <TableHead className="text-slate-300">Date</TableHead>
                  <TableHead className="text-slate-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id} className="border-slate-700">
                    <TableCell>
                      <div>
                        <p className="font-medium text-white">{lead.name}</p>
                        <p className="text-sm text-slate-400">ID: {lead.id}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm text-white">{lead.email}</p>
                        <p className="text-sm text-slate-400">{lead.phone}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(lead.status)}>{lead.status}</Badge>
                    </TableCell>
                    <TableCell className="text-slate-300">{lead.source}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 rounded-full bg-slate-700">
                          <div className="h-2 rounded-full bg-blue-500" style={{ width: `${lead.score}%` }} />
                        </div>
                        <span className="text-sm text-slate-300">{lead.score}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-300">{lead.date}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                        >
                          <Link href={`/isowattcrm/leads/${lead.id}`}>
                            <Eye className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => convertToBusiness(lead.id)}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

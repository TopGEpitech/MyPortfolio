"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, Eye, Euro } from "lucide-react"
import Link from "next/link"
import { businesses } from "../data"

export default function BusinessPage() {

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Devis":
        return "bg-yellow-600/20 text-yellow-400"
      case "Planifié":
        return "bg-blue-600/20 text-blue-400"
      case "En cours":
        return "bg-blue-600/20 text-blue-400"
      case "Terminé":
        return "bg-green-600/20 text-green-400"
      default:
        return "bg-gray-600/20 text-gray-400"
    }
  }

  const totalValue = businesses.reduce((sum, business) => {
    return sum + Number.parseInt(business.value.replace(/[€\s]/g, ""))
  }, 0)

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Tous les Business</h1>
            <p className="text-slate-400">Gérez vos projets ISOWATT</p>
          </div>
          <Button disabled className="bg-blue-600/50 cursor-not-allowed">
            <Plus className="mr-2 h-4 w-4" />
            Nouveau Business
          </Button>
        </div>

        {/* Stats */}
        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-sm text-slate-400">Valeur totale</p>
                  <p className="text-xl font-bold text-white">{totalValue.toLocaleString()}€</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardContent className="p-4">
              <div>
                <p className="text-sm text-slate-400">En cours</p>
                <p className="text-xl font-bold text-blue-400">
                  {businesses.filter((b) => b.status === "En cours").length}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardContent className="p-4">
              <div>
                <p className="text-sm text-slate-400">Terminés</p>
                <p className="text-xl font-bold text-green-400">
                  {businesses.filter((b) => b.status === "Terminé").length}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
            <CardContent className="p-4">
              <div>
                <p className="text-sm text-slate-400">Total</p>
                <p className="text-xl font-bold text-white">{businesses.length}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 border-slate-700 bg-slate-800/50 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Rechercher un business..."
                  className="pl-10 border-slate-600 bg-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent">
                Filtrer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Business Table */}
        <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white">Liste des Business ({businesses.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700">
                  <TableHead className="text-slate-300">Projet</TableHead>
                  <TableHead className="text-slate-300">Client</TableHead>
                  <TableHead className="text-slate-300">Statut</TableHead>
                  <TableHead className="text-slate-300">Valeur</TableHead>
                  <TableHead className="text-slate-300">Progrès</TableHead>
                  <TableHead className="text-slate-300">Dates</TableHead>
                  <TableHead className="text-slate-300">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {businesses.map((business) => (
                  <TableRow key={business.id} className="border-slate-700">
                    <TableCell>
                      <div>
                        <p className="font-medium text-white">{business.name}</p>
                        <p className="text-sm text-slate-400">{business.type}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-white">{business.client}</p>
                        <p className="text-sm text-slate-400">{business.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(business.status)}>{business.status}</Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-green-400">{business.value}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 rounded-full bg-slate-700">
                          <div className="h-2 rounded-full bg-blue-500" style={{ width: `${business.progress}%` }} />
                        </div>
                        <span className="text-sm text-slate-300">{business.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p className="text-slate-300">Début: {business.startDate}</p>
                        <p className="text-slate-400">Fin: {business.expectedEnd}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                      >
                        <Link href={`/isowattcrm/business/${business.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
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

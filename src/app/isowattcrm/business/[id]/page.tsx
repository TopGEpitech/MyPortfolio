"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, Mail, Calendar, Euro, Settings, FileText } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function BusinessDetailPage() {
  const params = useParams()
  const businessId = params.id

  // Mock data
  const business = {
    id: businessId,
    name: "Installation Dubois",
    client: "Marie Dubois",
    email: "marie.dubois@email.com",
    phone: "06 12 34 56 78",
    address: "123 Rue de la Paix, 75001 Paris",
    status: "En cours",
    value: "15 000€",
    progress: 65,
    startDate: "2024-01-10",
    expectedEnd: "2024-02-15",
    type: "Installation résidentielle",
    description: "Installation de panneaux photovoltaïques 6kW sur toiture résidentielle",
    technicalSpecs: {
      power: "6kW",
      panels: "20 panneaux 300W",
      inverter: "Onduleur SolarEdge 6kW",
      roofType: "Tuiles",
      orientation: "Sud",
      inclination: "30°",
    },
    timeline: [
      { phase: "Étude technique", status: "Terminé", date: "2024-01-10", progress: 100 },
      { phase: "Commande matériel", status: "Terminé", date: "2024-01-15", progress: 100 },
      { phase: "Installation", status: "En cours", date: "2024-01-20", progress: 65 },
      { phase: "Raccordement", status: "À venir", date: "2024-02-05", progress: 0 },
      { phase: "Mise en service", status: "À venir", date: "2024-02-15", progress: 0 },
    ],
  }

  const documents = [
    { name: "Devis signé", type: "PDF", date: "2024-01-08" },
    { name: "Étude technique", type: "PDF", date: "2024-01-12" },
    { name: "Bon de commande", type: "PDF", date: "2024-01-15" },
    { name: "Photos installation", type: "Images", date: "2024-01-22" },
  ]

  const getPhaseColor = (status: string) => {
    switch (status) {
      case "Terminé":
        return "text-green-400"
      case "En cours":
        return "text-blue-400"
      case "À venir":
        return "text-slate-400"
      default:
        return "text-slate-400"
    }
  }

  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
            >
              <Link href="/isowattcrm/business">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">{business.name}</h1>
              <p className="text-slate-400">Business #{business.id}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent">
              <Settings className="mr-2 h-4 w-4" />
              Gérer
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FileText className="mr-2 h-4 w-4" />
              Rapport
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Overview */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Vue d'ensemble du projet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-sm text-slate-400">Client</p>
                      <p className="text-white">{business.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Euro className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-sm text-slate-400">Valeur</p>
                      <p className="text-white font-semibold">{business.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-slate-400">Début</p>
                      <p className="text-white">{business.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="text-sm text-slate-400">Fin prévue</p>
                      <p className="text-white">{business.expectedEnd}</p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-700" />

                <div>
                  <h4 className="font-medium text-white mb-2">Description</h4>
                  <p className="text-slate-300">{business.description}</p>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-3">Progrès global</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Avancement</span>
                      <span className="text-white font-medium">{business.progress}%</span>
                    </div>
                    <Progress value={business.progress} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Specifications */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Spécifications techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-slate-400">Puissance</p>
                    <p className="text-white font-medium">{business.technicalSpecs.power}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Panneaux</p>
                    <p className="text-white">{business.technicalSpecs.panels}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Onduleur</p>
                    <p className="text-white">{business.technicalSpecs.inverter}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Type de toiture</p>
                    <p className="text-white">{business.technicalSpecs.roofType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Orientation</p>
                    <p className="text-white">{business.technicalSpecs.orientation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Inclinaison</p>
                    <p className="text-white">{business.technicalSpecs.inclination}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Planning du projet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {business.timeline.map((phase, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          phase.status === "Terminé"
                            ? "bg-green-400"
                            : phase.status === "En cours"
                              ? "bg-blue-400"
                              : "bg-slate-600"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-white">{phase.phase}</p>
                          <span className="text-xs text-slate-400">{phase.date}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1">
                          <Badge
                            className={`text-xs ${
                              phase.status === "Terminé"
                                ? "bg-green-600/20 text-green-400"
                                : phase.status === "En cours"
                                  ? "bg-blue-600/20 text-blue-400"
                                  : "bg-slate-600/20 text-slate-400"
                            }`}
                          >
                            {phase.status}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-16 rounded-full bg-slate-700">
                              <div className="h-1 rounded-full bg-blue-500" style={{ width: `${phase.progress}%` }} />
                            </div>
                            <span className="text-xs text-slate-400">{phase.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Card */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Statut du projet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge className="bg-blue-600/20 text-blue-400">{business.status}</Badge>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Type</p>
                  <p className="text-white">{business.type}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Adresse</p>
                  <p className="text-white text-sm">{business.address}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Contact client</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-4 w-4" />
                  {business.phone}
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Envoyer Email
                </Button>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded bg-slate-700/50">
                      <div>
                        <p className="text-sm font-medium text-white">{doc.name}</p>
                        <p className="text-xs text-slate-400">
                          {doc.type} • {doc.date}
                        </p>
                      </div>
                      <Button size="sm" variant="ghost" className="text-blue-400 hover:bg-slate-600">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

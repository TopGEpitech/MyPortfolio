"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Phone, Mail, MapPin, Calendar, ArrowRight, Edit } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function LeadDetailPage() {
  const params = useParams()
  const leadId = params.id

  // Mock data - en réalité, vous récupéreriez les données via l'ID
  const lead = {
    id: leadId,
    name: "Marie Dubois",
    email: "marie.dubois@email.com",
    phone: "06 12 34 56 78",
    address: "123 Rue de la Paix, 75001 Paris",
    status: "Qualifié",
    source: "Site Web",
    score: 85,
    createdAt: "2024-01-15",
    lastContact: "2024-01-16",
    notes: "Intéressée par une installation de 6kW. Maison individuelle avec toiture sud. Budget estimé: 15 000€",
    projectType: "Installation résidentielle",
    roofType: "Tuiles",
    surfaceArea: "45m²",
    estimatedPower: "6kW",
    budget: "15 000€",
  }

  const activities = [
    {
      id: 1,
      type: "Appel",
      description: "Premier contact téléphonique",
      date: "2024-01-16 14:30",
      status: "Terminé",
    },
    {
      id: 2,
      type: "Email",
      description: "Envoi de la brochure ISOWATT",
      date: "2024-01-15 16:45",
      status: "Envoyé",
    },
    {
      id: 3,
      type: "Lead",
      description: "Lead créé depuis le site web",
      date: "2024-01-15 10:20",
      status: "Créé",
    },
  ]

  const convertToBusiness = () => {
    alert(`Lead ${leadId} converti en business !`)
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
              <Link href="/isowattcrm/leads">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">{lead.name}</h1>
              <p className="text-slate-400">Lead #{lead.id}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent">
              <Edit className="mr-2 h-4 w-4" />
              Modifier
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={convertToBusiness}>
              <ArrowRight className="mr-2 h-4 w-4" />
              Convertir en Business
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Informations du Lead</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-sm text-slate-400">Email</p>
                      <p className="text-white">{lead.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-sm text-slate-400">Téléphone</p>
                      <p className="text-white">{lead.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="text-sm text-slate-400">Adresse</p>
                      <p className="text-white">{lead.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-sm text-slate-400">Dernier contact</p>
                      <p className="text-white">{lead.lastContact}</p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-700" />

                <div>
                  <h4 className="font-medium text-white mb-2">Notes</h4>
                  <p className="text-slate-300">{lead.notes}</p>
                </div>
              </CardContent>
            </Card>

            {/* Project Details */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Détails du Projet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-slate-400">Type de projet</p>
                    <p className="text-white">{lead.projectType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Type de toiture</p>
                    <p className="text-white">{lead.roofType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Surface disponible</p>
                    <p className="text-white">{lead.surfaceArea}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Puissance estimée</p>
                    <p className="text-white">{lead.estimatedPower}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Budget</p>
                    <p className="text-white font-semibold">{lead.budget}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Historique des Activités</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-400 mt-2"></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-white">{activity.type}</p>
                          <span className="text-xs text-slate-400">{activity.date}</span>
                        </div>
                        <p className="text-sm text-slate-300">{activity.description}</p>
                        <Badge className="mt-1 bg-green-600/20 text-green-400 text-xs">{activity.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Statut & Score</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-2">Statut actuel</p>
                  <Badge className="bg-green-600/20 text-green-400">{lead.status}</Badge>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Score de qualification</p>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-full rounded-full bg-slate-700">
                      <div className="h-3 rounded-full bg-blue-500" style={{ width: `${lead.score}%` }} />
                    </div>
                    <span className="text-sm font-medium text-white">{lead.score}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Source</p>
                  <p className="text-white">{lead.source}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Créé le</p>
                  <p className="text-white">{lead.createdAt}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-700 bg-slate-800/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Actions Rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Envoyer Email
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Planifier RDV
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

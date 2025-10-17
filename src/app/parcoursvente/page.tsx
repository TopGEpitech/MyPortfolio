"use client"

import { CardFooter } from "@/components/ui/card"

import { useState } from "react"
import Link from "next/link"
import {
  Check,
  ChevronRight,
  FileText,
  Home,
  Sun,
  Zap,
  Gift,
  Lightbulb,
  DollarSign,
  CreditCard,
  Building2,
  Ruler,
  Layers,
  Wind,
  TreePine,
  Warehouse,
  Plug,
  Leaf,
  Mountain,
  Minus,
  Plus,
  Flame,
  Droplets,
  X,
  Cloud,
  Car,
  User,
  MapPin,
  Calendar,
  Square,
  Users,
  Thermometer,
  Compass,
  Euro,
  TrendingUp,
  FileSignature,
  Mail,
  Hash,
  Shield,
  CalendarIcon,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Search,
  ExternalLink,
  LayoutGrid,
  Map,
  Filter,
  Clock,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChartContainer, ChartLegend } from "@/components/ui/chart"
import { PieChart, Pie, ResponsiveContainer } from "recharts"


const steps = [
  { id: 1, name: "Coordonnées du client", icon: FileText },
  { id: 2, name: "Étude du logement", icon: Home },
  { id: 3, name: "Potentiel solaire", icon: Sun },
  { id: 4, name: "Consommation", icon: Zap },
  { id: 5, name: "Éligibilité aux aides", icon: Gift },
  { id: 6, name: "Nos solutions", icon: Lightbulb },
  { id: 7, name: "Simulation", icon: DollarSign },
  { id: 8, name: "Paiement", icon: CreditCard },
]

export default function ProjectWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [openConsumptionModal, setOpenConsumptionModal] = useState<string | null>(null)
  // </CHANGE>
  const [showAppointments, setShowAppointments] = useState(false)
  const [openModal, setOpenModal] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "22 Chem. du Tronchon, 69570 Dardilly, France",
    city: "Dardilly",
    postalCode: "69570",
    housingType: "",
    constructionYear: "",
    surface: "",
    heatingType: "", // This was already present, but re-declared for clarity from updates
    energyBudget: "",
    signature: "",
    solarPotential: "",
    roofOrientation: "",
    eligibility: "",
    selectedSolution: "",
    houseShape: "",
    floorCount: 1,
    ceilingHeight: "",
    roofType: "",
    roofCovering: "",
    isolationCoefficient: "",
    floorSurface: "",
    livingSurface: "",
    roomCount: 5,
    housePosition: "",
    wallsInsulated: "",
    glazingType: "",
    ventilationType: "",
    hasGarden: "",
    roofSlope: 0,
    atticType: "",
    atticInsulated: "",
    wallMaterial: "",
    exteriorWallsInsulated: "",
    basementType: "",
    basementInsulated: "",
    hasGarage: "",
    garageConfig: "",
    garageInsulated: "",
    electricalInstallation: "",
    environmentSensitivity: "",
    solarInstallationZone: "",
    panelOrientation: "",
    equipableSurface: "",
    panelObstacles: [] as string[],
    solarMaskImpact: "",
    hasElectricVehicle: "",
    plansToBuyEV: "",
    // </CHANGE>
    heatingEnergySource: "",
    heatingBrand: "",
    heatedSurface: "",
    comfortTemperature: 21,
    heatingDaysPerYear: "",
    heatingUsage: "",
    heatingPeriods: [] as string[],
    heatingCostEstimate: "",
    ecsEnergySource: "",
    ecsInstallationYear: "",
    ecsStorageCapacity: "",
    ecsUsage: "",
    ecsCostEstimate: "",
    appliancesCostEstimate: "",
    appliancesElectricityPrice: "",
    appliancesPriceEvolution: 0,
    lightingBulbType: "",
    lightingCostEstimate: "",
    lightingElectricityPrice: "",
    lightingPriceEvolution: 0,
    // </CHANGE>
  })

  const appointments = [
    {
      id: 1,
      clientName: "Marie Dubois",
      address: "15 Rue de la République, 75001 Paris",
      date: "2024-11-25",
      time: "10:00",
      status: "scheduled",
      phone: "06 12 34 56 78",
      email: "marie.dubois@email.com",
    },
    {
      id: 2,
      clientName: "Pierre Martin",
      address: "42 Avenue des Champs, 69002 Lyon",
      date: "2024-11-26",
      time: "14:30",
      status: "completed",
      phone: "06 98 76 54 32",
      email: "pierre.martin@email.com",
    },
    {
      id: 3,
      clientName: "Sophie Bernard",
      address: "8 Boulevard Victor Hugo, 33000 Bordeaux",
      date: "2024-11-27",
      time: "09:00",
      status: "cancelled",
      phone: "06 45 67 89 01",
      email: "sophie.bernard@email.com",
    },
    {
      id: 4,
      clientName: "Luc Petit",
      address: "23 Rue Pasteur, 59000 Lille",
      date: "2024-11-28",
      time: "16:00",
      status: "pending",
      phone: "06 23 45 67 89",
      email: "luc.petit@email.com",
    },
  ]

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "scheduled":
        return {
          label: "Planifié",
          color: "bg-blue-500",
          icon: CalendarIcon,
          textColor: "text-blue-700",
          bgColor: "bg-blue-50",
        }
      case "completed":
        return {
          label: "Terminé",
          color: "bg-green-500",
          icon: CheckCircle2,
          textColor: "text-green-700",
          bgColor: "bg-green-50",
        }
      case "cancelled":
        return {
          label: "Annulé",
          color: "bg-red-500",
          icon: XCircle,
          textColor: "text-red-700",
          bgColor: "bg-red-50",
        }
      case "pending":
        return {
          label: "En attente",
          color: "bg-amber-500",
          icon: AlertCircle,
          textColor: "text-amber-700",
          bgColor: "bg-amber-50",
        }
      default:
        return {
          label: "Inconnu",
          color: "bg-gray-500",
          icon: AlertCircle,
          textColor: "text-gray-700",
          bgColor: "bg-gray-50",
        }
    }
  }

  const updateFormData = (field: string, value: string | number | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    // Updated sidebar and added appointments view
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-gradient-to-b from-blue-900 to-indigo-700 text-white p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6 bg-gradient-to-r from-indigo-800 to-blue-800 p-4 rounded-xl border-2 border-white/30 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Sun className="w-9 h-9 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">ISOWATT</h1>
              <p className="text-sm text-indigo-200">Groupe Auralliance</p>
            </div>
          </div>
        </div>

        {!showAppointments && (
          <>
            {/* Navigation Links */}
            <div className="mb-6 flex gap-2">
              <Link href="/proposals" className="flex-1">
                <button className="w-full bg-white/10 text-white text-xs py-2 px-3 rounded backdrop-blur-sm border border-white/20">
                  Propositions
                </button>
              </Link>
              <Link href="/roadmap" className="flex-1">
                <button className="w-full bg-white/10 text-white text-xs py-2 px-3 rounded backdrop-blur-sm border border-white/20">
                  Comparatif
                </button>
              </Link>
              <Link href="/isowattcrm" className="flex-1">
                <button className="w-full bg-white/10 text-white text-xs py-2 px-3 rounded backdrop-blur-sm border border-white/20">
                  CRM
                </button>
              </Link>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Parcours de vente</h2>
            </div>

            <nav className="space-y-2">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = currentStep === step.id
                const isCompleted = currentStep > step.id

                return (
                  <div key={step.id} className="relative">
                    <button
                      onClick={() => setCurrentStep(step.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                        isActive
                          ? "bg-white text-indigo-900 shadow-lg scale-105"
                          : isCompleted
                            ? "bg-indigo-800 hover:bg-indigo-700"
                            : "bg-indigo-800/50 opacity-60"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${
                          isActive
                            ? "bg-indigo-900 text-white"
                            : isCompleted
                              ? "bg-green-500 text-white"
                              : "bg-indigo-700 text-indigo-300"
                        }`}
                      >
                        {isCompleted ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-xs opacity-75 mb-1">Étape {step.id}</div>
                        <div className="font-semibold">{step.name}</div>
                      </div>
                    </button>
                    {index < steps.length - 1 && <div className="absolute left-9 top-full w-0.5 h-2 bg-indigo-700" />}
                  </div>
                )
              })}
            </nav>
          </>
        )}

        {showAppointments && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Mes Rendez-vous</h2>
            <div className="space-y-3">
              {appointments.slice(0, 3).map((apt) => {
                const statusConfig = getStatusConfig(apt.status)
                const StatusIcon = statusConfig.icon
                return (
                  <div key={apt.id} className="bg-indigo-800 rounded-lg p-4 hover:bg-indigo-700 transition-all">
                    <div className="flex items-start gap-3">
                      <div className={`${statusConfig.color} p-2 rounded-lg`}>
                        <StatusIcon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{apt.clientName}</p>
                        <p className="text-xs text-indigo-200 mt-1 flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3" />
                          {new Date(apt.date).toLocaleDateString("fr-FR")} à {apt.time}
                        </p>
                        <p className="text-xs text-indigo-300 mt-1">{statusConfig.label}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <button
              onClick={() => setShowAppointments(false)}
              className="w-full mt-6 bg-white text-indigo-900 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all"
            >
              Retour au formulaire
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-12">
        <button
            onClick={() => setShowAppointments(!showAppointments)}
            className={`p-3 rounded-lg transition-all transform hover:scale-110 shadow-2xl relative overflow-hidden group border-2 border-black ${
                showAppointments
                    ? "bg-blue-600/40 border-blue-500 text-blue-900"
                    : "bg-blue-500/30 border-blue-400 hover:bg-blue-500/40"
            }`}
            title="Rendez-vous"
        >
          <div className="absolute inset-0  bg-blue-400 group-hover:bg-blue-400/40 transition-colors duration-500"></div>
          <User className="w-6 h-6 relative z-10 text-white-800 group-hover:text-blue-900 transition-all duration-300 drop-shadow-lg" />
        </button>

        <div className="max-w-6xl mx-auto">
          {showAppointments ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Gestion des Rendez-vous</h1>
                  <p className="text-gray-600 mt-1">Planifiez et suivez vos rendez-vous clients</p>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg">
                  <Plus className="w-5 h-5" />
                  Nouveau rendez-vous
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher un client, une adresse..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2">
                    <Filter className="w-5 h-5" />
                    Filtres
                  </button>
                </div>

                <div className="grid gap-4">
                  {appointments.map((apt) => {
                    const statusConfig = getStatusConfig(apt.status)
                    const StatusIcon = statusConfig.icon
                    return (
                      <div
                        key={apt.id}
                        className={`${statusConfig.bgColor} border-l-4 ${statusConfig.color.replace("bg-", "border-")} rounded-lg p-6 hover:shadow-md transition-all`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`${statusConfig.color} p-3 rounded-lg`}>
                              <StatusIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-lg font-bold text-gray-900">{apt.clientName}</h3>
                                <span
                                  className={`${statusConfig.textColor} ${statusConfig.bgColor} px-3 py-1 rounded-full text-xs font-semibold`}
                                >
                                  {statusConfig.label}
                                </span>
                              </div>
                              <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4 text-gray-400" />
                                  <span>{apt.address}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-2">
                                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                                    <span>
                                      {new Date(apt.date).toLocaleDateString("fr-FR", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-gray-400" />
                                    <span>{apt.time}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <span>{apt.phone}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    <span>{apt.email}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all text-sm font-semibold">
                              Modifier
                            </button>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all text-sm font-semibold">
                              Détails
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Coordonnées du client */}
              {currentStep === 1 && (
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl">
                    <CardTitle className="text-2xl">Coordonnées du client</CardTitle>
                    <CardDescription className="text-indigo-100">
                      Commençons par quelques informations de base
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          placeholder="Jean"
                          className="border-indigo-200 focus:border-indigo-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData("lastName", e.target.value)}
                          placeholder="Dupont"
                          className="border-indigo-200 focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        placeholder="jean.dupont@example.com"
                        className="border-indigo-200 focus:border-indigo-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        placeholder="06 12 34 56 78"
                        className="border-indigo-200 focus:border-indigo-500"
                      />
                    </div>

                    <Separator className="my-6" />

                    <div className="space-y-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => updateFormData("address", e.target.value)}
                        placeholder="123 Rue de la République"
                        className="border-indigo-200 focus:border-indigo-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Code postal</Label>
                        <Input
                          id="postalCode"
                          value={formData.postalCode}
                          onChange={(e) => updateFormData("postalCode", e.target.value)}
                          placeholder="75001"
                          className="border-indigo-200 focus:border-indigo-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Ville</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => updateFormData("city", e.target.value)}
                          placeholder="Paris"
                          className="border-indigo-200 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Étude du logement */}
              {currentStep === 2 && (
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl">
                    <CardTitle className="text-2xl">Étude du logement</CardTitle>
                    <CardDescription className="text-indigo-100">
                      Parlez-nous en détail de votre habitation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    {/* Type de logement */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Type de logement</Label>
                      <RadioGroup
                        value={formData.housingType}
                        onValueChange={(value) => updateFormData("housingType", value)}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div>
                          <RadioGroupItem value="house" id="house" className="peer sr-only" />
                          <Label
                            htmlFor="house"
                            className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-6 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                          >
                            <Home className="mb-3 h-8 w-8 text-indigo-600" />
                            <span className="font-semibold">Maison</span>
                          </Label>
                        </div>
                        <div>
                          <RadioGroupItem value="apartment" id="apartment" className="peer sr-only" />
                          <Label
                            htmlFor="apartment"
                            className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-6 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                          >
                            <Building2 className="mb-3 h-8 w-8 text-indigo-600" />
                            <span className="font-semibold">Appartement</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Separator />

                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-indigo-900">Architecture de la maison</h3>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="constructionYear">Année de construction</Label>
                          <Select
                            value={formData.constructionYear}
                            onValueChange={(value) => updateFormData("constructionYear", value)}
                          >
                            <SelectTrigger className="border-indigo-200">
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="before-1975">Avant 1975</SelectItem>
                              <SelectItem value="1975-1990">1975-1990</SelectItem>
                              <SelectItem value="1990-2005">1990-2005</SelectItem>
                              <SelectItem value="2005-2012">2005-2012</SelectItem>
                              <SelectItem value="after-2012">Après 2012</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="isolationCoefficient">Coefficient d'isolation</Label>
                          <Select
                            value={formData.isolationCoefficient}
                            onValueChange={(value) => updateFormData("isolationCoefficient", value)}
                          >
                            <SelectTrigger className="border-indigo-200">
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Faible</SelectItem>
                              <SelectItem value="medium">Moyen</SelectItem>
                              <SelectItem value="good">Bon</SelectItem>
                              <SelectItem value="excellent">Excellent</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="floorSurface">Surface au sol (m²)</Label>
                          <Input
                            id="floorSurface"
                            type="number"
                            value={formData.floorSurface}
                            onChange={(e) => updateFormData("floorSurface", e.target.value)}
                            placeholder="100"
                            className="border-indigo-200 focus:border-indigo-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="livingSurface">Surface habitable (m²)</Label>
                          <Input
                            id="livingSurface"
                            type="number"
                            value={formData.livingSurface}
                            onChange={(e) => updateFormData("livingSurface", e.target.value)}
                            placeholder="120"
                            className="border-indigo-200 focus:border-indigo-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Nombre de pièces</Label>
                        <div className="flex items-center gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => updateFormData("roomCount", Math.max(1, formData.roomCount - 1))}
                            className="border-indigo-300"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <div className="flex-1 text-center">
                            <div className="text-3xl font-bold text-indigo-600">{formData.roomCount}</div>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => updateFormData("roomCount", formData.roomCount + 1)}
                            className="border-indigo-300"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Label>Positionnement de la maison</Label>
                        <RadioGroup
                          value={formData.housePosition}
                          onValueChange={(value) => updateFormData("housePosition", value)}
                          className="grid grid-cols-3 gap-4"
                        >
                          {[
                            { value: "independent", name: "Maison individuelle", icon: Home },
                            { value: "semi-detached-1", name: "Maison mitoyenne (1 côté)", icon: Building2 },
                            { value: "semi-detached-2", name: "Maison mitoyenne (2 côtés)", icon: Building2 },
                          ].map((option) => (
                            <div key={option.value}>
                              <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                              <Label
                                htmlFor={option.value}
                                className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                              >
                                <option.icon className="mb-2 h-6 w-6 text-indigo-600" />
                                <span className="text-sm font-semibold text-center">{option.name}</span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    </div>

                    <Separator />

                    {/* Forme de la maison */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Forme de la maison</Label>
                      <RadioGroup
                        value={formData.houseShape}
                        onValueChange={(value) => updateFormData("houseShape", value)}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          { value: "square", label: "Carrée", icon: Building2 },
                          { value: "elongated", label: "Allongée", icon: Ruler },
                          { value: "developed", label: "Développée", icon: Layers },
                        ].map((shape) => (
                          <div key={shape.value}>
                            <RadioGroupItem value={shape.value} id={shape.value} className="peer sr-only" />
                            <Label
                              htmlFor={shape.value}
                              className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-6 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <shape.icon className="mb-3 h-8 w-8 text-indigo-600" />
                              <span className="font-semibold">{shape.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Nombre de niveaux habitables */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Nombre de niveaux habitables (hors combles)</Label>
                      <RadioGroup
                        value={formData.floorCount.toString()}
                        onValueChange={(value) => updateFormData("floorCount", Number.parseInt(value))}
                        className="grid grid-cols-4 gap-4"
                      >
                        {[1, 2, 3].map((num) => (
                          <div key={num}>
                            <RadioGroupItem value={num.toString()} id={`floor-${num}`} className="peer sr-only" />
                            <Label
                              htmlFor={`floor-${num}`}
                              className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-6 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <Layers className="mb-3 h-8 w-8 text-indigo-600" />
                              <span className="font-semibold text-2xl">{num}</span>
                            </Label>
                          </div>
                        ))}
                        <div>
                          <RadioGroupItem value="more" id="floor-more" className="peer sr-only" />
                          <Label
                            htmlFor="floor-more"
                            className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-6 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                          >
                            <Plus className="mb-3 h-8 w-8 text-indigo-600" />
                            <span className="font-semibold">Plus</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Hauteur moyenne sous plafond */}
                    <div className="space-y-2">
                      <Label htmlFor="ceilingHeight">Hauteur moyenne sous plafond (m)</Label>
                      <Select
                        value={formData.ceilingHeight}
                        onValueChange={(value) => updateFormData("ceilingHeight", value)}
                      >
                        <SelectTrigger className="border-indigo-200">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2.3">2,3 m</SelectItem>
                          <SelectItem value="2.5">2,5 m</SelectItem>
                          <SelectItem value="2.7">2,7 m</SelectItem>
                          <SelectItem value="3.0">3,0 m</SelectItem>
                          <SelectItem value="3.5">3,5 m et plus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator />

                    {/* Type de toit */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Type de toit</Label>
                      <RadioGroup
                        value={formData.roofType}
                        onValueChange={(value) => updateFormData("roofType", value)}
                        className="grid grid-cols-2 gap-4"
                      >
                        {[
                          { value: "2-slopes", label: "Toiture à 2 versants", icon: Home },
                          { value: "4-slopes", label: "Toiture à 4 versants", icon: Home },
                          { value: "1-slope", label: "Toit à une pente", icon: Mountain },
                          { value: "flat", label: "Toit plat", icon: Layers },
                        ].map((roof) => (
                          <div key={roof.value}>
                            <RadioGroupItem value={roof.value} id={roof.value} className="peer sr-only" />
                            <Label
                              htmlFor={roof.value}
                              className="flex items-center gap-4 rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <roof.icon className="h-6 w-6 text-indigo-600" />
                              <span className="font-semibold">{roof.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Type de couverture */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Type de couverture de la toiture</Label>
                      <RadioGroup
                        value={formData.roofCovering}
                        onValueChange={(value) => updateFormData("roofCovering", value)}
                        className="grid grid-cols-4 gap-4"
                      >
                        {["tuile", "ardoise", "tôle", "fibrociment"].map((material) => (
                          <div key={material}>
                            <RadioGroupItem value={material} id={material} className="peer sr-only" />
                            <Label
                              htmlFor={material}
                              className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <Layers className="mb-2 h-6 w-6 text-indigo-600" />
                              <span className="font-semibold text-sm">
                                {material.charAt(0).toUpperCase() + material.slice(1)}
                              </span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Inclinaison du plan */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Inclinaison du plan</Label>
                      <div className="space-y-4">
                        <Slider
                          value={[formData.roofSlope]}
                          onValueChange={(value) => updateFormData("roofSlope", value[0])}
                          max={70}
                          step={1}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>0°</span>
                          <span className="text-2xl font-bold text-indigo-600">{formData.roofSlope}°</span>
                          <span>70°</span>
                        </div>
                      </div>
                    </div>

                    {/* Type de combles */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Type de combles</Label>
                      <RadioGroup
                        value={formData.atticType}
                        onValueChange={(value) => updateFormData("atticType", value)}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          { value: "converted", label: "Combles aménagés", icon: Home },
                          { value: "lost", label: "Combles perdus", icon: Layers },
                          { value: "none", label: "Pas de comble", icon: Building2 },
                        ].map((attic) => (
                          <div key={attic.value}>
                            <RadioGroupItem value={attic.value} id={attic.value} className="peer sr-only" />
                            <Label
                              htmlFor={attic.value}
                              className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <attic.icon className="mb-2 h-6 w-6 text-indigo-600" />
                              <span className="font-semibold text-sm text-center">{attic.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Combles isolés */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Combles isolés</Label>
                      <RadioGroup
                        value={formData.atticInsulated}
                        onValueChange={(value) => updateFormData("atticInsulated", value)}
                        className="grid grid-cols-3 gap-4"
                      >
                        {["oui", "non", "je ne sais pas"].map((option) => (
                          <div key={option}>
                            <RadioGroupItem value={option} id={`attic-${option}`} className="peer sr-only" />
                            <Label
                              htmlFor={`attic-${option}`}
                              className="flex items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all font-semibold"
                            >
                              {option.charAt(0).toUpperCase() + option.slice(1)}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <Separator />

                    {/* Type de murs de la maison */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Type de murs de la maison (Extérieur)</Label>
                      <RadioGroup
                        value={formData.wallMaterial}
                        onValueChange={(value) => updateFormData("wallMaterial", value)}
                        className="grid grid-cols-4 gap-4"
                      >
                        {[
                          { value: "stone", label: "Pierre", icon: Mountain },
                          { value: "concrete", label: "Béton", icon: Building2 },
                          { value: "brick", label: "Brique", icon: Building2 },
                          { value: "wood", label: "Bois", icon: TreePine },
                        ].map((material) => (
                          <div key={material.value}>
                            <RadioGroupItem value={material.value} id={material.value} className="peer sr-only" />
                            <Label
                              htmlFor={material.value}
                              className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <material.icon className="mb-2 h-6 w-6 text-indigo-600" />
                              <span className="font-semibold text-sm">{material.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Murs isolés */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Murs isolés</Label>
                      <RadioGroup
                        value={formData.wallsInsulated}
                        onValueChange={(value) => updateFormData("wallsInsulated", value)}
                        className="grid grid-cols-3 gap-4"
                      >
                        {["oui", "non", "je ne sais pas"].map((option) => (
                          <div key={option}>
                            <RadioGroupItem value={option} id={`walls-${option}`} className="peer sr-only" />
                            <Label
                              htmlFor={`walls-${option}`}
                              className="flex items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all font-semibold"
                            >
                              {option.charAt(0).toUpperCase() + option.slice(1)}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Type de vitrage */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Type de vitrage</Label>
                      <RadioGroup
                        value={formData.glazingType}
                        onValueChange={(value) => updateFormData("glazingType", value)}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          { value: "simple", label: "Simple" },
                          { value: "double", label: "Double" },
                          { value: "triple", label: "Triple" },
                        ].map((glazing) => (
                          <div key={glazing.value}>
                            <RadioGroupItem value={glazing.value} id={glazing.value} className="peer sr-only" />
                            <Label
                              htmlFor={glazing.value}
                              className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-6 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <Layers className="mb-3 h-8 w-8 text-indigo-600" />
                              <span className="font-semibold">{glazing.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Type de ventilation */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Type de ventilation</Label>
                      <RadioGroup
                        value={formData.ventilationType}
                        onValueChange={(value) => updateFormData("ventilationType", value)}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          { value: "natural", label: "Naturelle", icon: Wind },
                          { value: "simple", label: "Simple flux", icon: Wind },
                          { value: "double", label: "Double flux", icon: Wind },
                        ].map((ventilation) => (
                          <div key={ventilation.value}>
                            <RadioGroupItem value={ventilation.value} id={ventilation.value} className="peer sr-only" />
                            <Label
                              htmlFor={ventilation.value}
                              className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-6 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <ventilation.icon className="mb-3 h-8 w-8 text-indigo-600" />
                              <span className="font-semibold text-sm">{ventilation.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <Separator />

                    {/* Type de sous-sol */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Type de sous-sol</Label>
                      <RadioGroup
                        value={formData.basementType}
                        onValueChange={(value) => updateFormData("basementType", value)}
                        className="grid grid-cols-2 gap-4"
                      >
                        {[
                          { value: "basement", label: "Cave ou sous-sol", icon: Warehouse },
                          { value: "garage", label: "Garage", icon: Warehouse },
                          { value: "crawlspace", label: "Vide sanitaire", icon: Layers },
                          { value: "slab", label: "Terre-plein", icon: Layers },
                        ].map((basement) => (
                          <div key={basement.value}>
                            <RadioGroupItem value={basement.value} id={basement.value} className="peer sr-only" />
                            <Label
                              htmlFor={basement.value}
                              className="flex items-center gap-4 rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <basement.icon className="h-6 w-6 text-indigo-600" />
                              <span className="font-semibold">{basement.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Avez-vous un garage */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Avez-vous un garage ?</Label>
                      <RadioGroup
                        value={formData.hasGarage}
                        onValueChange={(value) => updateFormData("hasGarage", value)}
                        className="grid grid-cols-2 gap-4"
                      >
                        {[
                          { value: "oui", label: "Oui", icon: Home },
                          { value: "non", label: "Non", icon: Building2 },
                        ].map((option) => (
                          <div key={option.value}>
                            <RadioGroupItem
                              value={option.value}
                              id={`garage-${option.value}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`garage-${option.value}`}
                              className="flex items-center gap-4 rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <option.icon className="h-6 w-6 text-indigo-600" />
                              <span className="font-semibold">{option.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {formData.hasGarage === "oui" && (
                      <>
                        {/* Configuration du garage */}
                        <div className="space-y-4">
                          <Label className="text-lg font-semibold">Sélectionner la configuration de votre garage</Label>
                          <RadioGroup
                            value={formData.garageConfig}
                            onValueChange={(value) => updateFormData("garageConfig", value)}
                            className="grid grid-cols-3 gap-4"
                          >
                            {[
                              { value: "interior", label: "Garage intérieur" },
                              { value: "attached", label: "Garage accolé" },
                              { value: "detached", label: "Garage indépendant" },
                            ].map((config) => (
                              <div key={config.value}>
                                <RadioGroupItem value={config.value} id={config.value} className="peer sr-only" />
                                <Label
                                  htmlFor={config.value}
                                  className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                                >
                                  <Warehouse className="mb-2 h-6 w-6 text-indigo-600" />
                                  <span className="font-semibold text-sm text-center">{config.label}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        {/* Garage isolé */}
                        <div className="space-y-4">
                          <Label className="text-lg font-semibold">Garage isolé</Label>
                          <RadioGroup
                            value={formData.garageInsulated}
                            onValueChange={(value) => updateFormData("garageInsulated", value)}
                            className="grid grid-cols-3 gap-4"
                          >
                            {["oui", "non", "je ne sais pas"].map((option) => (
                              <div key={option}>
                                <RadioGroupItem
                                  value={option}
                                  id={`garage-insulated-${option}`}
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor={`garage-insulated-${option}`}
                                  className="flex items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all font-semibold"
                                >
                                  {option.charAt(0).toUpperCase() + option.slice(1)}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>
                      </>
                    )}

                    {/* Jardin */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Jardin</Label>
                      <RadioGroup
                        value={formData.hasGarden}
                        onValueChange={(value) => updateFormData("hasGarden", value)}
                        className="grid grid-cols-2 gap-4"
                      >
                        {[
                          { value: "oui", label: "Oui", icon: TreePine },
                          { value: "non", label: "Non", icon: Building2 },
                        ].map((option) => (
                          <div key={option.value}>
                            <RadioGroupItem
                              value={option.value}
                              id={`garden-${option.value}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`garden-${option.value}`}
                              className="flex items-center gap-4 rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <option.icon className="h-6 w-6 text-indigo-600" />
                              <span className="font-semibold">{option.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <Separator />

                    {/* Type d'installation électrique */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Type d'installation électrique</Label>
                      <RadioGroup
                        value={formData.electricalInstallation}
                        onValueChange={(value) => updateFormData("electricalInstallation", value)}
                        className="grid grid-cols-2 gap-4"
                      >
                        {[
                          { value: "single", label: "Monophasé" },
                          { value: "three", label: "Triphasé" },
                        ].map((type) => (
                          <div key={type.value}>
                            <RadioGroupItem value={type.value} id={type.value} className="peer sr-only" />
                            <Label
                              htmlFor={type.value}
                              className="flex items-center gap-4 rounded-xl border-2 border-indigo-200 bg-white p-6 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <Plug className="h-8 w-8 text-indigo-600" />
                              <span className="font-semibold text-lg">{type.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    {/* Sensibilité à l'environnement */}
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold text-green-700">Sensibilité à l'environnement</Label>
                      <p className="text-sm text-gray-600">Êtes-vous sensible à la préservation de notre planète ?</p>
                      <RadioGroup
                        value={formData.environmentSensitivity}
                        onValueChange={(value) => updateFormData("environmentSensitivity", value)}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          { value: "very", label: "Très sensible", icon: Leaf },
                          { value: "moderate", label: "Modérément", icon: Leaf },
                          { value: "not", label: "Pas vraiment", icon: Building2 },
                        ].map((sensitivity) => (
                          <div key={sensitivity.value}>
                            <RadioGroupItem value={sensitivity.value} id={sensitivity.value} className="peer sr-only" />
                            <Label
                              htmlFor={sensitivity.value}
                              className="flex flex-col items-center justify-center rounded-xl border-2 border-green-200 bg-white p-4 hover:bg-green-50 peer-data-[state=checked]:border-green-600 peer-data-[state=checked]:bg-green-50 cursor-pointer transition-all"
                            >
                              <sensitivity.icon className="mb-2 h-6 w-6 text-green-600" />
                              <span className="font-semibold text-sm text-center">{sensitivity.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    {/* </CHANGE> */}
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Étude du potentiel solaire */}
              {currentStep === 3 && (
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl">
                    <CardTitle className="text-2xl">Étude du potentiel solaire</CardTitle>
                    <CardDescription className="text-indigo-100">
                      Analysons le potentiel solaire de votre habitation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Sun className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-yellow-900">
                            Potentiel d'ensoleillement de votre habitation !
                          </h3>
                          <p className="text-yellow-700">
                            Selon votre adresse, votre habitation dispose de <strong>1260 kWh/m²</strong> par an
                            d'ensoleillement
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* </CHANGE> */}

                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Carte d'ensoleillement</Label>
                      <div className="w-full h-96 bg-gray-100 rounded-xl border-2 border-gray-200 overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          loading="lazy"
                          src="https://www.google.com/maps?q=22+Chem.+du+Tronchon,+69570+Dardilly,+France&output=embed&z=19&t=k"
                        ></iframe>
                      </div>
                    </div>
                    {/* </CHANGE> */}

                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Zone d'implantation la plus ensoleillée</Label>
                      <RadioGroup
                        value={formData.solarInstallationZone}
                        onValueChange={(value) => updateFormData("solarInstallationZone", value)}
                        className="grid grid-cols-2 gap-4"
                      >
                        {[
                          { value: "roof", label: "Toiture de la maison", icon: Home },
                          { value: "ground", label: "Au sol", icon: Layers },
                          { value: "other-sloped", label: "Autre toiture inclinée", icon: Mountain },
                          { value: "other-flat", label: "Autre toiture plate", icon: Building2 },
                        ].map((zone) => (
                          <div key={zone.value}>
                            <RadioGroupItem value={zone.value} id={zone.value} className="peer sr-only" />
                            <Label
                              htmlFor={zone.value}
                              className="flex items-center gap-4 rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <zone.icon className="h-6 w-6 text-indigo-600" />
                              <span className="font-semibold">{zone.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    {/* </CHANGE> */}

                    <Separator />

                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Exposition du pan</Label>
                      <div className="flex justify-center py-8">
                        <div className="relative w-80 h-80">
                          <div className="absolute inset-0 rounded-full border-4 border-gray-200 bg-white"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-sm text-gray-500 mb-2">Orientation</div>
                              <div className="text-3xl font-bold text-orange-600">Sud</div>
                            </div>
                          </div>
                          {/* Compass directions */}
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-gray-700">
                            Nord
                          </div>
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-orange-600">
                            Sud
                          </div>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-700">
                            Est
                          </div>
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-700">
                            Ouest
                          </div>
                          <div className="absolute top-12 right-12 text-xs font-semibold text-gray-600">Nord-Est</div>
                          <div className="absolute top-12 left-12 text-xs font-semibold text-gray-600">Nord-Ouest</div>
                          <div className="absolute bottom-12 right-12 text-xs font-semibold text-gray-600">Sud-Est</div>
                          <div className="absolute bottom-12 left-12 text-xs font-semibold text-gray-600">
                            Sud-Ouest
                          </div>
                        </div>
                      </div>
                      <RadioGroup
                        value={formData.panelOrientation}
                        onValueChange={(value) => updateFormData("panelOrientation", value)}
                        className="grid grid-cols-4 gap-3"
                      >
                        {["Nord", "Nord-Est", "Est", "Sud-Est", "Sud", "Sud-Ouest", "Ouest", "Nord-Ouest"].map(
                          (direction) => (
                            <div key={direction}>
                              <RadioGroupItem value={direction.toLowerCase()} id={direction} className="peer sr-only" />
                              <Label
                                htmlFor={direction}
                                className="flex items-center justify-center rounded-lg border-2 border-indigo-200 bg-white p-3 hover:bg-indigo-50 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-50 cursor-pointer transition-all text-sm font-semibold"
                              >
                                {direction}
                              </Label>
                            </div>
                          ),
                        )}
                      </RadioGroup>
                    </div>
                    {/* </CHANGE> */}

                    <Separator />

                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Surface équipable (m²)</Label>
                      <RadioGroup
                        value={formData.equipableSurface}
                        onValueChange={(value) => updateFormData("equipableSurface", value)}
                        className="grid grid-cols-5 gap-4"
                      >
                        {[
                          { value: "0-15", label: "0 - 15m²" },
                          { value: "15-25", label: "15 - 25m²" },
                          { value: "25-35", label: "25-35m²" },
                          { value: "35-55", label: "35-55m²" },
                          { value: "55+", label: "plus de 55m²" },
                        ].map((surface) => (
                          <div key={surface.value}>
                            <RadioGroupItem value={surface.value} id={surface.value} className="peer sr-only" />
                            <Label
                              htmlFor={surface.value}
                              className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <Home className="mb-2 h-6 w-6 text-indigo-600" />
                              <span className="font-semibold text-sm text-center">{surface.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    {/* </CHANGE> */}

                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Obstacle(s) du pan (choix multiple)</Label>
                      <div className="grid grid-cols-4 gap-4">
                        {[
                          { value: "none", label: "Pas d'obstacle", icon: Home },
                          { value: "skylight", label: "Velux", icon: Building2 },
                          { value: "dormer", label: "Chien(s) assis", icon: Mountain },
                          { value: "chimney", label: "Cheminée(s)", icon: Layers },
                        ].map((obstacle) => {
                          const isSelected = formData.panelObstacles.includes(obstacle.value)
                          return (
                            <div key={obstacle.value}>
                              <input
                                type="checkbox"
                                id={obstacle.value}
                                className="peer sr-only"
                                checked={isSelected}
                                onChange={(e) => {
                                  const current = formData.panelObstacles
                                  if (e.target.checked) {
                                    updateFormData("panelObstacles", [...current, obstacle.value])
                                  } else {
                                    updateFormData(
                                      "panelObstacles",
                                      current.filter((o) => o !== obstacle.value),
                                    )
                                  }
                                }}
                              />
                              <Label
                                htmlFor={obstacle.value}
                                className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-checked:border-indigo-600 peer-checked:bg-indigo-50 cursor-pointer transition-all"
                              >
                                <obstacle.icon className="mb-2 h-6 w-6 text-indigo-600" />
                                <span className="font-semibold text-sm text-center">{obstacle.label}</span>
                              </Label>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    {/* </CHANGE> */}

                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Impact du masque solaire (%)</Label>
                      <RadioGroup
                        value={formData.solarMaskImpact}
                        onValueChange={(value) => updateFormData("solarMaskImpact", value)}
                        className="grid grid-cols-5 gap-4"
                      >
                        {[
                          { value: "0", label: "0%" },
                          { value: "5-10", label: "5-10%" },
                          { value: "10-20", label: "10-20%" },
                          { value: "20-30", label: "20-30%" },
                          { value: "30-50", label: "30-50%" },
                        ].map((impact) => (
                          <div key={impact.value}>
                            <RadioGroupItem
                              value={impact.value}
                              id={`impact-${impact.value}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`impact-${impact.value}`}
                              className="flex flex-col items-center justify-center rounded-xl border-2 border-indigo-200 bg-white p-4 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <Sun className="mb-2 h-6 w-6 text-indigo-600" />
                              <span className="font-semibold text-sm">{impact.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    {/* </CHANGE> */}

                    <Separator />

                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">
                        Possédez-vous un véhicule électrique rechargeable?
                      </Label>
                      <RadioGroup
                        value={formData.hasElectricVehicle}
                        onValueChange={(value) => updateFormData("hasElectricVehicle", value)}
                        className="grid grid-cols-2 gap-4"
                      >
                        {[
                          { value: "oui", label: "Oui", icon: Zap },
                          { value: "non", label: "Non", icon: Building2 },
                        ].map((option) => (
                          <div key={option.value}>
                            <RadioGroupItem value={option.value} id={`ev-${option.value}`} className="peer sr-only" />
                            <Label
                              htmlFor={`ev-${option.value}`}
                              className="flex items-center gap-4 rounded-xl border-2 border-indigo-200 bg-white p-6 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <option.icon className="h-8 w-8 text-indigo-600" />
                              <span className="font-semibold text-lg">{option.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">
                        Avez-vous l'intention d'acheter un véhicule électrique rechargeable dans les 5 ans?
                      </Label>
                      <RadioGroup
                        value={formData.plansToBuyEV}
                        onValueChange={(value) => updateFormData("plansToBuyEV", value)}
                        className="grid grid-cols-2 gap-4"
                      >
                        {[
                          { value: "oui", label: "Oui", icon: Zap },
                          { value: "non", label: "Non", icon: Building2 },
                        ].map((option) => (
                          <div key={option.value}>
                            <RadioGroupItem
                              value={option.value}
                              id={`ev-plan-${option.value}`}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={`ev-plan-${option.value}`}
                              className="flex items-center gap-4 rounded-xl border-2 border-indigo-200 bg-white p-6 hover:bg-indigo-50 peer-data-[state=checked]:border-indigo-600 peer-data-[state=checked]:bg-indigo-50 cursor-pointer transition-all"
                            >
                              <option.icon className="h-8 w-8 text-indigo-600" />
                              <span className="font-semibold text-lg">{option.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                    {/* </CHANGE> */}

                    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200">
                      <h3 className="font-semibold text-lg mb-4 text-green-900">Résumé du potentiel solaire</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-yellow-600 mb-1">1,260</div>
                          <div className="text-xs text-gray-600">kWh/m²/an</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-green-600 mb-1">4,500</div>
                          <div className="text-xs text-gray-600">kWh/an produits</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-indigo-600 mb-1">680€</div>
                          <div className="text-xs text-gray-600">Économies/an</div>
                        </div>
                      </div>
                    </div>
                    {/* </CHANGE> */}
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Consommation et équipement */}
              {currentStep === 4 && (
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl">
                    <CardTitle className="text-2xl">Consommation et équipement</CardTitle>
                    <CardDescription className="text-indigo-100">Estimez votre consommation actuelle</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left: Consumption cards */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Vos consommations poste par poste</h3>

                        {/* Chauffage Card */}
                        <button
                          onClick={() => setOpenConsumptionModal("heating")}
                          className="w-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white hover:shadow-lg transition-all text-left group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                                <Flame className="w-7 h-7" />
                              </div>
                              <div>
                                <div className="font-semibold text-lg">Chauffage</div>
                                <div className="text-sm opacity-90">(10€/m² chauffé)</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-3xl font-bold">968€</div>
                              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </button>

                        {/* ECS Card */}
                        <button
                          onClick={() => setOpenConsumptionModal("ecs")}
                          className="w-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white hover:shadow-lg transition-all text-left group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                                <Droplets className="w-7 h-7" />
                              </div>
                              <div>
                                <div className="font-semibold text-lg">Eau chaude sanitaire (ECS)</div>
                                <div className="text-sm opacity-90">(10€/m² chauffé)</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-3xl font-bold">220€</div>
                              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </button>

                        {/* Appareils électriques Card */}
                        <button
                          onClick={() => setOpenConsumptionModal("appliances")}
                          className="w-full bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white hover:shadow-lg transition-all text-left group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                                <Zap className="w-7 h-7" />
                              </div>
                              <div>
                                <div className="font-semibold text-lg">Appareils électriques</div>
                                <div className="text-sm opacity-90">(10€/m² chauffé)</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-3xl font-bold">1440€</div>
                              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </button>

                        {/* Eclairage Card */}
                        <button
                          onClick={() => setOpenConsumptionModal("lighting")}
                          className="w-full bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white hover:shadow-lg transition-all text-left group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                                <Lightbulb className="w-7 h-7" />
                              </div>
                              <div>
                                <div className="font-semibold text-lg">Eclairage</div>
                                <div className="text-sm opacity-90">(10€/m² chauffé)</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-3xl font-bold">400€</div>
                              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </button>
                      </div>

                      {/* Right: Donut chart */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Répartition de votre consommation énergétique
                        </h3>
                        <div className="bg-white rounded-xl p-6 border-2 border-gray-100 flex flex-col items-center">
                          <ChartContainer
                            config={{
                              chauffage: {
                                label: "Chauffage",
                                color: "#f97316",
                              },
                              eclairage: {
                                label: "Eclairage",
                                color: "#22c55e",
                              },
                              ecs: {
                                label: "ECS",
                                color: "#3b82f6",
                              },
                              appareils: {
                                label: "Appareils électriques",
                                color: "#ef4444",
                              },
                            }}
                            className="h-[350px] w-full"
                          >
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={[
                                    { name: "Chauffage", value: 32, fill: "#f97316" },
                                    { name: "Eclairage", value: 13, fill: "#22c55e" },
                                    { name: "ECS", value: 7, fill: "#3b82f6" },
                                    { name: "Appareils électriques", value: 46, fill: "#ef4444" },
                                  ]}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={60}
                                  outerRadius={100}
                                  paddingAngle={2}
                                  dataKey="value"
                                />
                                <text
                                  x="50%"
                                  y="45%"
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                  className="text-2xl font-bold fill-gray-800"
                                >
                                  Electricité
                                </text>
                                <text
                                  x="50%"
                                  y="55%"
                                  textAnchor="middle"
                                  dominantBaseline="middle"
                                  className="text-3xl font-bold fill-gray-900"
                                >
                                  1800€
                                </text>
                                <ChartLegend
                                  content={({ payload }) => (
                                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                                      {payload?.map((entry: any, index: number) => (
                                        <div key={`legend-${index}`} className="flex items-center gap-2">
                                          <div
                                            className="w-3 h-3 rounded-full"
                                            style={{ backgroundColor: entry.color }}
                                          />
                                          <span className="text-sm font-semibold text-gray-700">{entry.value} %</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                />
                              </PieChart>
                            </ResponsiveContainer>
                          </ChartContainer>
                          <div className="mt-6 pt-4 border-t border-gray-200 text-center w-full">
                            <div className="text-sm text-gray-600 mb-1">Gaz naturel</div>
                            <div className="text-2xl font-bold text-gray-700">1188€</div>
                          </div>
                        </div>

                        {/* Total consumption */}
                        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-6 text-center">
                          <div className="text-sm opacity-90 mb-2">Votre consommation annuelle globale</div>
                          <div className="text-5xl font-bold">2988€</div>
                        </div>
                        {/* </CHANGE> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 5: Éligibilité aux aides - NEW */}
              {currentStep === 5 && (
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl">
                    <CardTitle className="text-2xl">Éligibilité aux aides</CardTitle>
                    <CardDescription className="text-indigo-100">
                      Découvrez les aides financières disponibles pour votre projet
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-green-900">Vous êtes éligible !</h3>
                          <p className="text-green-700">Votre projet peut bénéficier de plusieurs aides</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Aides disponibles pour votre projet</h3>
                      <div className="grid gap-4">
                        <Card className="bg-blue-50 border-blue-200">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <div className="font-bold text-lg text-blue-900">CEE</div>
                                <div className="text-sm text-blue-700">Certificats d'économie d'énergie</div>
                              </div>
                              <div className="text-3xl font-bold text-blue-600">3,200€</div>
                            </div>
                            <p className="text-sm text-blue-800">
                              Aide versée par les fournisseurs d'énergie pour financer vos travaux de rénovation
                              énergétique.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="bg-purple-50 border-purple-200">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <div className="font-bold text-lg text-purple-900">Éco-PTZ</div>
                                <div className="text-sm text-purple-700">Prêt à taux zéro</div>
                              </div>
                              <div className="text-3xl font-bold text-purple-600">30,000€</div>
                            </div>
                            <p className="text-sm text-purple-800">
                              Prêt sans intérêts pour financer vos travaux de rénovation énergétique, remboursable sur
                              15 ans.
                            </p>
                          </CardContent>
                        </Card>

                        <Card className="bg-teal-50 border-teal-200">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <div className="font-bold text-lg text-teal-900">TVA réduite</div>
                                <div className="text-sm text-teal-700">Taux de TVA à 5.5%</div>
                              </div>
                              <div className="text-3xl font-bold text-teal-600">963€</div>
                            </div>
                            <p className="text-sm text-teal-800">
                              Bénéficiez d'un taux de TVA réduit à 5,5% au lieu de 20% sur vos travaux de rénovation.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl p-6">
                      <div className="text-center">
                        <div className="text-sm opacity-90 mb-2">Total des aides disponibles</div>
                        <div className="text-5xl font-bold mb-2">4,163€</div>
                        <div className="text-sm opacity-90">Soit jusqu'à 23% du coût total du projet</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 6: Nos solutions - NEW */}
              {currentStep === 6 && (
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl">
                    <CardTitle className="text-2xl">Nos solutions recommandées</CardTitle>
                    <CardDescription className="text-indigo-100">
                      Sélectionnez la solution adaptée à vos besoins
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-6">
                    <div className="grid gap-6">
                      <Card className="border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-lg transition-all cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Zap className="w-8 h-8 text-orange-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">Pompe à chaleur Air/Eau</h3>
                              <p className="text-gray-600 mb-4">
                                Solution complète pour le chauffage et l'eau chaude sanitaire. Économies jusqu'à 70% sur
                                votre facture de chauffage.
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                  <div className="text-sm text-gray-500">À partir de</div>
                                  <div className="text-2xl font-bold text-indigo-600">12,000€</div>
                                </div>
                                <Button className="bg-indigo-600 hover:bg-indigo-700">Choisir</Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-yellow-200 hover:border-yellow-500 hover:shadow-lg transition-all cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Sun className="w-8 h-8 text-yellow-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">Installation solaire photovoltaïque</h3>
                              <p className="text-gray-600 mb-4">
                                Produisez votre propre électricité et réduisez votre facture jusqu'à 60%.
                                Autoconsommation optimisée.
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                  <div className="text-sm text-gray-500">À partir de</div>
                                  <div className="text-2xl font-bold text-yellow-600">8,500€</div>
                                </div>
                                <Button className="bg-yellow-600 hover:bg-yellow-700">Choisir</Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-2 border-green-200 hover:border-green-500 hover:shadow-lg transition-all cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <Home className="w-8 h-8 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2">Isolation thermique complète</h3>
                              <p className="text-gray-600 mb-4">
                                Isolation des combles, murs et planchers. Réduisez vos déperditions thermiques jusqu'à
                                30%.
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                  <div className="text-sm text-gray-500">À partir de</div>
                                  <div className="text-2xl font-bold text-green-600">5,500€</div>
                                </div>
                                <Button className="bg-green-600 hover:bg-green-700">Choisir</Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-900">Pack recommandé</h3>
                      <p className="text-sm text-indigo-700 mb-4">
                        Pour une efficacité maximale, nous recommandons de combiner plusieurs solutions. Économisez
                        jusqu'à 2,500€ avec notre pack complet.
                      </p>
                      <Button
                        variant="outline"
                        className="w-full border-indigo-300 text-indigo-700 hover:bg-indigo-100 bg-transparent"
                      >
                        Voir le pack complet
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 7: Simulation de votre projet */}
              {currentStep === 7 && (
                <div className="space-y-6">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-[#E87B4E] mb-2">Simulation de votre projet</h2>
                    <p className="text-gray-600">
                      Grâce aux solutions d'économies d'énergie et de production d'électricité que vous avez choisies,
                      Oréa a pu réaliser une simulation chiffrée de votre projet. En voici le détail.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {/* Project Cost Card */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl">Cout du projet</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Cout de l'installation</span>
                            <span className="text-xl font-bold text-[#E87B4E]">28 138€</span>
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-blue-600">Aides</h4>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Prime à l'investissement solaire</span>
                              <span className="font-semibold text-[#E87B4E]">900€</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Total des aides</span>
                              <span className="font-semibold text-[#E87B4E]">900€</span>
                            </div>
                          </div>

                          <Separator />

                          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border border-[#E87B4E]">
                            <span className="font-semibold text-[#E87B4E]">Cout net de l'installation</span>
                            <span className="text-2xl font-bold text-[#E87B4E]">27 238€</span>
                          </div>

                          <p className="text-sm text-gray-600 text-center">
                            Ce projet offre un rendement moyen de 4%/an
                          </p>

                          <Button variant="link" className="text-blue-600 p-0 h-auto">
                            Ajouter une prime
                          </Button>
                        </CardContent>
                      </Card>

                      {/* CO2 Reduction Card */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl">Réduction des émissions de CO2</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-center">
                            <div className="relative">
                              <Cloud className="w-32 h-32 text-green-500" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-3xl font-bold text-green-700">19 t</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600">
                            Saviez-vous que votre maison émet des CO2? Quand vous chauffez votre maison, cuisinez ou en
                            faisant un geste aussi banal qu'allumer la lumière, Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Etiam elit lacus, cursus eu nulla sed, congue vestibulum elit. Vivamus quam
                            massa, cursus nec magna id, varius tincidunt elit.
                          </p>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-sm">Equivalents d'émissions de CO2</h4>

                            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                              <div className="w-10 h-10 bg-[#E87B4E] rounded-lg flex items-center justify-center">
                                <Car className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="text-2xl font-bold">9</div>
                                <div className="text-xs text-gray-600">années en voiture (10 000km/an)</div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                              <div className="w-10 h-10 bg-[#E87B4E] rounded-lg flex items-center justify-center">
                                <Flame className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="text-2xl font-bold">4</div>
                                <div className="text-xs text-gray-600">années de consommation de chauffage</div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Middle Column */}
                    <div className="space-y-6">
                      {/* Energy Savings 10 years */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-center">
                            Detailes de vos économies d'énergie avec 75% d'autoconsommation
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-center">
                            <div className="relative w-48 h-48">
                              <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="12" />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="none"
                                  stroke="#E87B4E"
                                  strokeWidth="12"
                                  strokeDasharray="251.2"
                                  strokeDashoffset="0"
                                  transform="rotate(-90 50 50)"
                                />
                                <text
                                  x="50"
                                  y="50"
                                  textAnchor="middle"
                                  dy="0.3em"
                                  className="text-2xl font-bold"
                                  fill="#1f2937"
                                >
                                  100%
                                </text>
                              </svg>
                            </div>
                          </div>

                          <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#E87B4E]" />
                            <span className="text-sm">Autoconsommation</span>
                          </div>

                          <p className="text-center text-sm">
                            Economies globales estimées sur 10 ans:{" "}
                            <span className="font-bold text-[#E87B4E]">29 385€</span>
                          </p>
                        </CardContent>
                      </Card>

                      {/* Energy Savings 15 years */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-center">
                            Detailes de vos économies d'énergie avec 75% d'autoconsommation
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex justify-center">
                            <div className="relative w-48 h-48">
                              <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="12" />
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="40"
                                  fill="none"
                                  stroke="#E87B4E"
                                  strokeWidth="12"
                                  strokeDasharray="251.2"
                                  strokeDashoffset="0"
                                  transform="rotate(-90 50 50)"
                                />
                                <text
                                  x="50"
                                  y="50"
                                  textAnchor="middle"
                                  dy="0.3em"
                                  className="text-2xl font-bold"
                                  fill="#1f2937"
                                >
                                  100%
                                </text>
                              </svg>
                            </div>
                          </div>

                          <div className="flex items-center justify-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#E87B4E]" />
                            <span className="text-sm">Autoconsommation</span>
                          </div>

                          <p className="text-center text-sm">
                            Economies globales estimées sur 15 ans:{" "}
                            <span className="font-bold text-[#E87B4E]">29 385€</span>
                          </p>
                        </CardContent>
                      </Card>

                      {/* Electricity Price Evolution */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg text-center">
                            Evolution du prix de l'électricité sur les 25 prochaines années
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-sm mb-2">Prix moyen du</div>
                              <div className="font-semibold mb-2">kWh Réseau</div>
                              <div className="flex justify-center mb-3">
                                <div className="relative">
                                  <Lightbulb className="w-16 h-16 text-gray-400" />
                                </div>
                              </div>
                              <div className="text-2xl font-bold">0.41</div>
                              <div className="text-sm text-gray-600">€/kwh</div>
                            </div>

                            <div className="text-center">
                              <div className="text-sm mb-2 text-[#E87B4E]">Prix moyen du</div>
                              <div className="font-semibold mb-2 text-[#E87B4E]">kWh Solaire</div>
                              <div className="flex justify-center mb-3">
                                <div className="relative">
                                  <Lightbulb className="w-16 h-16 text-[#E87B4E]" />
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-[#E87B4E]">0.14</div>
                              <div className="text-sm text-[#E87B4E]">€/kwh</div>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600">
                            L'énergie solaire vous permet de ne plus être dépendant des fluctuations des tarifs
                            d'électricité. Grâce à l'électricité photovoltaïque, votre kWh reste fixe pendant toute la
                            durée de vie de votre installation. Fini les augmentations de tarifs de l'électricité !
                          </p>

                          <div className="p-3 bg-orange-50 rounded-lg border border-[#E87B4E]">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-[#E87B4E]">Prix actuel de l'électricité</span>
                              <span className="font-bold text-[#E87B4E]">0.200€/kWh</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Energy Consumption Card */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-xl">Consommation énergétique</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-col items-center">
                            <div className="w-24 h-24 text-green-500 mb-4">
                              <svg viewBox="0 0 100 100" className="w-full h-full">
                                <path
                                  d="M50 10 L50 50 L70 50 L50 90 L50 50 L30 50 Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                />
                                <rect x="35" y="20" width="30" height="15" rx="3" fill="white" />
                                <rect x="35" y="65" width="30" height="15" rx="3" fill="white" />
                              </svg>
                            </div>
                            <div className="text-4xl font-bold text-green-600">149</div>
                            <div className="text-sm text-gray-600">kWh/m²/m².an</div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm font-semibold text-center mb-3">Logement économe</div>

                            {[
                              { label: "< 50", letter: "A", color: "bg-green-600" },
                              { label: "51 à 90", letter: "B", color: "bg-green-500" },
                              { label: "91 à 150", letter: "C", color: "bg-green-400" },
                              { label: "151 à 230", letter: "D", color: "bg-yellow-400" },
                              { label: "231 à 330", letter: "E", color: "bg-orange-400" },
                              { label: "331 à 450", letter: "F", color: "bg-orange-600" },
                              { label: "> 450", letter: "G", color: "bg-red-600" },
                            ].map((item, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className={`${item.color} text-white px-3 py-1 rounded text-sm font-semibold`}>
                                  {item.label}
                                </div>
                                <div className="text-sm text-gray-600">{item.letter}</div>
                              </div>
                            ))}

                            <div className="text-sm font-semibold text-center mt-3">Logement énergivore</div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* GES Emissions Card */}
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Consommation de gaz à effet de serre (GES)</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex flex-col items-center">
                            <Cloud className="w-24 h-24 text-purple-500 mb-4" />
                            <div className="text-4xl font-bold text-purple-600">33</div>
                            <div className="text-sm text-gray-600">kgCO2/m².an</div>
                          </div>

                          <div className="space-y-2">
                            <div className="text-sm font-semibold text-center mb-3">Faible émission de GES</div>

                            {[
                              { label: "< 5", letter: "A", color: "bg-purple-600" },
                              { label: "6 à 10", letter: "B", color: "bg-purple-500" },
                              { label: "11 à 20", letter: "C", color: "bg-purple-400" },
                              { label: "21 à 35", letter: "D", color: "bg-indigo-400" },
                              { label: "36 à 55", letter: "E", color: "bg-indigo-500" },
                              { label: "56 à 80", letter: "F", color: "bg-indigo-600" },
                              { label: "> 80", letter: "G", color: "bg-indigo-800" },
                            ].map((item, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className={`${item.color} text-white px-3 py-1 rounded text-sm font-semibold`}>
                                  {item.label}
                                </div>
                                <div className="text-sm text-gray-600">{item.letter}</div>
                              </div>
                            ))}

                            <div className="text-sm font-semibold text-center mt-3">Forte émission de GES</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 8: Bon de commande signé (formerly Step 9) */}
              {currentStep === 8 && (
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-t-xl">
                    <CardTitle className="text-2xl">Bon de commande</CardTitle>
                    <CardDescription className="text-slate-200">
                      Vérifiez les informations et signez votre bon de commande
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    {/* Document Header */}
                    <div className="border-b-2 border-slate-200 pb-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-3xl font-bold text-slate-900 mb-2">Bon de commande N° 2025-001</h2>
                          <p className="text-slate-600">Date: {new Date().toLocaleDateString("fr-FR")}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-slate-900">Votre Entreprise</p>
                          <p className="text-sm text-slate-600">123 Rue de l'Énergie</p>
                          <p className="text-sm text-slate-600">75001 Paris</p>
                          <p className="text-sm text-slate-600">contact@entreprise.fr</p>
                        </div>
                      </div>
                    </div>

                    {/* Customer Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-slate-50 border-slate-200">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <User className="w-5 h-5 text-slate-600" />
                            Informations client
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid gap-4">
                            <div>
                              <Label htmlFor="customerFirstName">Prénom</Label>
                              <Input
                                id="customerFirstName"
                                value={formData.firstName}
                                onChange={(e) => updateFormData("firstName", e.target.value)}
                                placeholder="Prénom"
                                className="bg-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="customerLastName">Nom</Label>
                              <Input
                                id="customerLastName"
                                value={formData.lastName}
                                onChange={(e) => updateFormData("lastName", e.target.value)}
                                placeholder="Nom"
                                className="bg-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="customerEmail">Email</Label>
                              <Input
                                id="customerEmail"
                                type="email"
                                value={formData.email}
                                onChange={(e) => updateFormData("email", e.target.value)}
                                placeholder="email@exemple.fr"
                                className="bg-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="customerPhone">Téléphone</Label>
                              <Input
                                id="customerPhone"
                                value={formData.phone}
                                onChange={(e) => updateFormData("phone", e.target.value)}
                                placeholder="+33 6 12 34 56 78"
                                className="bg-white"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-slate-50 border-slate-200">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-slate-600" />
                            Adresse d'installation
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid gap-4">
                            <div>
                              <Label htmlFor="installAddress">Adresse</Label>
                              <Input
                                id="installAddress"
                                value={formData.address}
                                onChange={(e) => updateFormData("address", e.target.value)}
                                placeholder="Adresse complète"
                                className="bg-white"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="installPostalCode">Code postal</Label>
                                <Input
                                  id="installPostalCode"
                                  value={formData.postalCode}
                                  onChange={(e) => updateFormData("postalCode", e.target.value)}
                                  placeholder="75001"
                                  className="bg-white"
                                />
                              </div>
                              <div>
                                <Label htmlFor="installCity">Ville</Label>
                                <Input
                                  id="installCity"
                                  value={formData.city}
                                  onChange={(e) => updateFormData("city", e.target.value)}
                                  placeholder="Paris"
                                  className="bg-white"
                                />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Project Summary */}
                    <Card className="border-2 border-slate-200">
                      <CardHeader className="bg-slate-100">
                        <CardTitle className="text-xl flex items-center gap-2">
                          <FileText className="w-6 h-6 text-slate-700" />
                          Récapitulatif du projet
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-6">
                        {/* Housing Details */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-slate-900">Caractéristiques du logement</h3>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Home className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Type:</span>
                              <span className="font-medium">{formData.housingType || "Non renseigné"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Année:</span>
                              <span className="font-medium">{formData.constructionYear || "Non renseigné"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Square className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Surface:</span>
                              <span className="font-medium">{formData.surface || "Non renseigné"} m²</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Layers className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Étages:</span>
                              <span className="font-medium">{formData.floorCount}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Pièces:</span>
                              <span className="font-medium">{formData.roomCount}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Thermometer className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Chauffage:</span>
                              <span className="font-medium">{formData.heatingEnergySource || "Non renseigné"}</span>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Solar Installation */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-slate-900">Installation solaire</h3>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Sun className="w-4 h-4 text-orange-500" />
                              <span className="text-slate-600">Potentiel:</span>
                              <span className="font-medium">1260 kWh/m²/an</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Compass className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Orientation:</span>
                              <span className="font-medium">{formData.panelOrientation || "Sud"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Square className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Surface équipable:</span>
                              <span className="font-medium">{formData.equipableSurface || "25-35"} m²</span>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Energy Consumption */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-slate-900">Consommation énergétique</h3>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Flame className="w-4 h-4 text-orange-500" />
                              <span className="text-slate-600">Chauffage:</span>
                              <span className="font-medium">968€/an</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Droplets className="w-4 h-4 text-blue-500" />
                              <span className="text-slate-600">Eau chaude:</span>
                              <span className="font-medium">220€/an</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-red-500" />
                              <span className="text-slate-600">Appareils électriques:</span>
                              <span className="font-medium">1440€/an</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Lightbulb className="w-4 h-4 text-green-500" />
                              <span className="text-slate-600">Éclairage:</span>
                              <span className="font-medium">400€/an</span>
                            </div>
                          </div>
                          <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-slate-900">Consommation totale:</span>
                              <span className="text-xl font-bold text-slate-900">2988€/an</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Cost Breakdown */}
                    <Card className="border-2 border-orange-200 bg-orange-50">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Euro className="w-6 h-6 text-orange-600" />
                          Détail financier
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-lg">
                            <span className="text-slate-700">Coût de l'installation</span>
                            <span className="font-semibold">28 138€</span>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <p className="font-semibold text-slate-900">Aides financières</p>
                            <div className="flex items-center justify-between text-sm pl-4">
                              <span className="text-slate-600">Prime à l'investissement solaire</span>
                              <span className="text-green-600 font-medium">-900€</span>
                            </div>
                          </div>
                          <Separator />
                          <div className="flex items-center justify-between text-xl font-bold bg-white p-4 rounded-lg">
                            <span className="text-slate-900">Coût net de l'installation</span>
                            <span className="text-orange-600">27 238€</span>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-orange-200">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span>
                              Rendement moyen: <strong className="text-slate-900">4%/an</strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600 mt-2">
                            <Leaf className="w-4 h-4 text-green-600" />
                            <span>
                              Réduction CO2: <strong className="text-slate-900">19 tonnes</strong>
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Terms and Conditions */}
                    <Card className="bg-slate-50 border-slate-200">
                      <CardHeader>
                        <CardTitle className="text-lg">Conditions générales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-slate-600 space-y-2">
                          <p>• Le présent bon de commande est valable 30 jours à compter de sa date d'émission.</p>
                          <p>• Les travaux débuteront dans un délai de 4 à 6 semaines après signature.</p>
                          <p>• Un acompte de 30% sera demandé à la signature du bon de commande.</p>
                          <p>• Le solde sera réglé à la fin des travaux après réception conforme.</p>
                          <p>• Garantie décennale et assurance responsabilité civile incluses.</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Signature Section */}
                    <Card className="border-2 border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <FileSignature className="w-6 h-6 text-indigo-600" />
                          Signature électronique
                        </CardTitle>
                        <CardDescription>
                          Signez votre bon de commande de manière sécurisée avec YouSign
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Email Signature Button */}
                          <Card className="border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition-all cursor-pointer group">
                            <CardContent className="p-6">
                              <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-indigo-200 transition-colors">
                                  <Mail className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-lg mb-2">Signature par e-mail</h3>
                                  <p className="text-sm text-slate-600 mb-4">
                                    Recevez le document par e-mail et signez en ligne via YouSign
                                  </p>
                                </div>
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                                  <Mail className="w-4 h-4 mr-2" />
                                  Envoyer par e-mail
                                </Button>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Electronic Signature Number Button */}
                          <Card className="border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all cursor-pointer group">
                            <CardContent className="p-6">
                              <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-200 transition-colors">
                                  <Hash className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-lg mb-2">Numéro de signature</h3>
                                  <p className="text-sm text-slate-600 mb-4">
                                    Utilisez un numéro de signature électronique pour signer immédiatement
                                  </p>
                                </div>
                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                  <Hash className="w-4 h-4 mr-2" />
                                  Signer avec un numéro
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-slate-600">
                              <p className="font-semibold text-slate-900 mb-1">Signature sécurisée</p>
                              <p>
                                Votre signature électronique via YouSign a la même valeur juridique qu'une signature
                                manuscrite. Vos données sont protégées et cryptées.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    {/* </CHANGE> */}
                  </CardContent>
                </Card>
              )}

              {/* Step 9: Solution de paiement */}
              {currentStep === 9 && (
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-t-xl">
                    <CardTitle className="text-2xl">Bon de commande</CardTitle>
                    <CardDescription className="text-slate-200">
                      Vérifiez les informations et signez votre bon de commande
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    {/* Document Header */}
                    <div className="border-b-2 border-slate-200 pb-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h2 className="text-3xl font-bold text-slate-900 mb-2">Bon de commande N° 2025-001</h2>
                          <p className="text-slate-600">Date: {new Date().toLocaleDateString("fr-FR")}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-slate-900">Votre Entreprise</p>
                          <p className="text-sm text-slate-600">123 Rue de l'Énergie</p>
                          <p className="text-sm text-slate-600">75001 Paris</p>
                          <p className="text-sm text-slate-600">contact@entreprise.fr</p>
                        </div>
                      </div>
                    </div>

                    {/* Customer Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-slate-50 border-slate-200">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <User className="w-5 h-5 text-slate-600" />
                            Informations client
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid gap-4">
                            <div>
                              <Label htmlFor="customerFirstName">Prénom</Label>
                              <Input
                                id="customerFirstName"
                                value={formData.firstName}
                                onChange={(e) => updateFormData("firstName", e.target.value)}
                                placeholder="Prénom"
                                className="bg-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="customerLastName">Nom</Label>
                              <Input
                                id="customerLastName"
                                value={formData.lastName}
                                onChange={(e) => updateFormData("lastName", e.target.value)}
                                placeholder="Nom"
                                className="bg-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="customerEmail">Email</Label>
                              <Input
                                id="customerEmail"
                                type="email"
                                value={formData.email}
                                onChange={(e) => updateFormData("email", e.target.value)}
                                placeholder="email@exemple.fr"
                                className="bg-white"
                              />
                            </div>
                            <div>
                              <Label htmlFor="customerPhone">Téléphone</Label>
                              <Input
                                id="customerPhone"
                                value={formData.phone}
                                onChange={(e) => updateFormData("phone", e.target.value)}
                                placeholder="+33 6 12 34 56 78"
                                className="bg-white"
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-slate-50 border-slate-200">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-slate-600" />
                            Adresse d'installation
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid gap-4">
                            <div>
                              <Label htmlFor="installAddress">Adresse</Label>
                              <Input
                                id="installAddress"
                                value={formData.address}
                                onChange={(e) => updateFormData("address", e.target.value)}
                                placeholder="Adresse complète"
                                className="bg-white"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="installPostalCode">Code postal</Label>
                                <Input
                                  id="installPostalCode"
                                  value={formData.postalCode}
                                  onChange={(e) => updateFormData("postalCode", e.target.value)}
                                  placeholder="75001"
                                  className="bg-white"
                                />
                              </div>
                              <div>
                                <Label htmlFor="installCity">Ville</Label>
                                <Input
                                  id="installCity"
                                  value={formData.city}
                                  onChange={(e) => updateFormData("city", e.target.value)}
                                  placeholder="Paris"
                                  className="bg-white"
                                />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Project Summary */}
                    <Card className="border-2 border-slate-200">
                      <CardHeader className="bg-slate-100">
                        <CardTitle className="text-xl flex items-center gap-2">
                          <FileText className="w-6 h-6 text-slate-700" />
                          Récapitulatif du projet
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-6">
                        {/* Housing Details */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-slate-900">Caractéristiques du logement</h3>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Home className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Type:</span>
                              <span className="font-medium">{formData.housingType || "Non renseigné"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Année:</span>
                              <span className="font-medium">{formData.constructionYear || "Non renseigné"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Square className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Surface:</span>
                              <span className="font-medium">{formData.surface || "Non renseigné"} m²</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Layers className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Étages:</span>
                              <span className="font-medium">{formData.floorCount}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Pièces:</span>
                              <span className="font-medium">{formData.roomCount}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Thermometer className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Chauffage:</span>
                              <span className="font-medium">{formData.heatingEnergySource || "Non renseigné"}</span>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Solar Installation */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-slate-900">Installation solaire</h3>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Sun className="w-4 h-4 text-orange-500" />
                              <span className="text-slate-600">Potentiel:</span>
                              <span className="font-medium">1260 kWh/m²/an</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Compass className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Orientation:</span>
                              <span className="font-medium">{formData.panelOrientation || "Sud"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Square className="w-4 h-4 text-slate-500" />
                              <span className="text-slate-600">Surface équipable:</span>
                              <span className="font-medium">{formData.equipableSurface || "25-35"} m²</span>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        {/* Energy Consumption */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-slate-900">Consommation énergétique</h3>
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Flame className="w-4 h-4 text-orange-500" />
                              <span className="text-slate-600">Chauffage:</span>
                              <span className="font-medium">968€/an</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Droplets className="w-4 h-4 text-blue-500" />
                              <span className="text-slate-600">Eau chaude:</span>
                              <span className="font-medium">220€/an</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-red-500" />
                              <span className="text-slate-600">Appareils électriques:</span>
                              <span className="font-medium">1440€/an</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Lightbulb className="w-4 h-4 text-green-500" />
                              <span className="text-slate-600">Éclairage:</span>
                              <span className="font-medium">400€/an</span>
                            </div>
                          </div>
                          <div className="mt-4 p-4 bg-slate-100 rounded-lg">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-slate-900">Consommation totale:</span>
                              <span className="text-xl font-bold text-slate-900">2988€/an</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Cost Breakdown */}
                    <Card className="border-2 border-orange-200 bg-orange-50">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Euro className="w-6 h-6 text-orange-600" />
                          Détail financier
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-lg">
                            <span className="text-slate-700">Coût de l'installation</span>
                            <span className="font-semibold">28 138€</span>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <p className="font-semibold text-slate-900">Aides financières</p>
                            <div className="flex items-center justify-between text-sm pl-4">
                              <span className="text-slate-600">Prime à l'investissement solaire</span>
                              <span className="text-green-600 font-medium">-900€</span>
                            </div>
                          </div>
                          <Separator />
                          <div className="flex items-center justify-between text-xl font-bold bg-white p-4 rounded-lg">
                            <span className="text-slate-900">Coût net de l'installation</span>
                            <span className="text-orange-600">27 238€</span>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-orange-200">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span>
                              Rendement moyen: <strong className="text-slate-900">4%/an</strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-600 mt-2">
                            <Leaf className="w-4 h-4 text-green-600" />
                            <span>
                              Réduction CO2: <strong className="text-slate-900">19 tonnes</strong>
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Terms and Conditions */}
                    <Card className="bg-slate-50 border-slate-200">
                      <CardHeader>
                        <CardTitle className="text-lg">Conditions générales</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-sm text-slate-600 space-y-2">
                          <p>• Le présent bon de commande est valable 30 jours à compter de sa date d'émission.</p>
                          <p>• Les travaux débuteront dans un délai de 4 à 6 semaines après signature.</p>
                          <p>• Un acompte de 30% sera demandé à la signature du bon de commande.</p>
                          <p>• Le solde sera réglé à la fin des travaux après réception conforme.</p>
                          <p>• Garantie décennale et assurance responsabilité civile incluses.</p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Signature Section */}
                    <Card className="border-2 border-indigo-300 bg-gradient-to-br from-indigo-50 to-purple-50">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <FileSignature className="w-6 h-6 text-indigo-600" />
                          Signature électronique
                        </CardTitle>
                        <CardDescription>
                          Signez votre bon de commande de manière sécurisée avec YouSign
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Email Signature Button */}
                          <Card className="border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition-all cursor-pointer group">
                            <CardContent className="p-6">
                              <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-indigo-200 transition-colors">
                                  <Mail className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-lg mb-2">Signature par e-mail</h3>
                                  <p className="text-sm text-slate-600 mb-4">
                                    Recevez le document par e-mail et signez en ligne via YouSign
                                  </p>
                                </div>
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                                  <Mail className="w-4 h-4 mr-2" />
                                  Envoyer par e-mail
                                </Button>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Electronic Signature Number Button */}
                          <Card className="border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all cursor-pointer group">
                            <CardContent className="p-6">
                              <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-200 transition-colors">
                                  <Hash className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-lg mb-2">Numéro de signature</h3>
                                  <p className="text-sm text-slate-600 mb-4">
                                    Utilisez un numéro de signature électronique pour signer immédiatement
                                  </p>
                                </div>
                                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                  <Hash className="w-4 h-4 mr-2" />
                                  Signer avec un numéro
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-slate-600">
                              <p className="font-semibold text-slate-900 mb-1">Signature sécurisée</p>
                              <p>
                                Votre signature électronique via YouSign a la même valeur juridique qu'une signature
                                manuscrite. Vos données sont protégées et cryptées.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    {/* </CHANGE> */}
                  </CardContent>
                </Card>
              )}

              {/* Step 10: Final confirmation */}
              {currentStep === 10 && (
                <div className="flex items-center justify-center h-full">
                  <Card className="max-w-md w-full shadow-xl text-center">
                    <CardHeader>
                      <CardTitle className="text-3xl text-green-600">Projet Finalisé !</CardTitle>
                      <CardDescription className="text-lg text-gray-600 mt-2">
                        Votre projet d'installation solaire est prêt.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 space-y-4">
                      <CheckCircle2 className="w-20 h-20 mx-auto text-green-500" />
                      <p className="text-gray-700">
                        Merci d'avoir utilisé notre assistant. Vous recevrez bientôt un récapitulatif par e-mail.
                      </p>
                      <p className="text-gray-700">
                        Notre équipe vous contactera prochainement pour planifier les prochaines étapes.
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button onClick={() => setCurrentStep(1)} className="bg-indigo-600 hover:bg-indigo-700">
                        Créer un nouveau projet
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  variant="outline"
                  size="lg"
                  className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 bg-transparent"
                >
                  Précédent
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={currentStep === steps.length}
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  {currentStep === steps.length ? "Terminer" : "Suivant"}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Chauffage Modal */}
      <Dialog open={openConsumptionModal === "heating"} onOpenChange={() => setOpenConsumptionModal(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white -m-6 mb-6 p-6 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Flame className="w-8 h-8" />
                <DialogTitle className="text-2xl">Chauffage</DialogTitle>
              </div>
              <button onClick={() => setOpenConsumptionModal(null)} className="hover:bg-white/20 rounded-full p-1">
                <X className="w-6 h-6" />
              </button>
            </div>
          </DialogHeader>
          <div className="space-y-6 p-6">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Source d'énergie</Label>
              <RadioGroup
                value={formData.heatingEnergySource}
                onValueChange={(value) => updateFormData("heatingEnergySource", value)}
                className="grid grid-cols-5 gap-3"
              >
                {[
                  { value: "electricity", label: "Electricité", icon: Zap },
                  { value: "gas", label: "Gaz naturel", icon: Flame },
                  { value: "gpl", label: "GPL", icon: Flame },
                  { value: "oil", label: "Fioul", icon: Droplets },
                  { value: "wood", label: "Bois", icon: TreePine },
                ].map((source) => (
                  <div key={source.value}>
                    <RadioGroupItem value={source.value} id={`ecs-${source.value}`} className="peer sr-only" />
                    <Label
                      htmlFor={`ecs-${source.value}`}
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-3 hover:bg-gray-50 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-50 cursor-pointer transition-all"
                    >
                      <source.icon className="mb-2 h-5 w-5 text-gray-600" />
                      <span className="text-xs font-semibold text-center">{source.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Type de chauffage</Label>
              <RadioGroup
                value={formData.heatingType}
                onValueChange={(value) => updateFormData("heatingType", value)}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: "condensing", label: "Chaudière Fioul à condensation" },
                  { value: "non-condensing", label: "Chaudière Fioul hors condensation" },
                  { value: "stove", label: "Poele Fioul" },
                ].map((type) => (
                  <div key={type.value}>
                    <RadioGroupItem value={type.value} id={type.value} className="peer sr-only" />
                    <Label
                      htmlFor={type.value}
                      className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-50 cursor-pointer transition-all text-sm font-semibold text-center"
                    >
                      {type.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="heatingBrand">Marque</Label>
              <Select value={formData.heatingBrand} onValueChange={(value) => updateFormData("heatingBrand", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Marque" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="viessmann">Viessmann</SelectItem>
                  <SelectItem value="daikin">Daikin</SelectItem>
                  <SelectItem value="atlantic">Atlantic</SelectItem>
                  <SelectItem value="de-dietrich">De Dietrich</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="heatedSurface">Surface chauffée (m²)</Label>
              <Input
                id="heatedSurface"
                type="number"
                value={formData.heatedSurface}
                onChange={(e) => updateFormData("heatedSurface", e.target.value)}
                placeholder="Surface chauffée (m²)"
              />
            </div>

            <div className="space-y-4">
              <Label>Température de confort (C°)</Label>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => updateFormData("comfortTemperature", Math.max(15, formData.comfortTemperature - 0.5))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-3xl font-bold text-blue-600">{formData.comfortTemperature.toFixed(1)}°</div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => updateFormData("comfortTemperature", Math.min(25, formData.comfortTemperature + 0.5))}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="heatingDaysPerYear">Nombre de jours chauffés par an</Label>
              <Input
                id="heatingDaysPerYear"
                type="number"
                value={formData.heatingDaysPerYear}
                onChange={(e) => updateFormData("heatingDaysPerYear", e.target.value)}
                placeholder="Nombre de jours chauffés par an"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Utilisation du chauffage</Label>
              <RadioGroup
                value={formData.heatingUsage}
                onValueChange={(value) => updateFormData("heatingUsage", value)}
                className="grid grid-cols-5 gap-3"
              >
                {["Sobre", "Modérée", "Normale", "Elevée", "Très élevée"].map((usage) => (
                  <div key={usage}>
                    <RadioGroupItem value={usage.toLowerCase()} id={`usage-${usage}`} className="peer sr-only" />
                    <Label
                      htmlFor={`usage-${usage}`}
                      className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-3 hover:bg-gray-50 peer-data-[state=checked]:border-orange-500 peer-data-[state=checked]:bg-orange-50 cursor-pointer transition-all text-xs font-semibold text-center"
                    >
                      {usage}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Période(s) d'utilisation (choix multiple)</Label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "morning-evening", label: "Matin et soir" },
                  { value: "day", label: "Journée" },
                  { value: "night", label: "Nuit" },
                ].map((period) => {
                  const isSelected = formData.heatingPeriods.includes(period.value)
                  return (
                    <div key={period.value}>
                      <input
                        type="checkbox"
                        id={period.value}
                        className="peer sr-only"
                        checked={isSelected}
                        onChange={(e) => {
                          const current = formData.heatingPeriods
                          if (e.target.checked) {
                            updateFormData("heatingPeriods", [...current, period.value])
                          } else {
                            updateFormData(
                              "heatingPeriods",
                              current.filter((p) => p !== period.value),
                            )
                          }
                        }}
                      />
                      <Label
                        htmlFor={period.value}
                        className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-checked:border-orange-500 peer-checked:bg-orange-50 cursor-pointer transition-all text-sm font-semibold text-center"
                      >
                        {period.label}
                      </Label>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="heatingCostEstimate">Estimation de la facture de chauffage (€/an)</Label>
              <Input
                id="heatingCostEstimate"
                type="number"
                value={formData.heatingCostEstimate}
                onChange={(e) => updateFormData("heatingCostEstimate", e.target.value)}
                placeholder="Estimation de la facture de chauffage (€/an)"
              />
            </div>

            <Button onClick={() => setOpenConsumptionModal(null)} className="w-full bg-orange-500 hover:bg-orange-600">
              Sauvegarder
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* ECS Modal */}
      <Dialog open={openConsumptionModal === "ecs"} onOpenChange={() => setOpenConsumptionModal(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white -m-6 mb-6 p-6 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Droplets className="w-8 h-8" />
                <DialogTitle className="text-2xl">Eau chaude sanitaire (ECS)</DialogTitle>
              </div>
              <button onClick={() => setOpenConsumptionModal(null)} className="hover:bg-white/20 rounded-full p-1">
                <X className="w-6 h-6" />
              </button>
            </div>
          </DialogHeader>
          <div className="space-y-6 p-6">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Source d'énergie</Label>
              <RadioGroup
                value={formData.ecsEnergySource}
                onValueChange={(value) => updateFormData("ecsEnergySource", value)}
                className="grid grid-cols-5 gap-3"
              >
                {[
                  { value: "electricity", label: "Electricité", icon: Zap },
                  { value: "gas", label: "Gaz naturel", icon: Flame },
                  { value: "gpl", label: "GPL", icon: Flame },
                  { value: "oil", label: "Fioul", icon: Droplets },
                  { value: "wood", label: "Bois", icon: TreePine },
                ].map((source) => (
                  <div key={source.value}>
                    <RadioGroupItem value={source.value} id={`ecs-${source.value}`} className="peer sr-only" />
                    <Label
                      htmlFor={`ecs-${source.value}`}
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-3 hover:bg-gray-50 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 cursor-pointer transition-all"
                    >
                      <source.icon className="mb-2 h-5 w-5 text-gray-600" />
                      <span className="text-xs font-semibold text-center">{source.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ecsInstallationYear">Année d'installation</Label>
              <Select
                value={formData.ecsInstallationYear}
                onValueChange={(value) => updateFormData("ecsInstallationYear", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Année d'installation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="before-2000">Avant 2000</SelectItem>
                  <SelectItem value="2000-2010">2000-2010</SelectItem>
                  <SelectItem value="2010-2020">2010-2020</SelectItem>
                  <SelectItem value="after-2020">Après 2020</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Capacité de stockage</Label>
              <RadioGroup
                value={formData.ecsStorageCapacity}
                onValueChange={(value) => updateFormData("ecsStorageCapacity", value)}
                className="grid grid-cols-5 gap-3"
              >
                {[
                  { value: "none", label: "Pas de stockage" },
                  { value: "150", label: "150 litres" },
                  { value: "200", label: "200 litres" },
                  { value: "250", label: "250 litres" },
                  { value: "300+", label: "300 litres et plus" },
                ].map((capacity) => (
                  <div key={capacity.value}>
                    <RadioGroupItem value={capacity.value} id={`capacity-${capacity.value}`} className="peer sr-only" />
                    <Label
                      htmlFor={`capacity-${capacity.value}`}
                      className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-3 hover:bg-gray-50 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 cursor-pointer transition-all text-xs font-semibold text-center"
                    >
                      {capacity.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Utilisation de l'eau chaude sanitaire</Label>
              <RadioGroup
                value={formData.ecsUsage}
                onValueChange={(value) => updateFormData("ecsUsage", value)}
                className="grid grid-cols-5 gap-3"
              >
                {["Sobre", "Modérée", "Normale", "Elevée", "Très élevée"].map((usage) => (
                  <div key={usage}>
                    <RadioGroupItem value={usage.toLowerCase()} id={`ecs-usage-${usage}`} className="peer sr-only" />
                    <Label
                      htmlFor={`ecs-usage-${usage}`}
                      className="flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-3 hover:bg-gray-50 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 cursor-pointer transition-all text-xs font-semibold text-center"
                    >
                      {usage}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ecsCostEstimate">Estimation de la facture d'eau chaude sanitaire (€/an)</Label>
              <Input
                id="ecsCostEstimate"
                type="number"
                value={formData.ecsCostEstimate}
                onChange={(e) => updateFormData("ecsCostEstimate", e.target.value)}
                placeholder="Estimation de la facture d'eau chaude sanitaire (€/an)"
              />
            </div>

            <Button onClick={() => setOpenConsumptionModal(null)} className="w-full bg-blue-500 hover:bg-blue-600">
              Sauvegarder
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Appareils électriques Modal */}
      <Dialog open={openConsumptionModal === "appliances"} onOpenChange={() => setOpenConsumptionModal(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white -m-6 mb-6 p-6 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8" />
                <DialogTitle className="text-2xl">Appareils électriques</DialogTitle>
              </div>
              <button onClick={() => setOpenConsumptionModal(null)} className="hover:bg-white/20 rounded-full p-1">
                <X className="w-6 h-6" />
              </button>
            </div>
          </DialogHeader>
          <div className="space-y-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="appliancesCostEstimate">Estimation de la consommation (€/an)</Label>
              <Input
                id="appliancesCostEstimate"
                type="number"
                value={formData.appliancesCostEstimate}
                onChange={(e) => updateFormData("appliancesCostEstimate", e.target.value)}
                placeholder="Estimation de la consommation (€/an)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="appliancesElectricityPrice">Prix de l'électricité ((€/kWh)</Label>
              <Input
                id="appliancesElectricityPrice"
                type="number"
                step="0.01"
                value={formData.appliancesElectricityPrice}
                onChange={(e) => updateFormData("appliancesElectricityPrice", e.target.value)}
                placeholder="Prix de l'électricité ((€/kWh)"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">
                Evolution du prix de l'électricité sur les 25 prochaines années (%)
              </Label>
              <div className="space-y-4">
                <Slider
                  value={[formData.appliancesPriceEvolution]}
                  onValueChange={(value) => updateFormData("appliancesPriceEvolution", value[0])}
                  max={7}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>0%</span>
                  <span className="text-2xl font-bold text-red-600">
                    {formData.appliancesPriceEvolution.toFixed(1)}%
                  </span>
                  <span>7%</span>
                </div>
              </div>
            </div>

            <Button onClick={() => setOpenConsumptionModal(null)} className="w-full bg-red-500 hover:bg-red-600">
              Sauvegarder
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Eclairage Modal */}
      <Dialog open={openConsumptionModal === "lighting"} onOpenChange={() => setOpenConsumptionModal(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white -m-6 mb-6 p-6 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lightbulb className="w-8 h-8" />
                <DialogTitle className="text-2xl">Eclairage</DialogTitle>
              </div>
              <button onClick={() => setOpenConsumptionModal(null)} className="hover:bg-white/20 rounded-full p-1">
                <X className="w-6 h-6" />
              </button>
            </div>
          </DialogHeader>
          <div className="space-y-6 p-6">
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Type d'ampoules</Label>
              <RadioGroup
                value={formData.lightingBulbType}
                onValueChange={(value) => updateFormData("lightingBulbType", value)}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: "incandescent", label: "Ampoules incandescentes" },
                  { value: "led", label: "Ampoules LED" },
                  { value: "mixed", label: "Mixte" },
                ].map((type) => (
                  <div key={type.value}>
                    <RadioGroupItem value={type.value} id={`bulb-${type.value}`} className="peer sr-only" />
                    <Label
                      htmlFor={`bulb-${type.value}`}
                      className="flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-green-500 peer-data-[state=checked]:bg-green-50 cursor-pointer transition-all"
                    >
                      <Lightbulb className="mb-2 h-6 w-6 text-gray-600" />
                      <span className="text-sm font-semibold text-center">{type.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lightingCostEstimate">Estimation de la consommation (€/an)</Label>
              <Input
                id="lightingCostEstimate"
                type="number"
                value={formData.lightingCostEstimate}
                onChange={(e) => updateFormData("lightingCostEstimate", e.target.value)}
                placeholder="Estimation de la consommation (€/an)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lightingElectricityPrice">Prix de l'électricité ((€/kWh)</Label>
              <Input
                id="lightingElectricityPrice"
                type="number"
                step="0.01"
                value={formData.lightingElectricityPrice}
                onChange={(e) => updateFormData("lightingElectricityPrice", e.target.value)}
                placeholder="Prix de l'électricité ((€/kWh)"
              />
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">
                Evolution du prix de l'électricité sur les 25 prochaines années (%)
              </Label>
              <div className="space-y-4">
                <Slider
                  value={[formData.lightingPriceEvolution]}
                  onValueChange={(value) => updateFormData("lightingPriceEvolution", value[0])}
                  max={7}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>0%</span>
                  <span className="text-2xl font-bold text-green-600">
                    {formData.lightingPriceEvolution.toFixed(1)}%
                  </span>
                  <span>7%</span>
                </div>
              </div>
            </div>

            <Button onClick={() => setOpenConsumptionModal(null)} className="w-full bg-green-500 hover:bg-green-600">
              Sauvegarder
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* </CHANGE> */}
    </div>
  )
}

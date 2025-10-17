"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import "./styles.css"
import {
    Check,
    Zap,
    TrendingUp,
    Users,
    Package,
    BarChart3,
    Shield,
    ArrowRight,
    Sparkles,
    Calendar,
    FileText,
    Home,
    Sun,
    CreditCard,
    ChevronRight,
    AlertTriangle,
    Clock,
    ExternalLink,
    LayoutGrid,
    Map,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function RoadmapPage() {
    const [mounted, setMounted] = useState(false)
    const [selectedProposition, setSelectedProposition] = useState<1 | 2>(1)
    const [currentStep, setCurrentStep] = useState(0)
    const [zoomedFeature, setZoomedFeature] = useState<string | null>(null)
    const [showAlternative, setShowAlternative] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const proposition1Steps = [
        {
            id: "intro",
            title: "Votre Solution CRM",
            subtitle: "Transition Énergétique",
        },
        {
            id: "phase1",
            title: "Phase 1 : App Parcours de Vente",
            subtitle: "Novembre 2025 - Janvier 2026",
            duration: "3 mois",
            availableDate: "1er Janvier 2026",
            features: [
                { icon: Calendar, title: "Rendez-vous", desc: "Par vendeur & statut" },
                { icon: FileText, title: "Bons de commande", desc: "Stockage sécurisé" },
                { icon: Users, title: "Coordonnées client", desc: "Gestion complète" },
                { icon: Home, title: "Étude logement", desc: "Analyse détaillée" },
                { icon: Sun, title: "Potentiel solaire", desc: "Calcul précis" },
                { icon: Zap, title: "Consommation", desc: "Suivi énergétique" },
                { icon: Check, title: "Éligibilité aides", desc: "Vérification auto" },
                { icon: Package, title: "Solutions", desc: "Catalogue produits" },
                { icon: BarChart3, title: "Simulation", desc: "Devis instantané" },
                { icon: CreditCard, title: "Validation Signature", desc: "Intégration sécurisée" },
            ],
        },
        {
            id: "transition",
            title: "Pendant ce temps...",
            subtitle: "Développement CRM en parallèle",
        },
        {
            id: "phase2",
            title: "Phase 2 : CRM en Abonnement",
            subtitle: "Disponible Mars 2026",
            duration: "3 mois de développement",
            availableDate: "1er Mars 2026",
            modules: [
                { icon: Users, title: "Utilisateurs", desc: "Gestion équipe complète", color: "blue" },
                { icon: Shield, title: "Administration", desc: "Contrôle & permissions", color: "purple" },
                { icon: TrendingUp, title: "Leads", desc: "Pipeline de vente", color: "green" },
                { icon: Package, title: "Produits", desc: "Catalogue avancé", color: "orange" },
                { icon: BarChart3, title: "Business", desc: "Analytics & reporting", color: "pink" },
                { icon: Calendar, title: "Agenda", desc: "Google Agenda intégré", color: "red" },
            ],
            pricing: {
                trial: "2 mois gratuits",
                price: "15€/utilisateur",
            },
        },
        {
            id: "benefits",
            title: "Pourquoi cette approche ?",
            subtitle: "Les avantages concrets",
        },
    ]

    const proposition2Steps = [
        {
            id: "intro",
            title: "Développement Direct",
            subtitle: "CRM Complet dès le départ",
        },
        {
            id: "month1",
            title: "Mois 1 : Utilisateurs / Connexion / Administrer vos utilisateurs",
            subtitle: "Novembre 2025",
            modules: [
                { icon: Users, title: "Module Utilisateurs", desc: "Disponible mais ça ne fait pas avancer le métier", color: "blue" },
                { icon: Shield, title: "Module Administration", desc: "Gestion des accès et permissions", color: "purple" },
            ],
        },
        {
            id: "month2",
            title: "Mois 2 : Module Lead / Module Agenda + Google",
            subtitle: "Décembre 2025",
            modules: [
                { icon: TrendingUp, title: "Module Lead", desc: "Gère les rendez-vous et les leads de vos clients", color: "green" },
                {
                    icon: Calendar,
                    title: "Module Agenda + Google",
                    desc: "Synchronisation de l'agenda avec Google Calendar pour gérer les rendez-vous clients",
                    color: "red"
                },
            ],
        },
        {
            id: "month3",
            title: "Mois 3 : Module Produits / Module Projet",
            subtitle: "Janvier 2026",
            modules: [
                { icon: Package, title: "Module Produits", desc: "Catalogue de produits énergétiques", color: "orange" },
                { icon: FileText, title: "Module Projet", desc: "Convertie un Lead en Projet énergétique", color: "pink" },
            ],
        },
        {
            id: "drawbacks",
            title: "Points d'attention",
            subtitle: "Cette approche implique",
        },
    ]

    const journeySteps = selectedProposition === 1 ? proposition1Steps : proposition2Steps
    const currentStepData = journeySteps[currentStep]

    const nextStep = () => {
        if (currentStep < journeySteps.length - 1) {
            setCurrentStep(currentStep + 1)
            setZoomedFeature(null)
        }
    }

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1)
            setZoomedFeature(null)
        }
    }

    const switchProposition = (prop: 1 | 2) => {
        setSelectedProposition(prop)
        setCurrentStep(0)
        setZoomedFeature(null)
    }

    if (!mounted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-muted-foreground">Chargement...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="proposals-wrapper min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Navigation en haut à gauche */}
            <div className="fixed top-4 left-4 z-50 flex gap-3">
                <Link href="/parcoursvente">
                    <button className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg transition-all shadow-xl flex items-center gap-2 font-semibold border-2 border-white/20 hover:border-white/40 hover:scale-105">
                        <LayoutGrid className="w-5 h-5" />
                        <span>Parcours</span>
                    </button>
                </Link>
                <Link href="/roadmap">
                    <button className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg transition-all shadow-xl flex items-center gap-2 font-semibold border-2 border-white/20 hover:border-white/40 hover:scale-105">
                        <Map className="w-5 h-5" />
                        <span>Comparatif</span>
                    </button>
                </Link>
                <Link href="/isowattcrm">
                    <button className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg transition-all shadow-xl flex items-center gap-2 font-semibold border-2 border-white/20 hover:border-white/40 hover:scale-105">
                        <ExternalLink className="w-5 h-5" />
                        <span>CRM</span>
                    </button>
                </Link>
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <Button
                        variant={selectedProposition === 1 ? "default" : "outline"}
                        onClick={() => switchProposition(1)}
                        className="px-6"
                    >
                        Proposition 1 : Approche Progressive
                    </Button>
                    <Button
                        variant={selectedProposition === 2 ? "default" : "outline"}
                        onClick={() => switchProposition(2)}
                        className="px-6"
                    >
                        Proposition 2 : Développement Direct
                    </Button>
                </div>

                <div className="mb-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        {journeySteps.map((step, idx) => (
                            <div key={idx} className="flex items-center">
                                <div
                                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                                        idx === currentStep
                                            ? "bg-primary scale-150 ring-4 ring-primary/30"
                                            : idx < currentStep
                                                ? "bg-primary/50"
                                                : "bg-muted"
                                    }`}
                                />
                                {idx < journeySteps.length - 1 && (
                                    <div
                                        className={`w-8 h-0.5 transition-all duration-500 ${
                                            idx < currentStep ? "bg-primary/50" : "bg-muted"
                                        }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                        Étape {currentStep + 1} sur {journeySteps.length}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* PROPOSITION 1 STEPS */}
                    {selectedProposition === 1 && (
                        <>
                            {/* INTRO STEP */}
                            {currentStepData.id === "intro" && (
                                <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                        <Sparkles className="w-4 h-4" />
                                        Solution Innovante
                                    </div>
                                    <h1 className="text-6xl md:text-7xl font-bold text-balance">
                                        {currentStepData.title}
                                        <br />
                                        <span className="text-primary">{currentStepData.subtitle}</span>
                                    </h1>
                                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                                        Une approche progressive pour transformer votre processus de vente
                                    </p>
                                    <div className="pt-8">
                                        <Button size="lg" onClick={nextStep} className="text-lg px-8 py-6 group">
                                            Découvrir le parcours
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* PHASE 1 STEP */}
                            {currentStepData.id === "phase1" && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
                                    <div className="text-center space-y-4">
                                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border-2 border-primary/20">
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                                                1
                                            </div>
                                            <div className="text-left">
                                                <h2 className="text-3xl font-bold">{currentStepData.title}</h2>
                                                <p className="text-sm text-muted-foreground">{currentStepData.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground font-bold">
                                            {currentStepData.duration}
                                        </div>
                                    </div>

                                    <Card className="p-8 bg-card/50 backdrop-blur border-2 border-primary/20">
                                        <h3 className="text-2xl font-bold mb-6 text-center">Fonctionnalités Incluses</h3>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {currentStepData.features?.map((feature, idx) => (
                                                <Card
                                                    key={idx}
                                                    className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 ${
                                                        zoomedFeature === feature.title
                                                            ? "scale-105 shadow-2xl border-primary ring-2 ring-primary"
                                                            : ""
                                                    }`}
                                                    onClick={() => setZoomedFeature(zoomedFeature === feature.title ? null : feature.title)}
                                                >
                                                    <feature.icon className="w-10 h-10 mb-3 text-primary" />
                                                    <h4 className="font-bold mb-1">{feature.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                                </Card>
                                            ))}
                                        </div>
                                    </Card>

                                    <Card className="p-6 bg-gradient-to-r from-green-500/20 to-primary/20 border-2 border-green-500/30">
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                                <Check className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold">Disponible dès le</p>
                                                <p className="text-lg text-muted-foreground">
                                                    <span className="font-bold text-green-600">{currentStepData.availableDate}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Card>

                                    <div className="flex items-center justify-center gap-4 pt-4">
                                        <Button variant="outline" onClick={prevStep}>
                                            Retour
                                        </Button>
                                        <Button size="lg" onClick={nextStep} className="group">
                                            Et ensuite ?
                                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* TRANSITION STEP */}
                            {currentStepData.id === "transition" && (
                                <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
                                    <div className="space-y-4">
                                        <h2 className="text-5xl font-bold">{currentStepData.title}</h2>
                                        <p className="text-2xl text-primary font-semibold">{currentStepData.subtitle}</p>
                                    </div>

                                    <div className="max-w-2xl mx-auto">
                                        <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
                                            <div className="flex items-center justify-center mb-6">
                                                <ArrowRight className="w-16 h-16 text-primary animate-pulse" />
                                            </div>
                                            <p className="text-lg text-muted-foreground mb-6">
                                                Pendant que vous utilisez l'App Parcours de Vente, nous développons votre CRM complet
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-4 bg-background/50 rounded-lg">
                                                    <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                                    <p className="font-bold text-sm">Vous vendez</p>
                                                    <p className="text-xs text-muted-foreground">ROI immédiat</p>
                                                </div>
                                                <div className="p-4 bg-background/50 rounded-lg">
                                                    <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                                                    <p className="font-bold text-sm">Nous développons</p>
                                                    <p className="text-xs text-muted-foreground">CRM sur mesure</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>

                                    <div className="flex items-center justify-center gap-4 pt-4">
                                        <Button variant="outline" onClick={prevStep}>
                                            Retour
                                        </Button>
                                        <Button size="lg" onClick={nextStep} className="group">
                                            Voir le CRM
                                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* PHASE 2 STEP */}
                            {currentStepData.id === "phase2" && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
                                    <div className="text-center space-y-4">
                                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                                                2
                                            </div>
                                            <div className="text-left">
                                                <h2 className="text-3xl font-bold">{currentStepData.title}</h2>
                                                <p className="text-sm text-muted-foreground">{currentStepData.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 font-bold border border-green-500/30">
                                                {currentStepData.pricing?.trial}
                                            </div>
                                            <div className="px-4 py-2 rounded-full bg-primary/20 text-primary font-bold border border-primary/30">
                                                Puis {currentStepData.pricing?.price}
                                            </div>
                                        </div>
                                    </div>

                                    <Card className="p-8 bg-card/50 backdrop-blur border-2 border-primary/20">
                                        <h3 className="text-2xl font-bold mb-6 text-center">Modules CRM Complets</h3>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {currentStepData.modules?.map((module, idx) => (
                                                <Card
                                                    key={idx}
                                                    className={`p-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl ${
                                                        zoomedFeature === module.title ? "scale-110 shadow-2xl ring-2 ring-primary" : ""
                                                    }`}
                                                    onClick={() => setZoomedFeature(zoomedFeature === module.title ? null : module.title)}
                                                >
                                                    <module.icon className={`w-12 h-12 mb-3 mx-auto text-${module.color}-500`} />
                                                    <h4 className="font-bold text-center mb-1 text-sm">{module.title}</h4>
                                                    <p className="text-xs text-muted-foreground text-center">{module.desc}</p>
                                                </Card>
                                            ))}
                                        </div>
                                    </Card>

                                    <Card className="p-6 bg-gradient-to-r from-green-500/20 to-primary/20 border-2 border-green-500/30">
                                        <div className="flex items-center justify-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                                <Check className="w-7 h-7 text-white" />
                                            </div>
                                            <div className="text-center">
                                                <p className="text-2xl font-bold">Tout prêt, tout fonctionnel</p>
                                                <p className="text-lg text-muted-foreground">
                                                    dès le <span className="font-bold text-green-600">{currentStepData.availableDate}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Card>

                                    <div className="flex items-center justify-center gap-4 pt-4">
                                        <Button variant="outline" onClick={prevStep}>
                                            Retour
                                        </Button>
                                        <Button size="lg" onClick={nextStep} className="group">
                                            Voir les avantages
                                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* BENEFITS STEP */}
                            {currentStepData.id === "benefits" && (
                                <div className="space-y-8 animate-in fade-in zoom-in duration-700">
                                    <div className="text-center space-y-4">
                                        <h2 className="text-5xl font-bold">{currentStepData.title}</h2>
                                        <p className="text-xl text-muted-foreground">{currentStepData.subtitle}</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                                        <Card className="p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300 border-2 border-primary/20">
                                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                                                <Zap className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Opérationnel Rapidement</h3>
                                            <p className="text-muted-foreground">Commencez à vendre dès le 1er Janvier</p>
                                            <div className="pt-4 border-t">
                                                <p className="text-3xl font-bold text-primary">3 mois</p>
                                                <p className="text-sm text-muted-foreground">pour être opérationnel</p>
                                            </div>
                                        </Card>

                                        <Card className="p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300 border-2 border-green-500/20 bg-green-500/5">
                                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                                                <TrendingUp className="w-8 h-8 text-green-500" />
                                            </div>
                                            <h3 className="text-2xl font-bold">ROI Immédiat</h3>
                                            <p className="text-muted-foreground">Commencez à vendre pendant le développement</p>
                                            <div className="pt-4 border-t">
                                                <p className="text-3xl font-bold text-green-500">+3 mois</p>
                                                <p className="text-sm text-muted-foreground">de revenus en avance</p>
                                            </div>
                                        </Card>

                                        <Card className="p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300 border-2 border-secondary/20 bg-secondary/5">
                                            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                                                <Sparkles className="w-8 h-8 text-secondary" />
                                            </div>
                                            <h3 className="text-2xl font-bold">CRM Parfaitement Adapté</h3>
                                            <p className="text-muted-foreground">
                                                Conçu spécifiquement pour votre parcours de vente existant
                                            </p>
                                            <div className="pt-4 border-t">
                                                <p className="text-3xl font-bold text-secondary">100%</p>
                                                <p className="text-sm text-muted-foreground">adapté à vos besoins</p>
                                            </div>
                                        </Card>

                                        <Card className="p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300 border-2 border-blue-500/20 bg-blue-500/5">
                                            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto">
                                                <Shield className="w-8 h-8 text-blue-500" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Évolution à mes frais</h3>
                                            <p className="text-muted-foreground">
                                                Développement CRM pris en charge, évolutions peu coûteuses
                                            </p>
                                            <div className="pt-4 border-t">
                                                <p className="text-3xl font-bold text-blue-500">0€</p>
                                                <p className="text-sm text-muted-foreground">de frais de développement</p>
                                            </div>
                                        </Card>
                                    </div>

                                    <Card className="max-w-3xl mx-auto p-6 bg-orange-500/10 border-2 border-orange-500/20">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                                <AlertTriangle className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">L'approche inverse peut coûter cher</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Développer le CRM avant le parcours de vente peut allonger les coûts et le temps de
                                                    développement, car le CRM devra être adapté après coup au lieu d'être conçu dès le départ pour
                                                    votre processus.
                                                </p>
                                            </div>
                                        </div>
                                    </Card>

                                    <div className="text-center space-y-6 pt-8">
                                        <div className="flex items-center justify-center gap-4">
                                            <Button variant="outline" onClick={prevStep}>
                                                Retour
                                            </Button>
                                            <Button variant="outline" onClick={() => setCurrentStep(0)}>
                                                Revoir le parcours
                                            </Button>
                                            <Button
                                                variant="outline"
                                                onClick={() => switchProposition(2)}
                                                className="bg-orange-500/10 border-orange-500/30 hover:bg-orange-500/20"
                                            >
                                                Voir la Proposition 2
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {selectedProposition === 2 && (
                        <>
                            {/* INTRO STEP */}
                            {currentStepData.id === "intro" && (
                                <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium">
                                        <AlertTriangle className="w-4 h-4" />
                                        Approche Alternative
                                    </div>
                                    <h1 className="text-6xl md:text-7xl font-bold text-balance">
                                        {currentStepData.title}
                                        <br />
                                        <span className="text-muted-foreground">{currentStepData.subtitle}</span>
                                    </h1>
                                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                                        Développement complet du CRM avant utilisation
                                    </p>
                                    <div className="pt-8">
                                        <Button
                                            size="lg"
                                            onClick={nextStep}
                                            variant="outline"
                                            className="text-lg px-8 py-6 group"
                                        >
                                            Voir le planning
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* MONTH 1 STEP */}
                            {currentStepData.id === "month1" && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
                                    <div className="text-center space-y-4">
                                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border-2 border-muted">
                                            <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center font-bold text-muted-foreground">
                                                M1
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Utilisateurs / Connexion / Administrer vos utilisateurs</p>
                                                <p className="text-xs text-muted-foreground">Novembre 2025</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Card className="p-8 bg-card/50 backdrop-blur border-2 border-muted">
                                        <h3 className="text-2xl font-bold mb-6 text-center">Modules en développement</h3>
                                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                            {currentStepData.modules?.map((module, idx) => (
                                                <Card
                                                    key={idx}
                                                    className="p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                                    onClick={() => setZoomedFeature(zoomedFeature === module.title ? null : module.title)}
                                                >
                                                    <module.icon className={`w-12 h-12 mb-4 mx-auto text-${module.color}-500`} />
                                                    <h4 className="font-bold mb-2 text-center">{module.title}</h4>
                                                    <p className="text-sm text-muted-foreground text-center">{module.desc}</p>
                                                </Card>
                                            ))}
                                        </div>
                                    </Card>

                                    <Card className="p-6 bg-orange-500/10 border-2 border-orange-500/20">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                                <AlertTriangle className="w-8 h-8 text-orange-600" />
                                            </div>
                                            <div>
                                                <p className="text-xl font-bold mb-2">Fonctionnel mais improductif</p>
                                                <p className="text-sm text-muted-foreground">
                                                    La gestion des utilisateurs est disponible, mais ne génère aucun revenu. Vous investissez du
                                                    temps et de l'argent sans pouvoir vendre.
                                                </p>
                                            </div>
                                        </div>
                                    </Card>

                                    <div className="flex items-center justify-center gap-4 pt-4">
                                        <Button variant="outline" onClick={prevStep}>
                                            Retour
                                        </Button>
                                        <Button size="lg" onClick={nextStep} variant="outline" className="group">
                                            Mois suivant
                                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* MONTH 2 STEP */}
                            {currentStepData.id === "month2" && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
                                    <div className="text-center space-y-4">
                                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border-2 border-muted">
                                            <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center font-bold text-muted-foreground">
                                                M2
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Module Lead / Module Agenda + Google</p>
                                                <p className="text-xs text-muted-foreground">Décembre 2025</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Card className="p-8 bg-card/50 backdrop-blur border-2 border-muted">
                                        <h3 className="text-2xl font-bold mb-6 text-center">Modules en développement</h3>
                                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                            {currentStepData.modules?.map((module, idx) => (
                                                <Card
                                                    key={idx}
                                                    className="p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                                    onClick={() => setZoomedFeature(zoomedFeature === module.title ? null : module.title)}
                                                >
                                                    <module.icon className={`w-12 h-12 mb-4 mx-auto text-${module.color}-500`} />
                                                    <h4 className="font-bold mb-2 text-center">{module.title}</h4>
                                                    <p className="text-sm text-muted-foreground text-center">{module.desc}</p>
                                                </Card>
                                            ))}
                                        </div>
                                    </Card>

                                    <Card className="p-6 bg-orange-500/10 border-2 border-orange-500/20">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                                <AlertTriangle className="w-8 h-8 text-orange-600" />
                                            </div>
                                            <div>
                                                <p className="text-xl font-bold mb-2">Double du travail</p>
                                                <p className="text-sm text-muted-foreground">
                                                    Le parcours de vente inclut déjà l'agenda et la gestion des leads. Pourquoi développer ces
                                                    fonctionnalités deux fois au lieu de les réutiliser ?
                                                </p>
                                            </div>
                                        </div>
                                    </Card>

                                    <div className="flex items-center justify-center gap-4 pt-4">
                                        <Button variant="outline" onClick={prevStep}>
                                            Retour
                                        </Button>
                                        <Button size="lg" onClick={nextStep} variant="outline" className="group">
                                            Mois suivant
                                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* MONTH 3 STEP */}
                            {currentStepData.id === "month3" && (
                                <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
                                    <div className="text-center space-y-4">
                                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border-2 border-muted">
                                            <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center font-bold text-muted-foreground">
                                                M3
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">Module Produits / Module Projet</p>
                                                <p className="text-xs text-muted-foreground">Janvier 2026</p>
                                            </div>
                                        </div>
                                    </div>

                                    <Card className="p-8 bg-card/50 backdrop-blur border-2 border-muted">
                                        <h3 className="text-2xl font-bold mb-6 text-center">Modules finaux</h3>
                                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                            {currentStepData.modules?.map((module, idx) => (
                                                <Card
                                                    key={idx}
                                                    className="p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                                    onClick={() => setZoomedFeature(zoomedFeature === module.title ? null : module.title)}
                                                >
                                                    <module.icon className={`w-12 h-12 mb-4 mx-auto text-${module.color}-500`} />
                                                    <h4 className="font-bold mb-2 text-center">{module.title}</h4>
                                                    <p className="text-sm text-muted-foreground text-center">{module.desc}</p>
                                                </Card>
                                            ))}
                                        </div>
                                    </Card>

                                    <Card className="p-6 bg-muted/10 border-2 border-muted/20">
                                        <div className="flex items-center justify-center gap-4">
                                            <Check className="w-10 h-10 text-muted-foreground" />
                                            <div className="text-center">
                                                <p className="text-xl font-bold">Disponible en Janvier 2026</p>
                                                <p className="text-sm text-muted-foreground">CRM complet prêt à l'emploi</p>
                                            </div>
                                        </div>
                                    </Card>

                                    <div className="flex items-center justify-center gap-4 pt-4">
                                        <Button variant="outline" onClick={prevStep}>
                                            Retour
                                        </Button>
                                        <Button size="lg" onClick={nextStep} variant="outline" className="group">
                                            Voir les points d'attention
                                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* DRAWBACKS STEP */}
                            {currentStepData.id === "drawbacks" && (
                                <div className="space-y-8 animate-in fade-in zoom-in duration-700">
                                    <div className="text-center space-y-4">
                                        <h2 className="text-5xl font-bold">{currentStepData.title}</h2>
                                        <p className="text-xl text-muted-foreground">{currentStepData.subtitle}</p>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                        <Card className="p-8 text-center space-y-4 border-2 border-orange-500/20 bg-orange-500/5">
                                            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto">
                                                <Clock className="w-8 h-8 text-orange-500" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Outils partiels pendant 2 mois</h3>
                                            <p className="text-muted-foreground">
                                                Outils utilisables uniquement pour Lead/Agenda pendant 2 mois, alors qu'on va faire la même
                                                chose dans le parcours de vente
                                            </p>
                                            <div className="pt-4 border-t border-orange-500/20">
                                                <p className="text-3xl font-bold text-orange-500">2 mois</p>
                                                <p className="text-sm text-muted-foreground">de développement redondant</p>
                                            </div>
                                        </Card>

                                        <Card className="p-8 text-center space-y-4 border-2 border-red-500/20 bg-red-500/5">
                                            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto">
                                                <AlertTriangle className="w-8 h-8 text-red-500" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Investissement + conséquent</h3>
                                            <p className="text-muted-foreground">Coûts complets dès le départ sans période d'essai</p>
                                            <div className="pt-4 border-t border-red-500/20">
                                                <p className="text-3xl font-bold text-red-500">100%</p>
                                                <p className="text-sm text-muted-foreground">des coûts immédiatement</p>
                                            </div>
                                        </Card>

                                        <Card className="p-8 text-center space-y-4 border-2 border-yellow-500/20 bg-yellow-500/5">
                                            <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto">
                                                <Users className="w-8 h-8 text-yellow-500" />
                                            </div>
                                            <h3 className="text-2xl font-bold">Charge pour les commerciaux</h3>
                                            <p className="text-muted-foreground">
                                                Les commerciaux devront saisir manuellement leurs ventes et rendez-vous, ce qui représente une
                                                perte de temps
                                            </p>
                                            <div className="pt-4 border-t border-yellow-500/20">
                                                <p className="text-3xl font-bold text-yellow-500">+</p>
                                                <p className="text-sm text-muted-foreground">de travail administratif</p>
                                            </div>
                                        </Card>
                                    </div>

                                    <div className="text-center space-y-6 pt-8">
                                        <div className="flex items-center justify-center gap-4">
                                            <Button variant="outline" onClick={prevStep}>
                                                Retour
                                            </Button>
                                            <Button variant="outline" onClick={() => setCurrentStep(0)}>
                                                Revoir le parcours
                                            </Button>
                                            <Button onClick={() => switchProposition(1)}>Voir la Proposition 1</Button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* COMPARATIF DES PROPOSITIONS */}
                <div className="max-w-6xl mx-auto mt-16 space-y-8 animate-in fade-in duration-700">
                    <div className="text-center space-y-4">
                        <h2 className="text-5xl font-bold">Comparatif des Solutions</h2>
                        <p className="text-xl text-muted-foreground">Choisissez l'approche qui correspond à vos besoins</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Proposition 1 */}
                        <Card className="p-8 border-2 border-muted/30 bg-card/50 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold mb-2">Approche Progressive</h3>
                                    <p className="text-muted-foreground">Parcours de Vente + CRM</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold">0€</span>
                                        <span className="text-muted-foreground">développement CRM</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold">15€</span>
                                        <span className="text-muted-foreground">/ utilisateur / mois</span>
                                    </div>
                                    <div className="px-4 py-2 bg-primary/20 text-primary rounded-lg inline-block">
                                        <span className="font-bold">2 mois gratuits</span>
                                    </div>
                                </div>

                                <div className="border-t border-muted/20 pt-4 space-y-3">
                                    <div className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">App Parcours de Vente dès Janvier 2026</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">CRM complet Mars 2026</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">ROI immédiat - vous vendez dès Janvier</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">Évolution à mes frais</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">15,000€ pour le Parcours de Vente incluant Mini Lead / Gestion Rendez-vous</p>
                                    </div>
                                </div>

                                <Button asChild className="w-full text-lg py-6" size="lg">
                                    <Link href="/roadmap">
                                        + de détails
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </Card>

                        {/* Proposition 2 */}
                        <Card className="p-8 border-2 border-muted/30 bg-card/50 hover:scale-105 transition-transform duration-300">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-3xl font-bold mb-2">Développement Direct</h3>
                                    <p className="text-muted-foreground">CRM Complet dès le départ</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold">21,000€</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="px-4 py-2 bg-muted/50 text-muted-foreground rounded-lg inline-block">
                                            <span className="font-bold">Paiement unique</span>
                                        </div>
                                        <div className="px-4 py-2 bg-primary/20 text-primary rounded-lg inline-block">
                                            <span className="font-bold">Payable par Module</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-muted/20 pt-4 space-y-3">
                                    <div className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">CRM disponible Janvier 2026</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">Tous les modules inclus</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">Pas d'outil de vente (Parcours de vente avant Mars)</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <p className="text-sm">Investissement complet dès le départ</p>
                                    </div>
                                </div>

                                <Button asChild className="w-full text-lg py-6" size="lg">
                                    <Link href="/roadmap">
                                        + de détails
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* Tableau récapitulatif */}
                    <Card className="p-8 bg-card/50 backdrop-blur border-2 border-muted/30">
                        <h3 className="text-2xl font-bold mb-6 text-center">Tableau Récapitulatif</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-muted/20">
                                        <th className="text-left py-4 px-4 font-bold">Critères</th>
                                        <th className="text-center py-4 px-4 font-bold">Approche Progressive</th>
                                        <th className="text-center py-4 px-4 font-bold">Développement Direct</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-muted/20">
                                    <tr>
                                        <td className="py-4 px-4 font-medium">Coût initial</td>
                                        <td className="text-center py-4 px-4">0€</td>
                                        <td className="text-center py-4 px-4">21,000€</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 font-medium">Coût mensuel CRM</td>
                                        <td className="text-center py-4 px-4">15€ /utilisateur (2 mois gratuits)</td>
                                        <td className="text-center py-4 px-4">-</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 font-medium">Disponibilité Parcours de Vente</td>
                                        <td className="text-center py-4 px-4">1er Janvier 2026</td>
                                        <td className="text-center py-4 px-4">Non inclus</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 font-medium">Disponibilité CRM</td>
                                        <td className="text-center py-4 px-4">1er Mars 2026</td>
                                        <td className="text-center py-4 px-4">1er Janvier 2026</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 font-medium">ROI</td>
                                        <td className="text-center py-4 px-4">Immédiat (dès Janvier)</td>
                                        <td className="text-center py-4 px-4">Après 3 mois</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 font-medium">Évolutions futures</td>
                                        <td className="text-center py-4 px-4">À mes frais</td>
                                        <td className="text-center py-4 px-4">Coût supplémentaire</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>

                {showAlternative && (
                    <div className="fixed inset-0 bg-background/98 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
                        <Card className="max-w-2xl w-full p-8 space-y-6 animate-in zoom-in duration-300 border-muted">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-muted-foreground">Alternative : Développement Direct</h2>
                                <p className="text-sm text-muted-foreground">CRM complet dès le départ</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                                    <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center font-bold text-muted-foreground">
                                        M1
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Utilisateurs / Connexion / Administrer vos utilisateurs</p>
                                        <p className="text-xs text-muted-foreground">Novembre 2025</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                                    <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center font-bold text-muted-foreground">
                                        M2
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Module Lead / Module Agenda + Google</p>
                                        <p className="text-xs text-muted-foreground">Décembre 2025</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                                    <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center font-bold text-muted-foreground">
                                        M3
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Module Produits / Module Projet</p>
                                        <p className="text-xs text-muted-foreground">Janvier 2026</p>
                                    </div>
                                </div>

                                <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                                    <p className="font-bold text-sm mb-2">Parcours de vente</p>
                                    <p className="text-xs text-muted-foreground">À développer séparément (optionnel)</p>
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t">
                                <div className="flex items-start gap-3 p-3 bg-orange-500/10 rounded-lg">
                                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-orange-600 text-xs font-bold">!</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Attente de 3 mois</p>
                                        <p className="text-xs text-muted-foreground">Aucun outil utilisable avant la fin</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-orange-500/10 rounded-lg">
                                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-orange-600 text-xs font-bold">!</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Investissement initial</p>
                                        <p className="text-xs text-muted-foreground">Coûts complets dès le départ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button variant="outline" className="flex-1" onClick={() => setShowAlternative(false)}>
                                    Fermer
                                </Button>
                                <Button className="flex-1" onClick={() => setShowAlternative(false)}>
                                    Préférer l'approche progressive
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    )
}

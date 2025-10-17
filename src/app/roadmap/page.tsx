"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import "./styles.css"
import {
    Users,
    Calendar,
    TrendingUp,
    Package,
    FileText,
    Home,
    Sun,
    Zap,
    Check,
    CreditCard,
    BarChart3,
    Shield,
    ArrowRight,
    ExternalLink,
    LayoutGrid,
    Map, Signature,
} from "lucide-react"

export default function RoadmapPage() {
    const parcoursSteps = [
        { number: 1, title: "Coordonnées du client", icon: Users },
        { number: 2, title: "Étude du logement", icon: Home },
        { number: 3, title: "Potentiel solaire", icon: Sun },
        { number: 4, title: "Consommation", icon: Zap },
        { number: 5, title: "Éligibilité aux aides", icon: Check },
        { number: 6, title: "Nos solutions", icon: Package },
        { number: 7, title: "Simulation", icon: BarChart3 },
        { number: 8, title: "Validations/Signatures", icon: Signature },
    ]

    const crmModules = [
        { title: "Module Utilisateurs", desc: "Gestion complète de l'équipe", icon: Users, color: "blue" },
        { title: "Module Administration", desc: "Contrôle et permissions", icon: Shield, color: "purple" },
        { title: "Module Lead", desc: "Pipeline de vente", icon: TrendingUp, color: "green" },
        { title: "Module Agenda + Google", desc: "Synchronisation Google Calendar", icon: Calendar, color: "red" },
        { title: "Module Produits", desc: "Catalogue avancé", icon: Package, color: "orange" },
        { title: "Module Projet", desc: "Gestion de projets", icon: FileText, color: "pink" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
                <Link href="/proposals">
                    <button className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg transition-all shadow-xl flex items-center gap-2 font-semibold border-2 border-white/20 hover:border-white/40 hover:scale-105">
                        <Map className="w-5 h-5" />
                        <span>Propositions</span>
                    </button>
                </Link>
                <Link href="/isowattcrm">
                    <button className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg transition-all shadow-xl flex items-center gap-2 font-semibold border-2 border-white/20 hover:border-white/40 hover:scale-105">
                        <ExternalLink className="w-5 h-5" />
                        <span>CRM</span>
                    </button>
                </Link>
            </div>

            <div className="container mx-auto px-4 py-16 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">Comparaison Détaillés</h1>
                    <p className="text-xl text-slate-200">Comparaison des deux solutions ISOWATT</p>
                </div>

                {/* Deux cartes côte à côte */}
                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
                    {/* Solution 1 - Parcours de Vente */}
                    <Card className="p-8 bg-slate-800/50 backdrop-blur border-2 border-slate-700">
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <LayoutGrid className="w-10 h-10 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-50 mb-2">Parcours de Vente</h2>
                                <p className="text-slate-300">Adaptée mobile pour les commerciaux</p>
                            </div>

                            <div className="text-center py-6 border-y border-slate-700">
                                <div className="text-5xl font-bold text-primary mb-2">15,000€</div>
                                <p className="text-slate-300">Paiement flexible ( par mois )</p>
                                <div className="mt-4 space-y-2">
                                    <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg inline-block ml-2 pr-1.5">
                                        <span className="font-bold">+ CRM Complet à 0€ </span>
                                    </div>
                                    <div className="ml-2 px-4 py-2 bg-secondary/20 text-secondary rounded-lg inline-block">
                                        <span className="font-bold">15€/utilisateur/mois + 2 mois gratuits</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-50 mb-4">Les 8 étapes du parcours :</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {parcoursSteps.map((step) => (
                                        <div key={step.number} className="flex items-center gap-3 p-3 roadmap-step-bg rounded-lg">
                                            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-primary font-bold text-sm">{step.number}</span>
                                            </div>
                                            <div>
                                                <step.icon className="w-4 h-4 text-primary mb-1" />
                                                <p className="text-xs text-slate-200">{step.title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-slate-700">
                                <h3 className="text-lg font-bold text-slate-50 mb-3">Fonctionnalités incluses :</h3>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-100 font-semibold">Gestion des Rendez-vous</p>
                                        <p className="text-xs text-slate-300">Planifiez et suivez vos rendez-vous clients</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-100 font-semibold">Mini Lead</p>
                                        <p className="text-xs text-slate-300">Gestion simplifiée des prospects</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-100 font-semibold">Bons de commande</p>
                                        <p className="text-xs text-slate-300">Stockage sécurisé des documents</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-100 font-semibold">Simulation et devis</p>
                                        <p className="text-xs text-slate-300">Génération instantanée de propositions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-100 font-semibold">Signature (YouSign)  intégré</p>
                                        <p className="text-xs text-slate-300">Solution de signatures sécurisée</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                    <div className="w-full">
                                        <p className="text-sm text-slate-100 font-semibold">CRM Complet inclus</p>
                                        <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-lg mb-2">
                                            <p className="text-xs text-green-400 font-bold">✨ Cette offre inclut TOUS les modules du CRM Complet à 0€</p>
                                        </div>
                                        <p className="text-xs text-slate-300 mb-2">Développement pris en charge - Les 6 modules inclus :</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                                                <Users className="w-3 h-3" />
                                                Utilisateurs
                                            </span>
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                                                <Shield className="w-3 h-3" />
                                                Admin
                                            </span>
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                                                <TrendingUp className="w-3 h-3" />
                                                Leads
                                            </span>
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">
                                                <Calendar className="w-3 h-3" />
                                                Agenda + Google
                                            </span>
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs">
                                                <Package className="w-3 h-3" />
                                                Produits
                                            </span>
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs">
                                                <FileText className="w-3 h-3" />
                                                Business
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-4">
                                    <p className="text-sm text-primary font-semibold mb-2">📅 Disponibilité</p>
                                    <p className="text-xs text-slate-300">1er Janvier 2026</p>
                                </div>
                                <Button asChild className="w-full bg-green-700 hover:bg-primary/90" size="lg">
                                    <Link href="/devis/parcoursvente">
                                        Voir le devis complet
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* Solution 2 - CRM Complet */}
                    <Card className="p-8 bg-slate-800/50 backdrop-blur border-2 border-slate-700">
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart3 className="w-10 h-10 text-secondary" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-50 mb-2">CRM Complet</h2>
                                <p className="text-slate-300">Solution complète de gestion</p>
                            </div>

                            <div className="text-center py-6 border-y border-slate-700">
                                <div className="text-5xl font-bold text-secondary mb-2">21,000€</div>
                                <div className="flex gap-2 justify-center mt-4">
                                    <div className="px-4 py-2 bg-secondary/20 text-secondary rounded-lg inline-block">
                                        <span className="font-bold">Payable par Module tout les mois</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-50 mb-4">Les 6 modules du CRM :</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {crmModules.map((module, idx) => (
                                        <div key={idx} className="p-4 roadmap-card-bg rounded-lg roadmap-card-hover transition-colors">
                                            <module.icon className={`w-8 h-8 mb-2 icon-${module.color}`} />
                                            <p className="text-sm font-semibold text-slate-100 mb-1">{module.title}</p>
                                            <p className="text-xs text-slate-300">{module.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-slate-700">
                                <h3 className="text-lg font-bold text-slate-50 mb-3">Fonctionnalités avancées :</h3>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-100 font-semibold">Gestion complète des utilisateurs</p>
                                        <p className="text-xs text-slate-300">Rôles, permissions, régions</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-100 font-semibold">Pipeline de vente avancé</p>
                                        <p className="text-xs text-slate-300">Lead, Business, Suivi complet</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-100 font-semibold">Synchronisation Google Agenda</p>
                                        <p className="text-xs text-slate-300">Intégration calendrier complète</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-100 font-semibold">Gestion documentaire</p>
                                        <p className="text-xs text-slate-300">Upload, organisation, partage</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-slate-100 font-semibold">Analytics & Reporting</p>
                                        <p className="text-xs text-slate-300">Tableaux de bord personnalisés</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4 mb-4">
                                    <p className="text-sm text-secondary font-semibold mb-2">📅 Disponibilité</p>
                                    <p className="text-xs text-slate-300">1er Janvier 2026</p>
                                </div>
                                <Button asChild className="w-full bg-blue-700 hover:bg-secondary/90" size="lg">
                                    <Link href="/devis/crm">
                                        Voir le devis complet
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Tableau comparatif détaillé */}
                <Card className="p-8 bg-slate-800/50 backdrop-blur border-2 border-slate-700 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-50 text-center mb-8">Comparaison Détaillée</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-slate-700">
                                    <th className="text-left py-4 px-4 text-slate-200 font-bold">Critère</th>
                                    <th className="text-center py-4 px-4 text-primary font-bold">Parcours de Vente</th>
                                    <th className="text-center py-4 px-4 text-secondary font-bold">CRM Complet</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Coût initial</td>
                                    <td className="text-center py-4 px-4 text-slate-50 font-bold">15,000€</td>
                                    <td className="text-center py-4 px-4 text-slate-50 font-bold">21,000€</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Paiement flexible</td>
                                    <td className="text-center py-4 px-4 text-slate-300">Payable par mois</td>
                                    <td className="text-center py-4 px-4 text-slate-100">Payable par Module</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Adapté mobile</td>
                                    <td className="text-center py-4 px-4 text-primary">✓</td>
                                    <td className="text-center py-4 px-4 text-secondary ">✓</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Gestion des utilisateurs</td>
                                    <td className="text-center py-4 px-4 text-slate-300">Basique</td>
                                    <td className="text-center py-4 px-4 text-secondary">✓ Avancée</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Module Lead</td>
                                    <td className="text-center py-4 px-4 text-primary">✓ Mini</td>
                                    <td className="text-center py-4 px-4 text-secondary">✓ Complet</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Agenda / Rendez-vous</td>
                                    <td className="text-center py-4 px-4 text-primary">✓ + Google Sync</td>
                                    <td className="text-center py-4 px-4 text-secondary">✓ + Google Sync</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Parcours de vente 8 étapes</td>
                                    <td className="text-center py-4 px-4 text-primary">✓</td>
                                    <td className="text-center py-4 px-4 text-slate-300">-</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Module Business/Projets</td>
                                    <td className="text-center py-4 px-4 text-slate-300">-</td>
                                    <td className="text-center py-4 px-4 text-secondary">✓</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Module Produits</td>
                                    <td className="text-center py-4 px-4 text-slate-300">-</td>
                                    <td className="text-center py-4 px-4 text-secondary">✓</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Analytics & Reporting</td>
                                    <td className="text-center py-4 px-4 text-slate-300">Basique</td>
                                    <td className="text-center py-4 px-4 text-secondary">✓ Avancé</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">Disponibilité</td>
                                    <td className="text-center py-4 px-4 text-slate-100">1er Janvier 2026</td>
                                    <td className="text-center py-4 px-4 text-slate-100">1er Janvier 2026</td>
                                </tr>
                                <tr className="roadmap-table-hover">
                                    <td className="py-4 px-4 text-slate-200 font-medium">ROI</td>
                                    <td className="text-center py-4 px-4 text-slate-100">Immédiat (commerciaux)</td>
                                    <td className="text-center py-4 px-4 text-slate-100">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* Note finale */}
                <div className="max-w-4xl mx-auto mt-12 text-center">
                    <Card className="p-8 bg-slate-800/50 backdrop-blur border-2 border-primary/30">
                        <h3 className="text-2xl font-bold text-slate-50 mb-4">💡 Conseil</h3>
                        <p className="text-slate-200 leading-relaxed">
                            Les deux solutions peuvent être complémentaires. Le <span className="text-primary font-semibold">Parcours de Vente</span>
                            permet une mise en place rapide pour les commerciaux terrain, tandis que le <span className="text-secondary font-semibold">CRM Complet</span>
                            offre une gestion centralisée et avancée de toute l'activité commerciale.
                        </p>
                        <div className="mt-6 flex gap-4 justify-center">
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

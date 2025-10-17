"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DevisParcours() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/roadmap">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Devis Comparatif - ISOWATT</h1>
          <p className="text-gray-600">Analyse détaillée des deux offres de développement</p>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Parcours de Vente */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white p-6">
              <h2 className="text-2xl font-bold">Parcours de Vente</h2>
              <p className="text-green-100 mt-1">Application pour les commerciaux</p>
              <div className="mt-4 text-4xl font-bold">15,000€</div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Fonctionnalités principales</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1. Coordonnées du client</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Formulaire de saisie des coordonnées</li>
                    <li>• Validation automatique</li>
                    <li>• Géolocalisation de l'adresse</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2. Étude du logement</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Type d'habitation</li>
                    <li>• Surface et année de construction</li>
                    <li>• Type de toiture et orientation</li>
                    <li>• Isolation existante</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3. Potentiel solaire</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Calcul ensoleillement par localisation</li>
                    <li>• Analyse orientation et inclinaison</li>
                    <li>• Production solaire potentielle</li>
                    <li>• Détection zones d'ombre</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">4. Consommation</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Analyse consommation électrique</li>
                    <li>• Consommation gaz</li>
                    <li>• Calcul du DPE</li>
                    <li>• Projection des économies</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">5. Éligibilité aux aides</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Certificats d'Économies d'Énergie (CEE)</li>
                    <li>• Aides locales et régionales</li>
                    <li>• Eco-PTZ</li>
                    <li>• Calcul automatique du montant total</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">6. Solutions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Catalogue produits ISOWATT</li>
                    <li>• Panneaux photovoltaïques</li>
                    <li>• Pompes à chaleur</li>
                    <li>• Solutions d'isolation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">7. Simulation financière</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Génération devis détaillé</li>
                    <li>• Reste à charge après aides</li>
                    <li>• ROI sur 10, 15 et 25 ans</li>
                    <li>• Export PDF professionnel</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">8. Validation</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Envoi automatique par email</li>
                    <li>• Signature uniques des documents</li>
                    <li>• Stockage sécurisé des documents</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Fonctionnalités incluses</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Mini CRM pour gestion des leads</li>
                  <li>• Agenda intégré pour rendez-vous</li>
                  <li>• Stockage documents sécurisé</li>
                  <li>• Synchronisation multi-appareils</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Détail estimation</h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Interface 8 écrans</td>
                      <td className="py-2 text-right font-semibold">4,000€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Formulaires intelligents</td>
                      <td className="py-2 text-right font-semibold">1,500€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Calculs énergétiques</td>
                      <td className="py-2 text-right font-semibold">2,500€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Vérification aides</td>
                      <td className="py-2 text-right font-semibold">2,000€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Génération PDF</td>
                      <td className="py-2 text-right font-semibold">1,000€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Mini CRM + Agenda</td>
                      <td className="py-2 text-right font-semibold">2,500€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Infrastructure cloud</td>
                      <td className="py-2 text-right font-semibold">1,500€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Tests & déploiement</td>
                      <td className="py-2 text-right font-semibold">2,000€</td>
                    </tr>
                    <tr className="border-t-2 border-gray-300">
                      <td className="py-3 font-bold text-gray-900">TOTAL</td>
                      <td className="py-3 text-right font-bold text-xl text-green-600">15,000€</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-4">
                  40 jours de développement à 375€/jour
                </p>
              </div>

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
                <p className="text-sm text-gray-700">
                  L'offre Parcours de Vente inclut le développement du CRM Complet à 0€.
                </p>
              </div>
            </div>
          </div>

          {/* Right: CRM Complet */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-6">
              <h2 className="text-2xl font-bold">CRM Complet</h2>
              <p className="text-blue-100 mt-1">Plateforme de gestion complète</p>
              <div className="mt-4 text-4xl font-bold">21,000€</div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Modules inclus</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Module Admin</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Base de données robuste avec schéma optimisé</li>
                    <li>• Dashboard admin avec statistiques globales</li>
                    <li>• Gestion des utilisateurs (création, modification, suppression)</li>
                    <li>• Attribution et gestion des rôles (Admin, Commercial, Directeur)</li>
                    <li>• Gestion et filtrage par région (LYON, OCCITANIE, BRETAGNE...)</li>
                    <li>• Configuration des états Lead/Business personnalisables</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Module Leads (Prospect)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Vue d'ensemble avec recherche avancée (nom, téléphone, ville...)</li>
                    <li>• État du prospect personnalisable (R1, Locataire, Hors critère...)</li>
                    <li>• Source du lead personnalisable (Digital Cover, Google Ads...)</li>
                    <li>• Fiche détaillée avec toutes les informations du prospect</li>
                    <li>• Gestion documentaire avec dossiers nominatifs</li>
                    <li>• Informations du projet client éditables</li>
                    <li>• Historique complet des modifications</li>
                    <li>• Système de commentaires</li>
                    <li>• Date d'ajout et modification (visible Admin)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Module Agenda + Google</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Prise de rendez-vous intégrée Lead/Business</li>
                    <li>• Synchronisation Google Calendar</li>
                    <li>• Système de blocage : pas de nouveau RDV tant que le précédent n'est pas statué</li>
                    <li>• Statuts personnalisables (Planifié, Réalisé, Annulé, Reporté...)</li>
                    <li>• Notifications e-mail automatiques</li>
                    <li>• Vue d'équipe pour directeurs d'agence</li>
                    <li>• Filtrage par commercial, statut, date</li>
                    <li>• Tableau de bord des performances par équipe</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Module Produits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Catalogue produits complet ISOWATT</li>
                    <li>• Gestion des prix et marges</li>
                    <li>• Catégories et tags personnalisables</li>
                    <li>• Fiches techniques détaillées</li>
                    <li>• Upload d'images et documentation</li>
                    <li>• Recherche et filtres avancés</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Module Business (Affaires Signées)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Vue d'ensemble avec états personnalisables (VT EN COURS, Facturé, Signé...)</li>
                    <li>• État des paiements personnalisable (Facturé, En attente, Payé...)</li>
                    <li>• Conversion Lead vers Business avec BDC obligatoire</li>
                    <li>• Gestion des intervenants multiples (commerciaux, techniciens...)</li>
                    <li>• Page détaillée avec informations complètes du client</li>
                    <li>• Upload de fichiers avec dossiers nominatifs</li>
                    <li>• Historique des commentaires spécifiques</li>
                    <li>• Édition des états et informations</li>
                    <li>• Suivi financier complet</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Fonctionnalités transversales</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Filtrage par région pour tous les modules</li>
                  <li>• Notifications en temps réel</li>
                  <li>• Exports personnalisés (Excel, PDF)</li>
                  <li>• API REST complète</li>
                  <li>• Système de rôles et permissions</li>
                  <li>• Multi-utilisateurs simultanés</li>
                  <li>• Logs et audit complet</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Détail estimation</h3>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Module Admin (BDD + Dashboard)</td>
                      <td className="py-2 text-right font-semibold">4,500€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Module Leads complet</td>
                      <td className="py-2 text-right font-semibold">5,000€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Module Agenda + Google Sync</td>
                      <td className="py-2 text-right font-semibold">3,500€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Module Produits</td>
                      <td className="py-2 text-right font-semibold">2,500€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Module Business</td>
                      <td className="py-2 text-right font-semibold">4,000€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Système de rôles et permissions</td>
                      <td className="py-2 text-right font-semibold">1,500€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 text-gray-600">Tests & déploiement</td>
                      <td className="py-2 text-right font-semibold">2,000€</td>
                    </tr>
                    <tr className="border-t-2 border-gray-300">
                      <td className="py-3 font-bold text-gray-900">TOTAL</td>
                      <td className="py-3 text-right font-bold text-xl text-blue-600">21,000€</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-4">
                  56 jours de développement à 375€/jour
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-700">
            <strong>Note :</strong> Les deux solutions sont complémentaires. Le Parcours de Vente offre une application terrain pour les commerciaux,
            tandis que le CRM Complet offre une plateforme de gestion back-office complète avec 6 modules professionnels.
          </p>
          <div className="mt-6">
            <Link href="/roadmap">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Retour au comparatif
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

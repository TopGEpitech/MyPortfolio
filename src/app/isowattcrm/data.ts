export interface Lead {
  id: number
  name: string
  email: string
  phone: string
  status: "Nouveau" | "Contacté" | "Qualifié" | "Proposition"
  source: string
  date: string
  score: number
}

export interface Business {
  id: number
  name: string
  client: string
  email: string
  status: "Devis" | "Planifié" | "En cours" | "Terminé"
  value: string
  progress: number
  startDate: string
  expectedEnd: string
  type: string
}

export const leads: Lead[] = [
  {
    id: 1,
    name: "Marie Dubois",
    email: "marie.dubois@email.com",
    phone: "06 12 34 56 78",
    status: "Nouveau",
    source: "Site Web",
    date: "2024-01-15",
    score: 85,
  },
  {
    id: 2,
    name: "Pierre Martin",
    email: "pierre.martin@email.com",
    phone: "06 98 76 54 32",
    status: "Contacté",
    source: "Référence",
    date: "2024-01-14",
    score: 72,
  },
  {
    id: 3,
    name: "Sophie Laurent",
    email: "sophie.laurent@email.com",
    phone: "06 11 22 33 44",
    status: "Qualifié",
    source: "Publicité",
    date: "2024-01-13",
    score: 91,
  },
  {
    id: 4,
    name: "Jean Dupont",
    email: "jean.dupont@email.com",
    phone: "06 55 66 77 88",
    status: "Proposition",
    source: "Site Web",
    date: "2024-01-12",
    score: 88,
  },
]

export const businesses: Business[] = [
  {
    id: 1,
    name: "Installation Dubois",
    client: "Marie Dubois",
    email: "marie.dubois@email.com",
    status: "En cours",
    value: "15 000€",
    progress: 65,
    startDate: "2024-01-10",
    expectedEnd: "2024-02-15",
    type: "Installation résidentielle",
  },
  {
    id: 2,
    name: "Projet Martin Entreprise",
    client: "Pierre Martin",
    email: "pierre.martin@email.com",
    status: "Planifié",
    value: "45 000€",
    progress: 25,
    startDate: "2024-02-01",
    expectedEnd: "2024-03-30",
    type: "Installation commerciale",
  },
  {
    id: 3,
    name: "Rénovation Laurent",
    client: "Sophie Laurent",
    email: "sophie.laurent@email.com",
    status: "Terminé",
    value: "12 500€",
    progress: 100,
    startDate: "2023-12-01",
    expectedEnd: "2024-01-05",
    type: "Maintenance",
  },
  {
    id: 4,
    name: "Installation Dupont",
    client: "Jean Dupont",
    email: "jean.dupont@email.com",
    status: "Devis",
    value: "22 000€",
    progress: 10,
    startDate: "2024-02-15",
    expectedEnd: "2024-03-20",
    type: "Installation résidentielle",
  },
]

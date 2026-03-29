export type Locale = "en" | "fr"

export interface Listing {
  id: string
  url: string
  addedAt: string
}

export interface ResumeData {
  name: string
  title: string
  location: string
  email: string
  whatsapp: string
  phone: string
  portfolio: string
  linkedin: string
  summary: string
  skills: string[]
  languages: { name: string; level: string }[]
  experience: {
    company: string
    role: string
    period: string
    location: string
    description: string[]
    stack?: string[]
  }[]
  education: {
    school: string
    degree: string
    period: string
    location?: string
  }[]
}

export const resumeData: Record<Locale, ResumeData> = {
  en: {
    name: "Younes Kadi",
    title: "FullStack Developer - TypeScript & JavaScript",
    location: "France, Lyon",
    email: "younes.kadi@epitech.eu",
    whatsapp: "+32 486 18 85 01",
    phone: "+33 7 81 36 78 76",
    portfolio: "https://www.youneskad.dev/",
    linkedin: "https://www.linkedin.com/in/younes-k-b2927b261/",
    summary:
      "Lead Developer and FullStack Engineer focused on TypeScript and JavaScript.\nLooking for full remote opportunities.\nI build and ship CRM platforms, sales apps, and multi-tenant SaaS products from architecture to production.\nMy day-to-day stack includes Angular, Next.js, Node.js (AdonisJS, Express), with deployments on GCP and AWS using Docker, CI/CD, and Terraform.\nI've lived and worked across Morocco, Belgium, the UK, and France.",
    skills: [
      "TypeScript",
      "JavaScript",
      "Angular",
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express",
      "AdonisJS",
      "Lucid ORM",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "React Query",
      "React Hook Form",
      "Zod",
      "RxJS",
      "NgRx",
      "MUI",
      "KrakenD",
      "Auth0",
      "JWT / OAuth",
      "Google Cloud (Cloud Run)",
      "AWS",
      "Docker",
      "Terraform",
      "MinIO / S3",
      "Turborepo",
      "GitHub Actions",
      "ESLint / Prettier",
      "Jest",
      "React Testing Library",
    ],
    languages: [
      { name: "English", level: "Native / Bilingual" },
      { name: "Arabic", level: "Native / Bilingual" },
      { name: "French", level: "Native / Bilingual" },
      { name: "Russian", level: "Elementary" },
    ],
    experience: [
      {
        company: "FREE ENERGIE",
        role: "Lead Developer - TypeScript & JavaScript",
        period: "Sep 2022 - Present",
        location: "Lyon, France",
        description: [
          "Lead architecture and development of a CRM (Angular / Node.js) used by thousands of clients and collaborators.",
          "Define architecture, code standards, quality (tests, CI/CD), security, and observability.",
          "Design and deliver a Sales application (Next.js + AdonisJS) to accelerate business interactions and revenue.",
          "Establish coding conventions, lint/test standards, code reviews, and unified PR templates.",
          "Implement CI/CD pipelines, feature flags, canary releases, performance metrics, and alerting.",
          "Manage RBAC, secrets management, and endpoint hardening for security.",
          "Set up structured logs, traces, and product/tech dashboards for observability.",
          "Coach team through pair programming and impact-oriented agile rituals.",
        ],
        stack: [
          "Angular",
          "React",
          "RxJS",
          "NgRx",
          "Tailwind CSS",
          "MUI",
          "Node.js",
          "Express",
          "AdonisJS",
          "TypeScript",
          "MongoDB",
          "Redis",
          "KrakenD",
          "Google Cloud",
          "AWS",
          "Docker",
          "GitHub Actions",
        ],
      },
      {
        company: "K-DEV Solutions",
        role: "Chief Executive Officer",
        period: "Jul 2025 - Present",
        location: "Remote",
        description: [
          "Drive digital transformation for businesses by designing and building custom websites and applications to modernize operations.",
        ],
      },
      {
        company: "Blazing Boost Srl",
        role: "Esport Coach",
        period: "Nov 2020 - Nov 2022",
        location: "Remote",
        description: [
          "Coached World of Warcraft players to unlock their full potential through strategic advice and performance optimization.",
          "Helped players refine techniques, adopt winning tactics, and maximize in-game performance.",
        ],
      },
      {
        company: "mben dev",
        role: "FullStack Node.js & React.js Developer",
        period: "May 2022 - Jun 2022",
        location: "Lyon, France",
        description: [
          "Collaborated on digitalization projects using the MERN stack.",
          "Built dynamic user interfaces with React and robust backends with Node.js.",
        ],
        stack: ["MongoDB", "Express", "React", "Node.js"],
      },
    ],
    education: [
      {
        school: "OpenClassRooms",
        degree: "Master's Degree - Expert FullStack",
        period: "2022 - 2025",
        location: "Paris, France",
      },
      {
        school: "Epitech European Institute Of Technology",
        degree: "Bac +3 - FullStack Web Developer",
        period: "2020 - 2022",
        location: "Lyon, France",
      },
    ],
  },
  fr: {
    name: "Younes Kadi",
    title: "FullStack Developer - TypeScript & JavaScript",
    location: "France, Lyon",
    email: "younes.kadi@epitech.eu",
    whatsapp: "+32 486 18 85 01",
    phone: "+33 7 81 36 78 76",
    portfolio: "https://www.youneskad.dev/",
    linkedin: "https://www.linkedin.com/in/younes-k-b2927b261/",
    summary:
      "Lead Developer et Ingenieur FullStack specialise en TypeScript et JavaScript.\nA la recherche d'opportunites full remote.\nJe concois et livre des plateformes CRM, des apps de vente et des produits SaaS multi-tenant de l'architecture jusqu'a la mise en production.\nAu quotidien, je travaille avec Angular, Next.js, Node.js (AdonisJS, Express), et je deploie sur GCP et AWS avec Docker, CI/CD et Terraform.\nJ'ai vecu et travaille entre le Maroc, la Belgique, le Royaume-Uni et la France.",
    skills: [
      "TypeScript",
      "JavaScript",
      "Angular",
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Express",
      "AdonisJS",
      "Lucid ORM",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "React Query",
      "React Hook Form",
      "Zod",
      "RxJS",
      "NgRx",
      "MUI",
      "KrakenD",
      "Auth0",
      "JWT / OAuth",
      "Google Cloud (Cloud Run)",
      "AWS",
      "Docker",
      "Terraform",
      "MinIO / S3",
      "Turborepo",
      "GitHub Actions",
      "ESLint / Prettier",
      "Jest",
      "React Testing Library",
    ],
    languages: [
      { name: "Anglais", level: "Natif / Bilingue" },
      { name: "Arabe", level: "Natif / Bilingue" },
      { name: "Francais", level: "Natif / Bilingue" },
      { name: "Russe", level: "Elementaire" },
    ],
    experience: [
      {
        company: "FREE ENERGIE",
        role: "Lead Developer - TypeScript & JavaScript",
        period: "Sep 2022 - Aujourd'hui",
        location: "Lyon, France",
        description: [
          "Pilotage et architecture d'un CRM (Front Angular / Back Node.js) utilise par des milliers de clients et collaborateurs.",
          "Definition de l'architecture, des standards de code, de la qualite (tests, CI/CD), de la securite et de l'observabilite.",
          "Conception et livraison d'une application Sales (Next.js + AdonisJS) pour accelerer les interactions commerciales et le chiffre d'affaires.",
          "Mise en place des conventions de code, lint/test, revues de code et template PR unifie.",
          "Implementation CI/CD, feature flags, canary, metriques de performance et alerting.",
          "Gestion RBAC, secrets management et durcissement des endpoints.",
          "Mise en place de logs structures, traces et dashboards produit/tech.",
          "Coaching via pair programming et rituels agiles orientes impact.",
        ],
        stack: [
          "Angular",
          "React",
          "RxJS",
          "NgRx",
          "Tailwind CSS",
          "MUI",
          "Node.js",
          "Express",
          "AdonisJS",
          "TypeScript",
          "MongoDB",
          "Redis",
          "KrakenD",
          "Google Cloud",
          "AWS",
          "Docker",
          "GitHub Actions",
        ],
      },
      {
        company: "K-DEV Solutions",
        role: "Directeur General",
        period: "Jul 2025 - Aujourd'hui",
        location: "Remote",
        description: [
          "Accompagnement de la transformation digitale des entreprises en concevant et developpant des sites web et applications sur-mesure pour moderniser leurs metiers.",
        ],
      },
      {
        company: "Blazing Boost Srl",
        role: "Coach Esport",
        period: "Nov 2020 - Nov 2022",
        location: "Remote",
        description: [
          "Coaching de joueurs World of Warcraft pour liberer leur plein potentiel grace a des conseils strategiques et l'optimisation de la performance.",
          "Aide aux joueurs pour affiner leurs techniques, adopter des tactiques gagnantes et maximiser leurs performances en jeu.",
        ],
      },
      {
        company: "mben dev",
        role: "Developpeur FullStack Node.js & React.js",
        period: "Mai 2022 - Juin 2022",
        location: "Lyon, France",
        description: [
          "Collaboration sur des projets de numerisation en utilisant la pile MERN.",
          "Creation d'interfaces utilisateur dynamiques avec React et de back-ends robustes avec Node.js.",
        ],
        stack: ["MongoDB", "Express", "React", "Node.js"],
      },
    ],
    education: [
      {
        school: "OpenClassRooms",
        degree: "Master - Expert FullStack",
        period: "2022 - 2025",
        location: "Paris, France",
      },
      {
        school: "Epitech European Institute Of Technology",
        degree: "Bac +3 - Developpeur Web FullStack",
        period: "2020 - 2022",
        location: "Lyon, France",
      },
    ],
  },
}

export const uiLabels: Record<Locale, Record<string, string>> = {
  en: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    education: "Education",
    languages: "Languages",
    contact: "Contact",
    downloadPdf: "Download PDF",
    switchLang: "FR",
  },
  fr: {
    about: "Profil",
    experience: "Experience",
    skills: "Competences",
    education: "Formation",
    languages: "Langues",
    contact: "Contact",
    downloadPdf: "Telecharger PDF",
    switchLang: "EN",
  },
}

"use client"

import { useState } from "react"
import { resumeData, type Locale } from "@/app/cv/lib/resume-data"
import { ResumeHeader } from "@/app/cv/components/resume-header"
import {
  AboutSection,
  ExperienceSection,
  SkillsSection,
  EducationSection,
  LanguagesSection,
} from "@/app/cv/components/resume-sections"
import { ListingsSection } from "@/app/cv/components/listings-section"

export function CvContent() {
  const [locale, setLocale] = useState<Locale>("en")
  const data = resumeData[locale]

  const toggleLocale = () => {
    setLocale((prev) => (prev === "en" ? "fr" : "en"))
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <ResumeHeader data={data} locale={locale} onToggleLocale={toggleLocale} />
        <div className="flex flex-col gap-12 pt-10">
          <AboutSection data={data} locale={locale} />
          <ExperienceSection data={data} locale={locale} />
          <SkillsSection data={data} locale={locale} />
          <EducationSection data={data} locale={locale} />
          <LanguagesSection data={data} locale={locale} />
        </div>
        <div className="mt-12 print:hidden">
          <ListingsSection />
        </div>
      </div>
    </main>
  )
}

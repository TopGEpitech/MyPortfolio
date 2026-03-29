import type { ResumeData, Locale } from "@/app/cv/lib/resume-data"
import { uiLabels } from "@/app/cv/lib/resume-data"
import { Briefcase, GraduationCap, Globe, Code } from "lucide-react"

interface SectionProps {
  data: ResumeData
  locale: Locale
}

function SectionTitle({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-xl font-bold tracking-tight text-foreground mb-6">
      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      {children}
    </h2>
  )
}

export function AboutSection({ data, locale }: SectionProps) {
  const labels = uiLabels[locale]
  return (
    <section aria-labelledby="about-heading">
      <SectionTitle icon={Briefcase}>{labels.about}</SectionTitle>
      <div className="flex flex-col gap-1 text-muted-foreground leading-relaxed">
        {data.summary.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </section>
  )
}

export function ExperienceSection({ data, locale }: SectionProps) {
  const labels = uiLabels[locale]
  return (
    <section aria-labelledby="experience-heading">
      <SectionTitle icon={Briefcase}>{labels.experience}</SectionTitle>
      <div className="flex flex-col gap-8">
        {data.experience.map((job, i) => (
          <article key={i} className="group relative flex gap-6">
            <div className="hidden md:flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-primary shrink-0 mt-1.5" />
              {i < data.experience.length - 1 && (
                <div className="w-px flex-1 bg-border" />
              )}
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-sm font-medium text-primary">{job.company}</p>
                </div>
                <div className="text-xs text-muted-foreground shrink-0">
                  <span>{job.period}</span>
                  <span className="mx-1.5">{"/"}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <ul className="flex flex-col gap-1.5 mt-1">
                {job.description.map((item, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {job.stack && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function SkillsSection({ data, locale }: SectionProps) {
  const labels = uiLabels[locale]
  return (
    <section aria-labelledby="skills-heading">
      <SectionTitle icon={Code}>{labels.skills}</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export function EducationSection({ data, locale }: SectionProps) {
  const labels = uiLabels[locale]
  return (
    <section aria-labelledby="education-heading">
      <SectionTitle icon={GraduationCap}>{labels.education}</SectionTitle>
      <div className="flex flex-col gap-4">
        {data.education.map((edu, i) => (
          <div key={i} className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between">
            <div>
              <h3 className="text-base font-semibold text-foreground">{edu.school}</h3>
              <p className="text-sm text-muted-foreground">{edu.degree}</p>
              {edu.location && (
                <p className="text-xs text-muted-foreground">{edu.location}</p>
              )}
            </div>
            <span className="text-xs text-muted-foreground shrink-0">{edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function LanguagesSection({ data, locale }: SectionProps) {
  const labels = uiLabels[locale]
  return (
    <section aria-labelledby="languages-heading">
      <SectionTitle icon={Globe}>{labels.languages}</SectionTitle>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {data.languages.map((lang, i) => (
          <div key={i} className="rounded-md border border-border bg-secondary p-3">
            <p className="text-sm font-semibold text-foreground">{lang.name}</p>
            <p className="text-xs text-muted-foreground">{lang.level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

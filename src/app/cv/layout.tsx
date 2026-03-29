import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Younes Kad - Lead Developer TypeScript & JavaScript",
  description:
    "Resume / CV of Younes Kad, Lead Developer specializing in TypeScript & JavaScript. FullStack Web Developer based in Lyon, France.",
}

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        "--background": "0 0% 100%",
        "--foreground": "222 47% 11%",
        "--card": "0 0% 100%",
        "--card-foreground": "222 47% 11%",
        "--primary": "221 83% 53%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "214 32% 91%",
        "--secondary-foreground": "222 47% 11%",
        "--muted": "214 32% 91%",
        "--muted-foreground": "215 16% 47%",
        "--accent": "214 32% 91%",
        "--accent-foreground": "222 47% 11%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "214 32% 91%",
        "--input": "214 32% 91%",
        "--ring": "221 83% 53%",
        "--radius": "0.5rem",
      } as React.CSSProperties}
      className="min-h-screen bg-white font-sans antialiased"
    >
      {children}
    </div>
  )
}

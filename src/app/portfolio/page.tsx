"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Navbar from "@/app/sections/Navbar"

interface Project {
    id: string
    name: string
    preview: string
    url: string
    description: string
}

function JuicyCarousel() {
    const images = Array.from({ length: 6 }, (_, i) => `/portfolio/juicy-lucy/image${i + 1}.png`)
    const [current, setCurrent] = useState(0)
    const prev = () => setCurrent((current + images.length - 1) % images.length)
    const next = () => setCurrent((current + 1) % images.length)

    return (
        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            <Image
                src={images[current]}
                alt={`Juicy Lucy ${current + 1}`}
                fill
                className="object-cover"
            />
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={next}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    )
}

export default function Component() {
    const [projects] = useState<Project[]>([
        {
            id: "1",
            name: "Juicy Lucy Club Pattaya",
            preview: "/portfolio/juicy-lucy/image1.jpg",
            url: "#",
            description: "A mouth-watering burger packed with cheese and flavor.",
        },
        {
            id: "2",
            name: "Task Management App",
            preview: "/task-management-dashboard-preview.png",
            url: "#",
            description: "Organize your tasks and boost productivity with this intuitive app.",
        },
        {
            id: "3",
            name: "Portfolio Website",
            preview: "/portfolio-website-preview.png",
            url: "#",
            description: "A personal showcase of projects and skills, built with Next.js.",
        },
    ])

    const handleProjectClick = (url: string) => {
        if (url !== "#") window.open(url, "_blank")
    }

    return (
        <div className="min-h-screen portfolio-animated-bg">
            <div className="portfolio-nav-sticky">
                <Navbar />
            </div>

            <main className="container mx-auto px-6 py-16">
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        Portfolio
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-light text-slate-300 mb-8 tracking-wide">
                        ผลงาน
                    </h2>
                    <div className="w-24 h-1 bg-blue-400 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            className="group cursor-pointer portfolio-project-card"
                            onClick={() => handleProjectClick(project.url)}
                        >
                            <div className="relative overflow-hidden rounded-xl p-6 transition-all duration-500 ease-in-out transform hover:scale-105">
                                <div className="absolute inset-0 bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-xl group-hover:border-blue-400/70 transition-all duration-300" />
                                <div className="absolute inset-0 rounded-xl portfolio-project-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Carousel on first project, static image otherwise */}
                                {i === 0 ? (
                                    <JuicyCarousel />
                                ) : (
                                    <div className="relative aspect-video mb-6 rounded-lg overflow-hidden z-10 border border-slate-700/30 group-hover:border-blue-500/50 transition-colors duration-300">
                                        <Image
                                            src={project.preview}
                                            alt={`${project.name} preview`}
                                            width={800}
                                            height={450}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                        />
                                    </div>
                                )}

                                <div className="relative z-10 text-center">
                                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 line-clamp-2 px-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

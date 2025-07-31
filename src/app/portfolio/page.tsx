"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, Eye } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Project {
    id: string
    name: string
    preview: string
    url: string
    description: string
    status?: string
}

function JuicyCarousel() {
    const images = Array.from({ length: 6 }, (_, i) => `/portfolio/juicy-lucy/image${i + 1}.png`)
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((current + images.length - 1) % images.length)
    const next = () => setCurrent((current + 1) % images.length)

    return (
        <div className="relative w-full aspect-video overflow-hidden rounded-lg group">
            <Image
                src={images[current] || "/placeholder.svg"}
                alt={`Juicy Lucy ${current + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
            </div>
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    prev()
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    next()
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
                <ChevronRight size={20} />
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
            url: "https://juicylucy-pattaya-b6sd-git-main-topgepitechs-projects.vercel.app/",
            description: "A mouth-watering burger packed with cheese and flavor.",
            status: "Live",
        },
        {
            id: "2",
            name: "Projet CTRL Belgium",
            preview: "/portfolio/projet_ctrl.png",
            url: "https://projet-ctrlkdev-285vcnm3x-topgdev-4465s-projects.vercel.app/",
            description: "A Belgian collective organizing techno events across the country.",
            status: "Live",
        },
        {
            id: "3",
            name: "AMAC 68 France",
            preview: "/portfolio/AMAC.png",
            url: "https://amac68-9r83.vercel.app/",
            description: "AMAC is an association empowers individuals by fostering skill development",
            status: "Live",
        },
        {
            id: "4",
            name: "Ma Prime France",
            preview: "/portfolio/primefrance.png",
            url: "https://maprimefrance.fr/",
            description: "Lead Generator & Form. Optimized CEO/ Google Ads",
            status: "Live",
        },
        {
            id: "7",
            name: "Your project here! ",
            preview: "/portfolio/img_2.png",
            url: "https://wa.me/+32486188501",
            description: "Let in touch to learn more.",
            status: "Waiting for you"
        },
        {
            id: "7",
            name: "Contact me right now !",
            preview: "/portfolio/imgx.png",
            url: "https://wa.me/+32486188501",
            description: "Let in touch to learn more.",
            status: "Waiting for you"
        },

    ])

    const handleProjectClick = (url: string) => {
        if (url !== "#") window.open(url, "_blank")
    }

    return (
        <div className="min-h-screen portfolio-animated-bg">
            <main className="container mx-auto px-6 py-16">
                <Link href="/">
                    <Button variant="outline" className="mb-8 bg-blue-600/20 border-blue-400 text-blue-300 hover:bg-blue-600/30">
                        🏠 BACK HOME
                    </Button>
                </Link>

                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">Portfolio</h1>
                    <h2 className="text-3xl md:text-4xl font-light text-slate-300 mb-8 tracking-wide">Working in Progress..</h2>
                    <div className="w-24 h-1 bg-blue-400 mx-auto" />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <Card
                            key={project.id}
                            className="group cursor-pointer bg-slate-800/60 backdrop-blur-md border-slate-700/50 hover:border-blue-400/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
                            onClick={() => handleProjectClick(project.url)}
                        >
                            <CardHeader className="p-6 pb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <Badge variant="secondary" className="bg-green-600/20 text-green-400 border-green-500/30">
                                        {project.status}
                                    </Badge>
                                    <ExternalLink target="_blank" className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                                </div>

                                {/* Image avec overlay au hover */}
                                {i === 0 ? (
                                    <JuicyCarousel />
                                ) : (
                                    <div className="relative aspect-video rounded-lg overflow-hidden group/image">
                                        <Image
                                            src={project.preview || "/placeholder.svg"}
                                            alt={`${project.name} preview`}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Eye className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                )}
                            </CardHeader>

                            <CardContent className="p-6 pt-2">
                                <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors duration-300 mb-3">
                                    {project.name}
                                </CardTitle>
                                <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-4">
                                    {project.description}
                                </CardDescription>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full bg-blue-600/20 border-blue-400/50 text-blue-300 hover:bg-blue-600/30 hover:border-blue-400 transition-all duration-300"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleProjectClick(project.url)
                                    }}
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" target={"_blank"}/>
                                    Check the project
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}

"use client"

import ProgressBar from "./progress-bar"

interface LoadingScreenProps {
    title: string
    progress: number
}

export default function LoadingScreen({ title, progress }: LoadingScreenProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-4xl font-bold mb-8 text-yellow-400 drop-shadow-lg text-center">{title}</h1>
            <div className="w-full max-w-xl">
                <ProgressBar value={progress} max={100} />
            </div>
            <p className="mt-4 text-lg text-gray-300">{progress < 100 ? "Loading assets..." : "Game Ready!"}</p>
        </div>
    )
}

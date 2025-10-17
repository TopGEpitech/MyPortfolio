"use client"

import { cn } from "@/lib/utils"

interface ProgressBarProps {
    value: number
    max?: number
    className?: string
}

export default function ProgressBar({ value, max = 100, className }: ProgressBarProps) {
    const percentage = Math.max(0, Math.min(100, (value / max) * 100))
    const segments = Array.from({ length: 10 }, (_, i) => {
        const segmentPercentage = (i + 1) * 10
        return (
            <div
                key={i}
                className={cn(
                    "h-full transition-all duration-300 ease-out",
                    percentage >= segmentPercentage ? "bg-green-500" : "bg-gray-700",
                    i < 9 ? "border-r border-gray-800" : "", // Add segment dividers
                )}
                style={{ width: "10%" }}
            />
        )
    })

    return (
        <div
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
            className={cn(
                "relative w-full h-8 bg-gray-800 border-2 border-gray-900 rounded-md overflow-hidden shadow-lg",
                className,
            )}
        >
            <div className="absolute inset-0 flex" style={{ width: `${percentage}%` }}>
                {segments}
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white text-shadow-sm">
                {`${Math.round(percentage)}%`}
            </div>
        </div>
    )
}

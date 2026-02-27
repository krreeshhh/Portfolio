"use client"

import { motion } from "motion/react"

export default function SpotifyCardSkeleton() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ type: 'tween', duration: 0.4, delay: 0.25 }}
            className="w-[620px] mx-auto bg-card text-card-foreground border border-border rounded-2xl p-2 flex items-center justify-between gap-2"
        >
            <div className="flex justify-center items-center gap-4">
                {/* Album art skeleton */}
                <div className="h-14 w-14 rounded-lg bg-muted animate-pulse" />

                <div className="mr-2 space-y-2">
                    {/* Spotify label skeleton */}
                    <div className="flex gap-1 items-center">
                        <div className="h-3 w-3 rounded-full bg-muted animate-pulse" />
                        <div className="h-3 w-20 rounded bg-muted animate-pulse" />
                    </div>

                    {/* Song title skeleton */}
                    <div className="h-3.5 w-40 rounded bg-muted animate-pulse" />

                    {/* Artist name skeleton */}
                    <div className="h-3 w-32 rounded bg-muted animate-pulse" />
                </div>
            </div>

            {/* Play button skeleton */}
            <div className="shrink-0 mr-4">
                <div className="h-9 w-9 rounded-xl bg-muted animate-pulse" />
            </div>
        </motion.div>
    )
}

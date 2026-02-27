"use client"

import React, { useEffect, useState } from 'react'
import { Song } from '@/lib/spotify'
import Image from 'next/image'
import Link from 'next/link'
import { MusicPlayingAnimation } from './ui/music-playing-animation'
import { IconPlayerPlay } from '@tabler/icons-react'
import { motion } from "motion/react"
import { AnimationWrapper, childVariant } from './ui/animation-wrapper'

interface SpotifyCardClientProps {
  data: { song: Song | null; isPlaying: boolean } | null
}

export default function SpotifyCardClient({ data }: SpotifyCardClientProps) {
  const [song, setSong] = useState<Song | null>(data?.song ?? null)
  const [isPlaying, setIsPlaying] = useState(data?.isPlaying ?? false)
  const [status, setStatus] = useState<string>("Initializing...")

  useEffect(() => {
    const fetchSpotifyStatus = () => {
      setStatus("Fetching...")
      fetch("https://crish.vercel.app/api/spotify/status", {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        },
      })
        .then(res => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then(data => {
          if (data && data.song) {
            setIsPlaying(data.isPlaying)
            setSong(data.song)
            setStatus("Success")
          } else {
            setStatus("No data")
          }
        })
        .catch(err => {
          setStatus(`Error: ${err.message}`)
          console.error("Spotify: Fetch error:", err)
        })
    }

    // Fetch immediately on mount if no data or always for fresh data
    fetchSpotifyStatus()

    // Poll every 30 seconds for live updates
    const intervalId = setInterval(fetchSpotifyStatus, 30000)
    return () => clearInterval(intervalId)
  }, [])

  if (!song) {
    return (
      <AnimationWrapper>
        <motion.div
          variants={childVariant}
          className="w-full max-w-[620px] mx-auto h-18 bg-card text-card-foreground border border-border rounded-2xl p-4 flex items-center gap-2"
        >
          <p className="text-sm font-sans tracking-tight">
            No song data available
            <span className="text-[10px] opacity-50 ml-2">
              ({status})
            </span>
          </p>
        </motion.div>
      </AnimationWrapper>
    )
  }

  return (
    <AnimationWrapper>
      <motion.div
        variants={childVariant}
        className="w-full max-w-[620px] mx-auto bg-card text-card-foreground border border-border rounded-2xl p-2 flex items-center justify-between gap-2"
      >
        <div className="flex flex-1 items-center gap-3 overflow-hidden">
          <Image
            src={song.imageUrl}
            height={56}
            width={56}
            alt={song.title}
            className="rounded-lg shrink-0"
          />
          <div className='flex-1 min-w-0 mr-2'>
            <div className="flex gap-1 items-center">
              <Image
                src="/assets/spotify.svg"
                height={12}
                width={12}
                alt="Spotify Logo"
              />
              <p className="text-xs text-muted-foreground whitespace-nowrap">
                {isPlaying ? "Listening to" : "Last Played"}
              </p>
            </div>
            <Link
              href={song.externalLink}
              target="_blank"
              className="block font-sans tracking-tight font-medium truncate text-sm hover:text-green-500 hover:underline transition-colors duration-100"
            >
              {song.title}
            </Link>
            <p className="text-xs text-muted-foreground truncate">
              by {song.artists.join(", ")}
            </p>
          </div>
        </div>
        <div className='shrink-0'>
          {isPlaying ? (
            <div className="mr-4">
              <MusicPlayingAnimation />
            </div>
          ) : (
            <Link
              href={song.externalLink}
              className="bg-accent/30 hover:bg-accent/50 btn-inner-shadow transition-colors rounded-xl p-2 flex items-center justify-center mr-4"
            >
              <IconPlayerPlay size={18} className="text-white" stroke={2} />
            </Link>
          )}
        </div>
      </motion.div>
    </AnimationWrapper>
  )
}
import { Suspense } from 'react'
import { headers } from 'next/headers'
import { IconLoader2 } from '@tabler/icons-react'
import SpotifyCardClient from './SpotifyCardClient'
import { Song } from '@/lib/spotify'

interface SpotifyStatusResponse {
  song: Song | null
  isPlaying: boolean
  played_at?: string // Optional timestamp for last played
}

import { getSpotifyStatus as getStatus } from '@/lib/spotify'

async function getSpotifyStatus() {
  try {
    const data = await getStatus();
    return data;
  } catch (err) {
    console.error('Failed to fetch spotify status:', err)
    return null
  }
}

async function SpotifyContent() {
  const data = await getSpotifyStatus()

  return <SpotifyCardClient data={data} />
}

export default function SpotifyCard() {
  return (
    <div className="mt-8 mb-4 px-4 md:px-0">
      <Suspense fallback={<div className='w-full max-w-[620px] mx-auto h-18 bg-card text-card-foreground border border-border rounded-2xl p-4 flex items-center gap-2'>
        <IconLoader2 className='size-5 text-neutral-600 dark:text-neutral-300 animate-spin' />
      </div>}>
        <SpotifyContent />
      </Suspense>
    </div>
  )
}
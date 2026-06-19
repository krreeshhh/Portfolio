"use client"

import { motion } from "motion/react"
import { ActivityCalendar, type Activity } from 'react-activity-calendar'

import { childVariant } from './ui/animation-wrapper'

import { useTheme } from "next-themes"

interface GithubGraphClientProps {
  data: Activity[] | null
}

export function GithubGraphClient({ data }: GithubGraphClientProps) {
  const { resolvedTheme } = useTheme()
  const colorScheme = resolvedTheme === 'light' ? 'light' : 'dark'

  return (
    <div className='flex flex-col font-sans'>
      <motion.h2
        variants={childVariant}
        className='text-3xl md:text-4xl mt-4 mb-4 font-bold font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-700 dark:to-white'
      >
        Github
      </motion.h2>
      <motion.div variants={childVariant}>
        {!data || data.length === 0 ? (
          <p className='my-8 text-muted-foreground'>
            No GitHub contribution data available.
          </p>
        ) : (
          <div
            className="overflow-x-auto"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style>
              {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
            </style>
            <ActivityCalendar
              data={data}
              blockSize={9.5}
              blockMargin={2}
              fontSize={12}
              colorScheme={colorScheme}
              theme={{
                light: ['#e5e5e5', '#bdbdbd', '#8f8f8f', '#5f5f5f', '#111111'],
                dark: ['#161616', '#404040', '#737373', '#a3a3a3', '#ffffff'],
              }}
            />
          </div>
        )}
      </motion.div>
    </div>
  )
}

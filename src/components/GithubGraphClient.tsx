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
              colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
              theme={{
                light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
            />
          </div>
        )}
      </motion.div>
    </div>
  )
}
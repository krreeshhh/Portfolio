"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { IconBrandGithub, IconBrandTelegram, IconBrandLinkedin, IconBrandInstagram, IconMail } from '@tabler/icons-react'
import { SiPeerlist } from "react-icons/si"
import { playTapSound } from '@/lib/audio'

const CTA = () => {
  return (
    <div 
      className='my-12 p-8 rounded-3xl border border-border bg-card text-card-foreground shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_16px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_16px_rgba(0,0,0,0.2)] transition-colors duration-300' 
      id='contact'
    >
      <h2 className='text-2xl md:text-3xl font-sans font-bold tracking-tight mb-2 text-neutral-900 dark:text-neutral-100'>
        Let&apos;s build something that doesn&apos;t end up in the GitHub graveyard.
      </h2>
      <p className='text-sm text-neutral-500 dark:text-neutral-400 my-1 leading-relaxed font-normal'>
        Freelance, full-time, or just vibing with an idea—I&apos;m all ears.
      </p>
      <div className='flex justify-start flex-wrap gap-2.5 mt-6'>
        <IconButton href={'mailto:krishnaprasath.7x@gmail.com'} ariaLabel={'Email'}>
          <IconMail className='h-5 w-5' />
        </IconButton>
        <IconButton href={'https://krreeshhh.t.me/'} ariaLabel={'Telegram'}>
          <IconBrandTelegram className='h-5 w-5' />
        </IconButton>
        <IconButton href={'https://www.linkedin.com/in/krishnaprasath-r/'} ariaLabel={'LinkedIn'}>
          <IconBrandLinkedin className='h-5 w-5' />
        </IconButton>
        <IconButton href={'https://peerlist.io/krishnaprasath'} ariaLabel={'Peerlist'}>
          <SiPeerlist className='h-5 w-5' />
        </IconButton>
        <IconButton href={'https://github.com/krreeshhh'} ariaLabel={'GitHub'}>
          <IconBrandGithub className='h-5 w-5' />
        </IconButton>
        <IconButton href={'https://www.instagram.com/krreeshhh/'} ariaLabel={'Instagram'}>
          <IconBrandInstagram className='h-5 w-5' />
        </IconButton>
      </div>
    </div>
  )
}

const IconButton = ({ href, ariaLabel, children }: { href: string, ariaLabel: string, children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 500, damping: 18 }}
      onMouseEnter={() => playTapSound('light')}
      onClick={() => playTapSound('click')}
    >
      <Link 
        href={href} 
        target='_blank' 
        aria-label={ariaLabel} 
        className='block rounded-xl border border-border p-2.5 bg-white/40 dark:bg-neutral-800/20 backdrop-blur-xs transition-colors duration-150 hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
      >
        <span className='text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-150'>
          {children}
        </span>
      </Link>
    </motion.div>
  )
}

export default CTA


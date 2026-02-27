"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { IconBrandInstagram, IconBrandLinkedin, IconBrandGithub, IconBrandTwitter, IconMail } from '@tabler/icons-react'
import { SiPeerlist } from 'react-icons/si'

type LinkItem = { label: string; href: string; icon: React.ReactNode }

const links: LinkItem[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/_tokitoooo_', icon: <IconBrandInstagram className='size-4' /> },
  { label: 'Twitter', href: 'https://x.com/_krishhhh_', icon: <IconBrandTwitter className='size-4' /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krishna-prasath-r/', icon: <IconBrandLinkedin className='size-4' /> },
  { label: 'GitHub', href: 'https://github.com/Tokittoo', icon: <IconBrandGithub className='size-4' /> },
  { label: 'Peerlist', href: 'https://peerlist.io/krishnaprasath', icon: <SiPeerlist className='size-4' /> },
  { label: 'Email', href: 'https://mailto:R.Krishna.Prasath@protonmail.com', icon: <IconMail className='size-4' /> }
]

export default function LinksPage() {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 20,
      transition: { type: 'tween', duration: 0.3 }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'tween', duration: 0.3 }
    }
  }

  const parentVariant = {
    hidden: {},
    show: {
      transition: { duration: 0.3, staggerChildren: 0.05 }
    }
  }

  return (
    <main className='min-h-[calc(100dvh-0px)] bg-background flex items-start justify-center px-6 pt-16 pb-6' style={{ fontFamily: 'General Sans, sans-serif' }}>
      <motion.div initial={'hidden'} animate={'show'} variants={parentVariant} className='w-full max-w-md scale-105 md:scale-110'>
        <motion.div variants={childVariant} className='mb-4'>
          <Link href='/' className='inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground rounded-lg border border-foreground/10 px-3 py-1.5 bg-background/50 backdrop-blur-sm transition-colors duration-200'>
            <span>←</span>
            <span>Back</span>
          </Link>
        </motion.div>
        <div className='flex flex-col items-center text-center'>
          <motion.div variants={childVariant} className='relative h-28 w-28 overflow-hidden rounded-full'>
            <Image src='/Main.webp' alt='Profile avatar' fill sizes='112px' className='object-cover' />
          </motion.div>
          <motion.h1 variants={childVariant} className='mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground'>KRISH</motion.h1>
          <motion.p variants={childVariant} className='text-base text-foreground/70'>Developer</motion.p>
        </div>

        <div className='mt-6 space-y-3'>
          {links.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              className='group relative block w-full rounded-xl border border-foreground/15 bg-background/80 dark:bg-black/50 px-4 py-3 text-sm font-medium backdrop-blur-md shadow-[inset_0_1px_0_rgba(0,0,0,0.06),0_6px_24px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_6px_24px_rgba(0,0,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 transition-all duration-200 hover:border-foreground/25 hover:bg-black/10 dark:hover:bg-white/5'
              variants={childVariant}
            >
              {/* rotating conic halo around the button (surrounding animation) */}
              <span aria-hidden className='pointer-events-none absolute -inset-2 rounded-[inherit] bg-[conic-gradient(from_0deg,rgba(0,0,0,0.15),transparent_35%,rgba(0,0,0,0.15),transparent_70%)] dark:bg-[conic-gradient(from_0deg,rgba(255,255,255,0.15),transparent_35%,rgba(255,255,255,0.15),transparent_70%)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60 animate-[spin_6s_linear_infinite]' />
              {/* surrounding animated glow */}
              <span aria-hidden className='pointer-events-none absolute -inset-1 rounded-[inherit] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(0,0,0,0.08),transparent_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100 animate-pulse' />
              {/* subtle outer ring that brightens on hover */}
              <span aria-hidden className='pointer-events-none absolute -inset-px rounded-[inherit] ring-1 ring-foreground/10 transition-colors duration-300 group-hover:ring-foreground/20' />
              <span aria-hidden className='pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(120%_60%_at_50%_-20%,rgba(0,0,0,0.08),transparent_60%)] dark:bg-[radial-gradient(120%_60%_at_50%_-20%,rgba(255,255,255,0.08),transparent_60%)] opacity-70' />
              <span aria-hidden className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-foreground/10' />
              <span className='absolute left-4 top-1/2 -translate-y-1/2 text-foreground/70 transition-colors group-hover:text-black dark:group-hover:text-white'>{item.icon}</span>
              <span className='pointer-events-none relative block w-full text-center text-foreground/90 tracking-wide transition-colors group-hover:text-black dark:group-hover:text-white'>{item.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  )
}
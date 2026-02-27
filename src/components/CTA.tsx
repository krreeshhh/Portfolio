import React from 'react'
import Link from 'next/link'
import { IconBrandGithub, IconBrandTelegram, IconBrandLinkedin, IconBrandInstagram, IconMail } from '@tabler/icons-react'
import { SiPeerlist } from "react-icons/si";

const CTA = () => {
  return (
    <div className='my-8 p-8' id='contact'>
      <h1 className='text-3xl font-sans font-bold tracking-tight my-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-700 dark:to-white'>Let&apos;s build something that doesn&apos;t end up in the GitHub graveyard.</h1>
      <p className='text-zinc-700 dark:text-zinc-400 my-1'>Freelance, full-time, or just vibing with an idea—I&apos;m all ears.</p>
      <div className='flex justify-center flex-wrap gap-2 py-2 my-2'>
        <IconButton href={'mailto:KrishnaPrasath.7x@gmail.com'} ariaLabel={'Email'}>
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
    <Link href={href} target='_blank' aria-label={ariaLabel} className='rounded-lg border border-gray-200 dark:border-neutral-800 p-2 transition-colors duration-200 hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40'>
      <span className='text-neutral-700 dark:text-neutral-300'>
        {children}
      </span>
    </Link>
  )
}

export default CTA

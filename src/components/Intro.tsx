'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react'
import { SiPeerlist } from "react-icons/si";

const socials = [
  { name: 'GitHub', link: 'https://github.com/Tokittoo', icon: IconBrandGithub },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/krishnaprasath-r/', icon: IconBrandLinkedin },
  { name: 'Peerlist', link: 'https://peerlist.io/krishnaprasath', icon: SiPeerlist },
]

const Intro = () => {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 20,
      filter: 'blur(10px)',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  }

  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  }

  return (
    <motion.div
      initial={'hidden'}
      animate={'show'}
      variants={parentVariant}
      className='p-8 mb-2'
    >
      <div className='flex gap-4 items-start max-md:flex-row'>
        <motion.div
          variants={childVariant}
          className='overflow-hidden rounded-full w-max h-max shrink-0 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'
        >
          <Image
            src={'/Main.webp'}
            height={120}
            width={120}
            alt='Krishna Prasath — Developer headshot'
            className='max-md:size-[6rem]'
          />
        </motion.div>
        <div>
          <motion.h1 variants={childVariant} className='text-4xl md:text-5xl font-sans tracking-tighttext-4xl ml-2 mt-1 mb-1 font-bold font-sans text-neutral-900 dark:text-neutral-100'>
            Krish
          </motion.h1>
          <motion.p variants={childVariant} className='text-zinc-700 dark:text-zinc-400 text-sm'>Where logic codes with imagination — this is my playground.</motion.p>
          <motion.div variants={childVariant} className='mt-2 flex gap-2'>
            {socials.map(({ name, link, icon: Icon }) => (
              <a
                key={name}
                href={link}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center justify-center size-9 rounded-md border border-neutral-300 dark:border-neutral-700 hover:border-black hover:bg-black hover:text-white dark:hover:border-white dark:hover:bg-neutral-800/30 dark:hover:text-white transition-colors'
                aria-label={name}
                title={name}
              >
                <Icon className='size-5 text-neutral-600 dark:text-neutral-300' />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      <AboutMe childVariant={childVariant} />
    </motion.div>
  )
}

function AboutMe({ childVariant }: { childVariant: any }) {
  return (
    <div className='text-zinc-700 dark:text-zinc-400 text-sm my-2 flex flex-col gap-2 text-justify'>
      <motion.p variants={childVariant}>
        I'm just a dude who turns coke into code. I build dope stuff that doesn't end up in my GitHub graveyard—'cause the world's got enough abandoned side projects. My code slaps harder than my CGPA ever did. I enjoy taking ideas from zero to one, iterating fast, and polishing the little details that make products feel premium. If it’s useful, reliable, and a bit over-engineered in the best way, I’m probably behind it.
      </motion.p>
      <motion.p variants={childVariant}>
         
      </motion.p>
    </div>
  )
}

export default Intro

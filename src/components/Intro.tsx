'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { childVariant, AnimationWrapper } from './ui/animation-wrapper'
import TextAnimation from './ui/text-animation'
import HeroButton from './ui/hero-button'
import { FaGithub } from 'react-icons/fa6'
import { FaFileAlt } from "react-icons/fa";

export interface IHeroButton {
  text: string;
  href: string;
  icon: React.ElementType;
}

const heroButtons: IHeroButton[] = [
  {
    text: 'resume',
    href: '/resume.pdf',
    icon: FaFileAlt
  },
  {
    text: 'github',
    href: 'https://github.com/krreeshhh',
    icon: FaGithub
  }
]

const Intro = () => {
  return (
    <AnimationWrapper className='px-4 md:px-8 my-4 scroll-mt-35' id='home'>
      <div className='flex flex-col md:flex-row justify-between gap-4 '>
        <div className='flex gap-3 md:gap-4'>
          <motion.div
            variants={childVariant}
            whileHover={{ scale: 1.06, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 350, damping: 18 }}
            className='overflow-hidden w-max h-max rounded-2xl shrink-0 border border-border shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.02)] cursor-pointer'
          >
            <Image
              src={'/avatar.webp'}
              height={75}
              width={75}
              alt='Avatar'
              className='w-16 h-16 md:w-[75px] md:h-[75px]'
              priority={true}
            />
          </motion.div>
          <div className="flex flex-col justify-center">
            <motion.h1 
              variants={childVariant} 
              className='text-3xl md:text-[48px] font-sans font-semibold tracking-tight leading-[52.0077px] text-neutral-900 dark:text-neutral-100'
            >
              Krish
            </motion.h1>
            <motion.p variants={childVariant} className='flex gap-1.5 items-center text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-normal'>
              18 • <TextAnimation />
            </motion.p>
          </div>
        </div>
        {/* Motion div below */}
        <div className='flex flex-row md:flex-col gap-2 md:gap-1 md:mt-1'>
          {
            heroButtons.map(h => (
              <motion.div variants={childVariant} key={h.text}>
                <HeroButton
                  button={h}
                />
              </motion.div>
            ))
          }
        </div>
      </div>
      <AboutMe />
    </AnimationWrapper>
  )
}

const AboutMe = () => (
  <div className='text-muted-foreground text-sm my-4 flex flex-col gap-2'>
    <motion.p variants={childVariant}>
      Frontend, backend, cloud, automation - if it runs, I&apos;ll probably build it.
    </motion.p>
  </div>
)

export default Intro

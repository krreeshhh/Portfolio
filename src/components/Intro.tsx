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
    href: 'resume.pdf',
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
    <AnimationWrapper className='px-4 md:px-8 my-4'>
      <div className='flex flex-col md:flex-row justify-between gap-4'>
        <div className='flex gap-3 md:gap-4'>
          <motion.div
            variants={childVariant}
            className='overflow-hidden w-max h-max rounded-xl shrink-0 border border-border shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'
          >
            <Image
              src={'/Main.webp'}
              height={75}
              width={75}
              alt='Avatar'
              className='w-16 h-16 md:w-[75px] md:h-[75px]'
              priority={true}
            />
          </motion.div>
          <div>
            <motion.h1 variants={childVariant} className='text-2xl md:text-3xl font-instrument-serif mt-1'>
              Krish
            </motion.h1>
            <motion.p variants={childVariant} className='flex gap-1 items-center text-xs md:text-sm text-muted-foreground'>17 • <TextAnimation /></motion.p>
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
      I'm just a dude who turns coke into code. I build dope stuff that doesn't end up in my GitHub graveyard—'cause the world's got enough abandoned side projects. My code slaps harder than my GPA ever did. I enjoy taking ideas from zero to one, iterating fast, and polishing the little details that make products feel premium. If it’s useful, reliable, and a bit over-engineered in the best way, I’m probably behind it.
    </motion.p>
  </div>
)

export default Intro

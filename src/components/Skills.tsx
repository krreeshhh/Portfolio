'use client'

import React from 'react'
import { motion } from 'motion/react'
import { IconBrandJavascript, IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from "@tabler/icons-react"
import { FaPython,FaCss3, FaHtml5, FaNodeJs   } from "react-icons/fa";
import { VscTerminalPowershell } from "react-icons/vsc";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiVite , SiHyprland, SiTauri } from "react-icons/si";
import { AnimationWrapper, childVariant } from './ui/animation-wrapper'

type Skill = {
  name: string,
  logo?: React.ReactNode
}

const skills: Skill[] = [
  { name: 'JavaScript', logo: <IconBrandJavascript /> },
  { name: 'TypeScript', logo: <IconBrandTypescript /> },
    { name: 'Python', logo: <FaPython /> },
  { name: 'React', logo: <IconBrandReact /> },
  { name: 'Next.js', logo: <IconBrandNextjs /> },
  { name: 'Node.js', logo: <FaNodeJs  /> },
    { name: 'Vite.js', logo: <SiVite /> },
  {name: 'Tauri', logo: <SiTauri />},
  { name: 'HTML', logo: <FaHtml5 /> },
  { name: 'CSS', logo: <FaCss3 /> },
  { name: 'Tailwind CSS', logo: <IconBrandTailwind /> },
  {name: 'Shell', logo: <VscTerminalPowershell />},
]

function Skills() {
  return (
    <AnimationWrapper
      className='px-4 md:px-8 pt-1 pb-8 -my-8'
      id='skills'
    >
      <motion.h2 variants={childVariant} className='text-3xl md:text-4xl mt-8 mb-5 font-bold font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-700 dark:to-white'>Toolkit
      </motion.h2>
      <div className='flex flex-wrap gap-3'>
        {skills.map(skill => (
          <motion.div
            key={skill.name}
            variants={childVariant}
            className='group flex items-center gap-2 px-3 py-2 rounded-lg border border-transparent hover:border-black hover:bg-black hover:text-white dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white transition-colors duration-200'
          >
            <span className='text-neutral-600 transition-colors duration-200 group-hover:text-white dark:text-neutral-300'>
              {skill.logo ?? null}
            </span>
            <span className='font-sans'>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </AnimationWrapper>
  )
}

export default Skills



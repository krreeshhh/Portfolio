'use client'

import React from 'react'
import { motion } from 'motion/react'
import { IconBrandJavascript, IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from "@tabler/icons-react"
import { FaPython,FaCss3, FaHtml5, FaNodeJs   } from "react-icons/fa";
import { VscTerminalPowershell } from "react-icons/vsc";
import { SiVite , SiTauri } from "react-icons/si";
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
      <motion.h2 
        variants={childVariant} 
        className='text-3xl md:text-4xl mt-10 mb-5 font-bold font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-700 dark:to-white'
      >
        Toolkit
      </motion.h2>
      <div className='flex flex-wrap gap-2.5'>
        {skills.map(skill => (
          <motion.div
            key={skill.name}
            variants={childVariant}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 450, damping: 20 }}
            className='group flex items-center gap-2 px-3.5 py-2 rounded-xl border border-neutral-200/50 dark:border-neutral-800/30 bg-neutral-100/40 dark:bg-neutral-900/30 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-150 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.01)]'
          >
            <span className='text-neutral-500 transition-colors duration-150 group-hover:text-neutral-950 dark:group-hover:text-white dark:text-neutral-400'>
              {skill.logo ?? null}
            </span>
            <span className='font-sans text-sm font-medium'>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </AnimationWrapper>
  )
}

export default Skills



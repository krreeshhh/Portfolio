'use client'

import React from 'react'
import { Project } from './Projects'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Tags } from './Tags'
import { IconExternalLink } from '@tabler/icons-react'

const Card = ({ project }: { project: Project }) => {
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
  
  return (
    <motion.div variants={childVariant} className='flex flex-col justify-between p-6 rounded-lg border dark:border-neutral-700 border-neutral-300 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] relative'>
      <div>
        <h1 className='text-2xl font-sans tracking-tight font-semibold my-4'>{project.title}</h1>
        <p className='text-zinc-700 dark:text-zinc-300 mb-8'>{project.description}</p>
      </div>
      <div className='flex gap-2 flex-wrap items-center justify-between'>
        <div className='flex gap-2 flex-wrap'>
          {<Tags items={project.tags} />}
        </div>
        {project.link && (
          <Link href={project.link} target={'_blank'} className='rounded-lg border border-gray-200 dark:border-neutral-800 px-3 py-2 text-sm transition-colors duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-neutral-700 dark:text-neutral-300 flex items-center gap-1'>
            <IconExternalLink size={16} />
            Live
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default Card

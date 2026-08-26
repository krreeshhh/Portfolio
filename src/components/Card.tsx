'use client'

import React from 'react'
import { type Project, type UpcomingProject } from '@/data/projects'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Tags } from './Tags'
import { IconExternalLink } from '@tabler/icons-react'
import { FaGithub } from 'react-icons/fa6'
import { playTapSound } from '@/lib/audio'

const Card = ({ project }: { project: Project | UpcomingProject }) => {
  const liveLink = 'liveLink' in project ? project.liveLink : undefined
  const sourceLink = 'sourceLink' in project ? project.sourceLink : undefined
  const cardLink = liveLink || sourceLink

  const [coords, setCoords] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardClick = () => {
    playTapSound('click');
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 15,
      filter: 'blur(8px)',
    },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        bounce: 0,
        duration: 0.4
      }
    }
  }

  return (
    <motion.div
      variants={childVariant}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      onMouseMove={handleMouseMove}
      onClick={handleCardClick}
      style={{
        ['--mouse-x' as any]: `${coords.x}px`,
        ['--mouse-y' as any]: `${coords.y}px`,
      }}
      className='group relative flex h-full min-h-[17.5rem] flex-col justify-between p-6 rounded-2xl border border-border bg-card text-card-foreground shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_16px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_16px_rgba(0,0,0,0.3)] transition-colors duration-300 cursor-pointer overflow-hidden'
    >
      {/* Interactive hover spotlight background overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: 'radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(0, 113, 227, 0.05), transparent 80%)'
        }}
      />
      <div className="relative z-10 flex flex-col justify-between h-full flex-1">
        <div>
          <motion.h3 className='text-xl font-semibold tracking-tight my-2 font-sans'>
            {project.title}
          </motion.h3>
          <motion.p className='text-sm text-neutral-500 dark:text-neutral-400 mb-6 line-clamp-4 font-normal leading-relaxed'>
            {project.description}
          </motion.p>
        </div>
        <div className='flex gap-2 flex-wrap items-center justify-between mt-auto pt-4 border-t border-border/50'>
          <div className='flex gap-2 flex-wrap'>
            <Tags items={project.tags} />
          </div>
          {cardLink && (
            <Link
              href={cardLink}
              target={'_blank'}
              className='group/button rounded-xl border border-border px-3 py-1.5 text-xs font-medium transition-colors duration-200 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black text-neutral-700 dark:text-neutral-300 flex items-center gap-1 bg-white/50 dark:bg-neutral-800/20 backdrop-blur-xs'
              onClick={(e) => {
                e.stopPropagation();
                playTapSound('click');
              }}
            >
              {liveLink ? (
                <IconExternalLink size={14} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[1px] transition-transform duration-300' />
              ) : (
                <FaGithub size={14} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[1px] transition-transform duration-300' />
              )}
              {liveLink ? 'Live' : 'Source'}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Card


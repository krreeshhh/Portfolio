'use client'
import React, { useState } from 'react'
import './style.css'
import { type Project, projects, upcomingProjects } from '@/data/projects'
import Link from 'next/link'
import { IconChevronDown } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'
import { ProjectPopup, ProjectCard } from './ProjectsCards'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { useIsMobile } from '@/hooks/isMobile'

function Projects() {
  const [current, setCurrent] = useState<Project | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));
  const isMobile = useIsMobile();

  const handleProjectCardClick = (e: React.MouseEvent, project: Project) => {
    if (isMobile) return;

    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a')) {
      return;
    }

    setCurrent(project);
  }

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 20,
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

  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05
      }
    }
  }

  return (
    <motion.div
      initial={'hidden'}
      animate={'show'}
      variants={parentVariant}
      className='px-4 md:px-8 my-4 pb-8 scroll-mt-30' id='projects'
    >
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            animate={{
              backdropFilter: "blur(12px)",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
            exit={{
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className='fixed inset-0 flex justify-center items-center z-[100] px-4'
            onClick={() => setCurrent(null)}
          >
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, bottom: 250 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(event, info) => {
                if (info.offset.y > 140 || info.velocity.y > 350) {
                  setCurrent(null);
                }
              }}
              initial={{ opacity: 0, scale: 0.96, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 100 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="cursor-grab active:cursor-grabbing w-full max-w-[32rem] relative z-50 origin-bottom"
            >
              <ProjectPopup ref={ref} project={current} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h2 variants={childVariant} className='text-3xl md:text-4xl my-8 font-bold font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-700 dark:to-white'>Projects</motion.h2>

      <div className='grid md:grid-cols-2 gap-4'>
        {projects.map(project => (
          <motion.div
            key={project.title}
            variants={childVariant}
            onClick={(e) => handleProjectCardClick(e, project)}
            className="projects h-full cursor-pointer"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <Link href={'https://github.com/krreeshhh'} target='_blank'>
        <button className='flex items-center gap-1 text-sm mx-auto my-8 px-3 py-2 rounded-lg hover:bg-black hover:text-white dark:hover:bg-neutral-900 transition-colors duration-200 cursor-pointer'>
          See More <IconChevronDown size={16} />
        </button>
      </Link>

      <motion.h2 variants={childVariant} className='text-3xl md:text-4xl my-10 font-bold font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-700 dark:to-white'>Under Construction</motion.h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {upcomingProjects.map(upcomingProject => (
          <div key={upcomingProject.title} className="projects h-full">
            <ProjectCard project={upcomingProject} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects

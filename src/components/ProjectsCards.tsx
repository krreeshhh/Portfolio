'use client'

import React from 'react'
import { type Project, type UpcomingProject } from '@/data/projects'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { IconExternalLink } from '@tabler/icons-react'
import { FaGithub } from 'react-icons/fa6'
import { motion } from 'motion/react'
import { Video } from './ui/video'
import Card from './Card'

export const ProjectCard = ({ project }: { project: Project | UpcomingProject }) => {
    return (
        <Card project={project} />
    )
}

export const ProjectPopup = ({ project, ref }: { project: Project, ref: React.Ref<HTMLDivElement> }) => {
    return (
        <motion.div
            ref={ref}
            className='bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl border border-neutral-200/40 dark:border-neutral-800/40 rounded-3xl max-w-[32rem] overflow-hidden relative z-50 shadow-2xl flex flex-col'
        >
            <div className="w-12 h-1 bg-neutral-300/60 dark:bg-neutral-700/60 rounded-full mx-auto my-3 shrink-0" />
            <motion.div className="overflow-hidden mx-4 rounded-2xl border border-border">
                {
                    project.demoLink ? (
                        <Video src={project.demoLink} />
                    ) : (
                        <Image
                            src={project.image || ''}
                            height={300}
                            width={400}
                            alt={`${project.title}-image`}
                            className='w-full h-full object-cover'
                        />
                    )
                }
            </motion.div>
            <div className='p-6 w-full flex flex-col justify-between flex-1 gap-4'>
                <div>
                    <motion.h3 className='font-sans tracking-tight font-semibold text-2xl mb-2 text-neutral-900 dark:text-neutral-500-custom dark:text-neutral-100'>
                        {project.title}
                    </motion.h3>
                    <motion.div
                        initial={{
                            filter: "blur(4px)",
                            opacity: 0,
                        }}
                        animate={{
                            filter: "blur(0px)",
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0
                        }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className='text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal'
                    >
                        {project.content}
                    </motion.div>
                </div>
                <motion.div className={`grid ${project.sourceLink && project.liveLink ? 'grid-cols-2' : 'grid-cols-1'} gap-3 h-max mt-2`}>
                    {project.sourceLink && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button variant={"secondary"} asChild className='group/button hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-xl w-full border border-border bg-neutral-100/55 dark:bg-neutral-800/40'>
                                <Link href={project.sourceLink} target='_blank' className='flex items-center gap-2 justify-center w-full'>
                                    <FaGithub size={15} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[1px] transition-transform duration-300' />
                                    Source
                                </Link>
                            </Button>
                        </motion.div>
                    )}
                    {project.liveLink && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button asChild className='group/button hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-xl w-full bg-neutral-900 text-white dark:bg-white dark:text-black'>
                                <Link href={project.liveLink} target='_blank' className='flex items-center gap-2 justify-center w-full'>
                                    <IconExternalLink size={15} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[1px] transition-transform duration-300' />
                                    Live
                                </Link>
                            </Button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    )
}

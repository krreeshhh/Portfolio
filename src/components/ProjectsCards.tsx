'use client'

import React from 'react'
import { type Project } from '@/data/projects'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { IconExternalLink } from '@tabler/icons-react'
import { FaGithub } from 'react-icons/fa6'
import { motion } from 'motion/react'
import { Video } from './ui/video'
import Card from './Card'

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Card project={project} />
    )
}

export const ProjectPopup = ({ project, ref }: { project: Project, ref: React.Ref<HTMLDivElement> }) => {
    return (
        <motion.div
            ref={ref}
            className='bg-card text-card-foreground border border-border rounded-2xl max-w-[32rem] overflow-hidden relative z-50'
        >
            <motion.div>
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
            <div className='p-3 w-full flex flex-col justify-between flex-1'>
                <div>
                    <motion.h1 className='font-sans tracking-tight font-semibold text-xl'>{project.title}</motion.h1>
                    <motion.div
                        initial={{
                            filter: "blur(4px)",
                        }}
                        animate={{
                            filter: "blur(0px)",
                        }}
                        exit={{
                            opacity: 0
                        }}
                        className='text-sm text-muted-foreground'
                    >
                        {project.content}
                    </motion.div>
                </div>
                <motion.div className={`grid ${project.sourceLink ? 'grid-cols-2' : 'grid-cols-1'} gap-2 h-max mt-4`}>
                    {project.sourceLink && (
                        <Button variant={"secondary"} asChild className='group/button hover:bg-white hover:text-black rounded-lg'>
                            <Link href={project.sourceLink} target='_blank'>
                                <FaGithub size={16} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[2px] transition-transform duration-300' />
                                Source
                            </Link>
                        </Button>
                    )}
                    <Button asChild className='group/button hover:bg-white hover:text-black rounded-lg'>
                        <Link href={project.liveLink} target='_blank'>
                            <IconExternalLink size={16} className='group-hover/button:-rotate-12 rotate-0 group-hover/button:-translate-[2px] transition-transform duration-300' />
                            Live
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    )
}
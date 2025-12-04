'use client'
import './style.css'
import Card from './Card'
import Link from 'next/link'
import { IconBrandCss3, IconBrandFramerMotion, IconBrandHtml5, IconBrandJavascript, IconBrandNextjs , IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconChevronDown } from '@tabler/icons-react'
import { motion } from 'motion/react'

export type Project = {
  title: string,
  description: string,
  link?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

const NextJS ={
  name: 'Next.js',
  logo: <IconBrandNextjs />
}

const Html ={
  name:'HTML',
  logo: <IconBrandHtml5/>
}

const CSS ={
  name:'CSS',
  logo: <IconBrandCss3/>
}

const React = {
  name: 'React',
  logo: <IconBrandReact />
}

const Tailwind = {
  name: 'Tailwind CSS',
  logo: <IconBrandTailwind />
}

const Motionls = {
  name: 'Motion',
  logo: <IconBrandFramerMotion />
}

const TypeScript = {
  name: 'TypeScript',
  logo: <IconBrandTypescript />
}

const NodeJS = {
  name: 'NodeJS',
  logo: <IconBrandNodejs />
}

const JavaScript = {
  name: 'JavaScript',
  logo: <IconBrandJavascript />
}

const projects: Project[] = [
  {
    title: 'Sibhi v1.0',
    description: "Personal cybersecurity portfolio showcasing write-ups, skills, experience, and professional insights.",
    link: 'https://xibhi.netlify.app/',
    tags:[
      Html,
      CSS,
      JavaScript,
    ]
  },
  {
    title: 'Sibhi v2.0',
    description: "Redesigned professional cybersecurity portfolio with structured write-ups, skills, experience, and achievements.",
    link: 'https://xibhi.vercel.app/',
    tags:[
      React,
      TypeScript,
      Tailwind,
      NextJS,
    ]
  },
  {
    title: 'Penquin',
    description: "Collaborative security tooling initiative with Sibhi delivering a modular toolkit for advanced vulnerability discovery.",
    link:'https://penquin.vercel.app/',
    tags: [
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind,
      Motionls
    ]
  },
  {
    title: 'SECURE WORLDZ',
    description: "A platform for security professionals to share their knowledge and experiences with the community.",
    link:'https://secure-worldz.vercel.app/',
    tags: [
      NextJS,
      TypeScript,
      Tailwind,
      React,
    ]
  },
]

 const upcomingProjects: Project[] = [
    {
    title: 'PenquinX',
    description: "Next-gen security platform with modular scanners, live recon, and CI-ready APIs.",
    link: '',
    tags:[
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind,
      Motionls
    ]
  }
  
]

function Projects() {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 50,
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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      initial={'hidden'}
      animate={'show'}
      variants={parentVariant}
      className='md:p-2 p-8' id='projects'
    >
      <motion.h2 variants={childVariant} className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-700 dark:to-white'>Projects</motion.h2>
      <div className='grid md:grid-cols-2 max-md:mx-4 gap-4'>
        {
          projects.map(project => (
            <div key={project.title} className="projects">
              <Card project={project} />
            </div>
          ))
        }
      </div>
      <Link href={'https://github.com/Tokittoo'} target='_blank'>
        <button className='flex items-center gap-1 text-sm mx-auto my-8 px-3 py-2 rounded-lg hover:bg-black hover:text-white dark:hover:bg-neutral-900 transition-colors duration-200 cursor-pointer'>
          See More <IconChevronDown size={16} />
        </button>
      </Link>

      <h2 className='text-4xl ml-2 my-8 font-bold font-sans tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-700 dark:to-white'>Upcoming Projects</h2>
      <div className='grid md:grid-cols-2 max-md:mx-4 gap-4'>
        {
          upcomingProjects.map(project => (
            <div key={project.title} className="projects">
              <Card project={project} />
            </div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default Projects

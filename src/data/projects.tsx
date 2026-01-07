import { IconBrandJavascript, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from "@tabler/icons-react"
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiVite } from "react-icons/si";

export type Project = {
  title: string,
  description: string,
  image?: string,
  liveLink: string,
  sourceLink?: string,
  content: React.ReactNode,
  demoLink?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

export type UpcomingProject = {
  title: string,
  description: string,
  image?: string,
  link?: string,
  tags: {
    name: string,
    logo?: React.ReactNode
  }[]
}

const Html = {
  name: 'HTML',
  logo: <FaHtml5 size={18} />
}

const CSS = {
  name: 'CSS',
  logo: <FaCss3 size={18} />
}

const NextJS = {
  name: 'Next.js',
  logo: <IconBrandNextjs size={18} />
}

const React = {
  name: 'React',
  logo: <IconBrandReact size={18} />
}

const Tailwind = {
  name: 'Tailwind CSS',
  logo: <IconBrandTailwind size={18} />
}


const TypeScript = {
  name: 'TypeScript',
  logo: <IconBrandTypescript size={18} />
}

const NodeJS = {
  name: 'NodeJS',
  logo: <IconBrandNodejs size={18} />
}

const JavaScript = {
  name: 'JavaScript',
  logo: <IconBrandJavascript size={18} />
}

const Motionls = {
  name: 'Framer Motion',
  logo: <TbBrandFramerMotion size={18} />
}

const Vitejs = {
  name: 'Vite.js',
  logo: <SiVite size={18} />
}


export const projects: Project[] = [
  {
    title: 'Sibhi v1.0',
    description: "Personal cybersecurity portfolio showcasing Write-ups, Skills, Experience, and Professional Insights.",
    liveLink: 'https://xibhi.netlify.app',
    sourceLink: 'https://github.com/xibhi/xibhi.github.io',
    content: (
      <>
        <p>
          Sibhi v1.0 is a personal cybersecurity portfolio showcasing professional achievements and security expertise.
        </p>
        <ul>
          <li>• Hall of Fame recognitions from NASA, Cisco, Lenovo, United Airlines, OYO, and Citi</li>
          <li>• Comprehensive security writeups and professional insights from real-world engagements</li>
          <li>• Built with clean HTML, CSS, and JavaScript for accessible presentation</li>
        </ul>
      </>
    ),
    image: '/Projects/Sibhi.webp',
    tags: [
      Html,
      CSS,
      JavaScript,
    ]
  },
  {
    title: 'Sibhi v2.0',
    description: "Redesigned Professional cybersecurity portfolio with structured Write-ups, Skills, Experience, and Achievements.",
    liveLink: 'https://xibhi.vercel.app',
    sourceLink: 'https://github.com/xibhi/portfolio',
    content: (
      <>
        <p>
          Sibhi v2.0 is a redesigned professional cybersecurity portfolio built with modern web technologies.
        </p>
        <ul>
          <li>• Features CVE-2025-26206 discovery with detailed writeups published on Medium</li>
          <li>• Integrated Spotify widget displaying currently playing music and comprehensive project showcases</li>
          <li>• Built with modern React, TypeScript, and Next.js for enhanced user experience</li>
        </ul>
      </>
    ),
    image: '/Projects/Sibhi-v2.webp',
    tags: [
      React,
      TypeScript,
      Tailwind,
      NextJS,
    ]
  },
  {
    title: 'Penquin',
    description: "Compact bug-bounty toolkit with pre-configured commands and optimized workflows to remove setup friction.",
    liveLink: 'https://penquin.vercel.app',
    sourceLink: 'https://github.com/xibhi/penquin',
    content: (
      <>
        <p>
          Compact bug-bounty toolkit with pre-configured commands and optimized workflows.
        </p>
        <ul>
          <li>• Zero-friction bug hunting with pre-wired workflows</li>
          <li>• Recon to exploitation, fully streamlined</li>
          <li>• Curated tools that cut noise and setup pain</li>
          <li>• Built for speed, focus, and repeatability</li>
        </ul>
      </>
    ),
    demoLink: 'https://res.cloudinary.com/sputifyy/video/upload/v1766151214/vynk-demo_xdpfa3.mp4',
    tags: [
      React,
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind,
      Motionls,
    ]
  },
  {
    title: 'SECURE WORLDZ',
    description: "A platform for security professionals to share their knowledge and experiences with the community.",
    liveLink: 'https://secureworldz.vercel.app',

    content: (
      <>
        <p>
          SECURE WORLDZ is a comprehensive technology services platform built on "Secure. Build. Evolve."
        </p>
        <ul>
          <li>• Three core divisions: Cybersecurity Services, Website Development, and AI Development</li>
          <li>• Assess → Protect → Detect & Respond methodology achieving 40% reduction in vulnerabilities</li>
          <li>• Tiered pricing plans (Silver, Gold, Platinum) with transparent pricing and measurable outcomes</li>
        </ul>
      </>
    ),
    image: '/Projects/Secure-Worldz.webp',
    tags: [
      React,
      NextJS,
      TypeScript,
      Tailwind,

    ]
  },
  {
    title: 'Drago',
    description: "Drago is a cybersecurity-focused site offering a growing library of tools and project checklists to help users secure their digital assets.",
    liveLink: 'https://dragotool.shop',
    content: (
      <>
        <p>
          Drago Tools is a specialized marketplace for advanced technology products created by practitioners.
        </p>
        <ul>
          <li>• Curated library of battle-tested cybersecurity tools and project checklists</li>
          <li>• Solves actual problems faced by security professionals and developers</li>
          <li>• Each tool developed with practical experience ensuring real-world effectiveness</li>
        </ul>
      </>
    ),
    image: '/Projects/Drago.webp',
    tags: [
      React,
      Vitejs,
      NodeJS,
      TypeScript,
      Tailwind,
    ]
  },
  {
    title: 'Wattrack',
    description: "A Secure Login portal providing Authorized access to a monitoring dashboard for tracking system data and activity",
    liveLink: 'https://wattrack.vercel.app',
    content: (
      <>
        <p>
          Wattrack is an enterprise-grade secure access portal for authorized personnel monitoring.
        </p>
        <ul>
          <li>• Enterprise-grade authentication with comprehensive logging for security and compliance</li>
          <li>• Monitoring dashboard for system metrics, activity logs, and real-time data visualization</li>
          <li>• Strict access controls with full audit trails ensuring complete traceability</li>
        </ul>
      </>
    ),
    image: '/Projects/Wattrack.webp',
    tags: [
      React,
      NextJS,
      NodeJS,
      TypeScript,
      Tailwind,
    ]
  }

]

export const upcomingProjects: UpcomingProject[] = [
  {
    title: 'Fellowship',
    description: "A Community where Hackers and Bug Bounty Hunters connect, collaborate, and grow together.",
    image: '/Projects/Fellowship.webp',
    tags: [
      React,
      TypeScript,
      Tailwind,
    ]
  }

]
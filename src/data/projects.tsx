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
          Legacy portfolio showcasing early career milestones and foundational security work.
        </p>
        <ul>
          <li>• Showcasing Hall of Fame recognitions from top tech companies</li>
          <li>• Documenting early security research and vulnerability findings</li>
          <li>• Clean, performance-focused design with HTML, CSS, JavaScript</li>
          <li>• A foundational archive of professional growth and insights</li>
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
          Modern, interactive portfolio highlighting advanced security research and detailed write-ups.
        </p>
        <ul>
          <li>• Features major discoveries including CVE-2025-26206</li>
          <li>• Interactive ecosystem with Spotify integration and dynamic content</li>
          <li>• Built with Next.js and TypeScript for optimal performance</li>
          <li>• Comprehensive showcase of skills, certifications, and achievements</li>
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
    demoLink: 'https://res.cloudinary.com/dqsz8xitb/video/upload/v1766556638/Penquin_bgqgwy.mp4',
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
    title: 'Drago',
    description: "A marketplace for real tech products created by practitioners and engineers who work with technology every day.",
    liveLink: 'https://dragotool.shop',
    content: (
      <>
        <p>
          Specialized marketplace delivering battle-tested tools for security practitioners.
        </p>
        <ul>
          <li>• Curated library of essential cybersecurity tools and checklists</li>
          <li>• Solves real-world security challenges for developers and pros</li>
          <li>• Streamlined marketplace experience for digital security assets</li>
          <li>• Built for reliability and practical, everyday security use</li>
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
          Enterprise secure access portal for real-time system monitoring and compliance.
        </p>
        <ul>
          <li>• Robust authentication ensuring authorized-only system access</li>
          <li>• Real-time dashboard for critical data and activity tracking</li>
          <li>• Comprehensive logging for full security and compliance audits</li>
          <li>• Scalable architecture designed for enterprise monitoring needs</li>
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
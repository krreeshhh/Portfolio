import { IconBrandJavascript, IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandTypescript } from "@tabler/icons-react"
import { FaPython,FaCss3, FaHtml5  } from "react-icons/fa";
import { VscTerminalPowershell } from "react-icons/vsc";
import { SiHyprland, SiTauri } from "react-icons/si";

export type Project = {
  title: string,
  description: string,
  image?: string,
  liveLink?: string,
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

const Python = {
  name: 'Python',
  logo: <FaPython size={18} />
}

const Tauri = {
  name: 'Tauri',
  logo: <SiTauri size={18} />
}

const Hyprland = {
  name: 'Hyprland',
  logo: <SiHyprland size={18} />
}

const NextJS = {
  name: 'Next.js',
  logo: <IconBrandNextjs size={18} />
}

const React = {
  name: 'React',
  logo: <IconBrandReact size={18} />
}

const Terminal ={
  name: 'Shell',
  logo: <VscTerminalPowershell size={18} />
}

const Tailwind = {
  name: 'Tailwind CSS',
  logo: <IconBrandTailwind size={18} />
}


const TypeScript = {
  name: 'TypeScript',
  logo: <IconBrandTypescript size={18} />
}

const JavaScript = {
  name: 'JavaScript',
  logo: <IconBrandJavascript size={18} />
}


export const projects: Project[] = [
  {
    title: 'zibi',
    description: "Your clipboard's terminal slave. Copy. Pin. Share. Repeat.",
    image: '/Projects/zibi.webp',
    sourceLink: 'https://github.com/xibhi/zibi',
    content:
      <>
        <p>
          zibi is a cute clipboard manager that lives entirely in your terminal. Copy, pin, share, transform and revisit clipboard history without leaving the command line — all without touching a mouse or opening a browser.
          </p>
      </>,
    demoLink: "",
    tags: [
      Python,
      Terminal,

    ]
  },
  {
    title: 'PigOS',
    description: "An opinionated Hyprland desktop environment for Arch Linux. Built for Humans, Approved by Pigs.",
    sourceLink: 'https://github.com/xibhi/pigos',
    content: (
      <>
        <p>
          A Hyprland setup for Arch Linux that gets you running without having to figure everything out from scratch. Built to understand the stack. Shared because it works.
        </p>
      </>
    ),
    image: '/Projects/pigos.webp',
    tags: [
      Terminal,
      CSS,
            Hyprland,
    ]
  }

]

export const upcomingProjects: UpcomingProject[] = [
  {
    title: 'Argus',
    description: "An tool that aggregates and analyzes data from multiple sources to provide comprehensive intelligence reports.",
    image: '/Projects/Fellowship.webp',
    tags: [
      React,
      TypeScript,
      Tailwind,
      Tauri,
    ]
  },
  {
    title: 'Fellowship',
    description: "A Community where Hackers and Bug Bounty Hunters connect, collaborate, and grow together.",
    image: '/Projects/Fellowship.webp',
    tags: [
      React,
      TypeScript,
      Tailwind,
    ]
  },


]
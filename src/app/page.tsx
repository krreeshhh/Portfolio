import React from 'react'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

import CTA from '@/components/CTA'
import GithubGraph from '@/components/GithubGraph'
import Intro from '@/components/Intro'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

const Home = () => {
  return (
    <div>
      <Intro />
      <GithubGraph />
      <Skills />
      <Projects />
      <CTA />
    </div>
  )
}

export default Home

export const metadata: Metadata = {
  title: 'Krish',
  description: 'Where logic codes with imagination — this is my playground.',
}

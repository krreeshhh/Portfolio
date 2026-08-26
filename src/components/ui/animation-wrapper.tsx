'use client'

import React from 'react'
import { motion, MotionProps, Variants } from 'motion/react'

export const childVariant: Variants = {
  initial: {
    opacity: 0,
    y: 12,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.45,
    }
  }
}

export const parentVariant: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    }
  }
}

type AnimationWrapperProps = MotionProps & React.HTMLAttributes<HTMLDivElement>

export const AnimationWrapper = ({ children, ...props }: AnimationWrapperProps) => (
  <motion.div
    variants={parentVariant}
    initial='initial'
    animate='animate'
    {...props}
  >
    {children}
  </motion.div>
)
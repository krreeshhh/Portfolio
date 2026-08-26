'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { playTapSound } from '@/lib/audio'

const items = [
  {
    name: 'Home',
    link: '/#home',
  },
  {
    name: 'Projects',
    link: '/#projects',
  },
  {
    name: 'Contact',
    link: '/#contact',
  },
]

function Navigation() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNavToggle = () => setIsOpen(prev => !prev);

  return (
    <div className='p-4 md:p-6'>
      <div
        onMouseLeave={() => setHoveredIdx(null)}
        className='hidden flex-row items-center justify-center space-x-1 text-sm font-medium text-neutral-600 transition duration-200 hover:text-neutral-900 lg:flex h-max'
      >
        {
          items.map((item, idx) => (
            <motion.div
              key={`link-${idx}`}
              onMouseEnter={() => {
                setHoveredIdx(idx);
                playTapSound('light');
              }}
              className='relative px-4 py-2 text-neutral-600 dark:text-neutral-300 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white'
              whileTap={{ scale: 0.95 }}
              onClick={() => playTapSound('click')}
            >
              <Link href={item.link} className="relative z-20">
                {item.name}
              </Link>
              {hoveredIdx === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-lg bg-neutral-200/50 dark:bg-neutral-800/40"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          ))
        }
      </div>
      <div className='lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-neutral-200/40 dark:bg-neutral-800/40 border border-neutral-200/10 dark:border-neutral-700/10 active:scale-95 transition-transform duration-100'>
        <MobileNavToggle isOpen={isOpen} onClick={() => {
          playTapSound('toggle');
          handleMobileNavToggle();
        }} />
        <AnimatePresence>
          {
            isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ type: 'spring', duration: 0.45, bounce: 0.1 }}
                className='absolute right-0 top-14 z-50 flex w-[16rem] flex-col gap-1 rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-2 shadow-2xl border border-neutral-200/30 dark:border-neutral-800/30'
              >
                {
                  items.map((item, idx) => (
                    <Link
                      key={`link-${idx}`}
                      href={item.link}
                      className='p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/60 w-full text-sm font-medium transition-colors duration-150 text-neutral-800 dark:text-neutral-200'
                      onClick={() => {
                        playTapSound('click');
                        setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))
                }
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </div>
  );
};

const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white cursor-pointer" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white cursor-pointer" onClick={onClick} />
  );
};

export default Navigation


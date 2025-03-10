'use client'

import { motion } from 'framer-motion'

interface HeaderSectionProps {
  label?: string
  title: string
  subtitle?: string
  className?: string
}

export function HeaderSection({
  className,
  label,
  title,
  subtitle
}: HeaderSectionProps) {
  return (
    <div className='flex flex-col items-center text-center'>
      {label ? (
        <motion.h2
          className='bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text font-orbitron text-2xl font-bold text-transparent dark:from-white dark:via-gray-200 dark:to-white sm:text-3xl md:text-4xl'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.h2>
      ) : null}
      <motion.p
        className='mt-2 font-longslide text-xl text-gray-600 dark:text-gray-400'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.p>
      {subtitle ? (
        <motion.p
          className='mt-2 font-longslide text-xl text-gray-600 dark:text-gray-400'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}

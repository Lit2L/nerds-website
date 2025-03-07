'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { debounce } from 'lodash'
import { useInView } from 'react-intersection-observer'

const FilmRoll = ({ videos }: { videos: string[] }) => {
  const controls = useAnimation()

  useEffect(() => {
    const updateAnimationSpeed = debounce(() => {
      const isMobile = window.innerWidth < 640
      const duration = isMobile ? 10 : 40

      controls.start({
        x: ['0%', '-100%'],
        transition: {
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      })
    }, 100)

    updateAnimationSpeed()
    window.addEventListener('resize', updateAnimationSpeed)

    return () => window.removeEventListener('resize', updateAnimationSpeed)
  }, [controls])

  return (
    <div className='w-full overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-3'>
      <motion.div className='flex' animate={controls}>
        {[...Array(2)].map((_, containerIndex) => (
          <div key={containerIndex} className='mx-4 flex flex-none flex-col'>
            <FilmPerforations />
            <div className='flex space-x-8 py-4'>
              {videos.map((videoUrl, index) => (
                <ZoomableVideo key={index} videoUrl={videoUrl} />
              ))}
            </div>
            <FilmPerforations />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const ZoomableVideo = ({ videoUrl }: { videoUrl: string }) => {
  const [hovered, setHovered] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    setPosition({ x, y })
  }

  return (
    <div
      ref={ref}
      className='relative w-64 overflow-hidden rounded-lg border-4 border-gray-800 bg-black sm:w-80'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)' }}
    >
      {inView && (
        <motion.video
          autoPlay
          loop
          muted
          className='h-full w-full object-cover transition-all'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <source src={videoUrl} type='video/mp4' />
          Your browser does not support the video tag.
        </motion.video>
      )}
      {hovered && (
        <div
          className='pointer-events-none absolute rounded-full border border-gray-300'
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: '150px',
            height: '150px',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.3)',
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.15) 20%, rgba(0, 0, 0, 0.4) 80%)`,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
        >
          <div
            className='absolute'
            style={{
              width: '300%',
              height: '300%',
              backgroundImage: `url(${videoUrl})`,
              backgroundSize: 'auto',
              backgroundPosition: `-${position.x * 3}px -${position.y * 3}px`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'transparent',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      )}
    </div>
  )
}

const FilmPerforations: React.FC = React.memo(function FilmPerforations() {
  return (
    <div className='flex justify-between py-2'>
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className='h-4 w-8 rounded border border-gray-700 bg-gray-300 shadow-md'
        ></div>
      ))}
    </div>
  )
})

export default FilmRoll

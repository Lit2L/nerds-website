'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export interface Video {
  id: number
  title: string
  src: string
  srcLow: string // Low quality video source
  description: string
}

interface VideoCarouselProps {
  videos: Video[]
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  )
  const videoRefs = useRef<HTMLVideoElement[]>([])

  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.play()
        } else {
          video.pause()
          video.currentTime = 0
        }
      }
    })
  }, [currentIndex])

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    )
  }

  return (
    <div className='relative flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950'>
      <div className="absolute inset-0 bg-[url('/_static/backgrounds/bg1.png')] opacity-5 mix-blend-overlay"></div>
      <AnimatePresence initial={false}>
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className={`absolute flex h-[70%] w-[80%] items-center justify-center overflow-hidden rounded-2xl bg-black bg-opacity-60 shadow-2xl shadow-black ${index === currentIndex ? 'z-20' : 'z-10'} ${index === (currentIndex + 1) % videos.length ? 'z-0' : ''} ${index === (currentIndex - 1 + videos.length) % videos.length ? 'z-0' : ''}`}
            initial={{
              scale: 0.8,
              x: index > currentIndex ? '100%' : '-100%',
              opacity: 0,
              rotateY: index > currentIndex ? 45 : -45
            }}
            animate={{
              scale: index === currentIndex ? 1 : 0.8,
              x:
                index === currentIndex
                  ? 0
                  : index > currentIndex
                    ? '100%'
                    : '-100%',
              opacity: index === currentIndex ? 1 : 0.3,
              rotateY:
                index === currentIndex ? 0 : index > currentIndex ? 45 : -45
            }}
            exit={{
              scale: 0.8,
              x: index < currentIndex ? '-100%' : '100%',
              opacity: 0,
              rotateY: index < currentIndex ? -45 : 45
            }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <div className='group relative h-full w-full'>
              <video
                ref={(el) => {
                  videoRefs.current[index] = el!
                }}
                src={isMobile ? video.srcLow : video.src} // Use low quality source on mobile
                className='h-full w-full object-cover'
                autoPlay={false}
                loop
                muted
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70'></div>
              <div
                className={`absolute bottom-0 left-0 right-0 max-w-96 transform bg-black/10 p-6 text-white backdrop-blur sm:bg-transparent sm:backdrop-blur-none ${
                  isMobile ? '' : 'translate-y-full group-hover:translate-y-0'
                } transition-transform duration-300 ease-in-out`}
              >
                <span className='text-3xl font-bold'>{video.title}</span>
                <p className='mt-1 text-sm opacity-80'>{video.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <button
        onClick={prevVideo}
        aria-label='Previous video'
        className='absolute left-3 z-30 text-6xl text-white opacity-50 transition-opacity duration-300 hover:opacity-100 sm:left-8'
      >
        &#8249;
      </button>
      <button
        onClick={nextVideo}
        aria-label='Next video'
        className='absolute right-3 z-30 text-6xl text-white opacity-50 transition-opacity duration-300 hover:opacity-100 sm:right-8'
      >
        &#8250;
      </button>
      <div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 transform space-x-2'>
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'} transition-colors duration-300`}
            aria-label={`Go to video ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default VideoCarousel

'use client'

import React, { useRef, useState } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

// Make sure this utility exists in your project for combining class names

// Define the type for the variant and type props
type OverlayVariant = 'none' | 'light' | 'dark'
type MediaType = 'image' | 'video'

// Update the cva call with these types
const backgroundVariants = cva(
  'relative h-screen max-h-[800px] w-full min-h-[500px] lg:min-h-[600px] ',
  {
    variants: {
      overlay: {
        none: '',
        light:
          'before:absolute before:inset-0 before:bg-black before:opacity-30',
        dark: 'before:absolute before:inset-0 before:bg-black before:opacity-30'
      },
      type: {
        image: '',
        video: 'z-10'
      }
    },
    defaultVariants: {
      overlay: 'dark',
      type: 'image'
    }
  }
)

interface BackgroundMediaProps {
  variant?: OverlayVariant
  type?: MediaType
  src: string
  alt?: string
}

export const BackgroundMedia: React.FC<BackgroundMediaProps> = ({
  variant = 'dark',
  type = 'video',
  src,
  alt = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const mediaRef = useRef<HTMLVideoElement | null>(null)

  const toggleMediaPlay = () => {
    if (type === 'video' && mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause()
      } else {
        mediaRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const mediaClasses = cn(
    backgroundVariants({ overlay: variant, type }),
    'overflow-hidden '
  )

  const renderMedia = () => {
    if (type === 'video') {
      return (
        <video
          ref={mediaRef}
          aria-hidden='true'
          muted
          className='pointer-events-none absolute inset-0 h-[800px] w-full overflow-hidden object-cover transition-opacity duration-300'
          autoPlay
          loop
          playsInline
        >
          <source src={src} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )
    } else {
      return (
        <img
          src={src}
          alt={alt}
          className='absolute inset-0 h-full w-full rounded-br-[88px] object-cover'
          loading='eager'
        />
      )
    }
  }
  return (
    <div className={mediaClasses}>
      {renderMedia()}
      {type === 'video' && (
        <button
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className='absolute bottom-4 right-4 z-50 bg-transparent px-4 py-2 text-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
          onClick={toggleMediaPlay}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      )}
    </div>
  )
}

export default BackgroundMedia

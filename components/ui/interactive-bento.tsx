'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

// Define the structure for media items
interface MediaItemType {
  id: number
  title: string
  desc: string
  imageUrl: string // Static image
  videoUrl: string // Video to play on hover
  span: string
}

// MediaItem component: Displays an image & plays video on hover
const MediaItem = ({
  item,
  className,
  onClick
}: {
  item: MediaItemType
  className?: string
  onClick?: () => void
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div
      className={`${className} relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg dark:border-gray-800 dark:hover:border-gray-700`}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => videoRef.current?.pause()}
      onClick={onClick}
    >
      {/* Static Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className='absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-300 hover:opacity-0'
        loading='lazy'
      />

      {/* Video (Hidden by default, plays on hover) */}
      <video
        ref={videoRef}
        className='absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100'
        src={item.videoUrl}
        muted
        loop
        playsInline
      />

      {/* Background Overlay */}
      <div className='absolute inset-0 bg-black/30 opacity-30 transition-opacity duration-300 hover:opacity-100' />

      {/* Title & Description Overlay */}
      <div className='absolute inset-0 flex flex-col justify-end p-3 transition-opacity duration-300 hover:opacity-100'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent'></div>
        <h3 className='relative text-lg font-bold text-white'>{item.title}</h3>
        <p className='relative text-sm text-white'>{item.desc}</p>
      </div>
    </div>
  )
}

// GalleryModal component for displaying selected media
const GalleryModal = ({
  selectedItem,
  isOpen,
  onClose
}: {
  selectedItem: MediaItemType
  isOpen: boolean
  onClose: () => void
}) => {
  if (!isOpen) return null

  return (
    <>
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className='fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-md'
      >
        <motion.div
          key={selectedItem.id}
          className='relative w-full max-w-3xl overflow-hidden rounded-lg bg-gray-900 shadow-lg'
          initial={{ y: 20, scale: 0.97 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 20, scale: 0.97 }}
        >
          <MediaItem item={selectedItem} className='h-full w-full' />
        </motion.div>
        <button
          className='absolute right-4 top-4 rounded-full bg-gray-800 p-2 text-white'
          onClick={onClose}
        >
          <X size={20} />
        </button>
      </motion.div>
    </>
  )
}

// Main Gallery Component
const InteractiveBentoGallery = ({
  mediaItems,
  title,
  description
}: {
  mediaItems: MediaItemType[]
  title: string
  description: string
}) => {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null)

  return (
    <div className='container mx-auto max-w-4xl px-4 py-8'>
      <div className='mb-8 text-center'>
        <motion.h1
          className='text-3xl font-bold text-gray-800 dark:text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className='mt-2 text-gray-600 dark:text-gray-400'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>
      <AnimatePresence>
        {selectedItem ? (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
          />
        ) : (
          <motion.div
            className='grid auto-rows-[100px] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {mediaItems.map((item) => (
              <motion.div
                key={item.id}
                className={`relative cursor-pointer overflow-hidden rounded-xl ${item.span}`}
                onClick={() => setSelectedItem(item)}
                variants={{
                  hidden: { y: 50, scale: 0.9, opacity: 0 },
                  visible: {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { type: 'spring', stiffness: 350, damping: 25 }
                  }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <MediaItem item={item} className='h-full w-full' />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InteractiveBentoGallery

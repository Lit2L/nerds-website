import React from 'react'

import { cn } from '@/lib/utils'

export const BentoGrid = ({
  className,
  children
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',

        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoOverlayCard = ({
  className,
  title,
  description,
  imageUrl,
  hoverImageUrl
}: {
  className?: string
  title: string
  description: string
  imageUrl: string
  hoverImageUrl: string
}) => {
  return (
    <div
      className={cn(
        'group relative flex h-56 w-full cursor-pointer flex-col justify-end overflow-hidden rounded-xl border border-neutral-200 bg-cover bg-center shadow-xl transition-all duration-500 dark:border-neutral-800',
        className
      )}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Hover Effect */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100'
        style={{ backgroundImage: `url(${hoverImageUrl})` }}
      />
      <div className='relative z-10 bg-black/50 p-4 text-white'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='mt-1 text-sm'>{description}</p>
      </div>
    </div>
  )
}

export function BentoOverlayDemo() {
  const overlayItems = [
    {
      title: 'Warrior’s Path',
      description: 'Embrace the journey of discipline and mastery.',
      imageUrl:
        'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      hoverImageUrl:
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif'
    },
    {
      title: 'The Art of Combat',
      description: 'Study the techniques and strategies of champions.',
      imageUrl: 'https://source.unsplash.com/600x400/?karate',
      hoverImageUrl: 'https://source.unsplash.com/600x400/?muaythai'
    },
    {
      title: 'Inner Strength',
      description: 'Power comes from within. Train the mind and body.',
      imageUrl: 'https://source.unsplash.com/600x400/?strength',
      hoverImageUrl: 'https://source.unsplash.com/600x400/?spirituality'
    },
    {
      title: 'Precision & Speed',
      description: 'Refine your skills with precision and lightning speed.',
      imageUrl: 'https://source.unsplash.com/600x400/?kickboxing',
      hoverImageUrl: 'https://source.unsplash.com/600x400/?martialarts'
    }
  ]

  return (
    <BentoGrid className='container mx-auto max-w-4xl'>
      {overlayItems.map((item, i) => (
        <BentoOverlayCard
          key={i}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          hoverImageUrl={item.hoverImageUrl}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  )
}

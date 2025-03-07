import React from 'react'
import Image from 'next/image'
import { Header } from '@radix-ui/react-accordion'
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn
} from '@tabler/icons-react'

import { cn } from '@/lib/utils'

import { BentoGrid, BentoGridItem } from './ui/bento-grid'

export function BentoGridDemo() {
  return (
    <BentoGrid className='container mx-auto max-w-4xl'>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          image={item.image}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  )
}
const Skeleton = () => (
  <div className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800'>
    <div className='flex h-full w-full flex-col items-center justify-center space-y-2 p-4'>
      <div className='h-12 w-12 rounded-full bg-neutral-300 dark:bg-neutral-700' />
      <div className='h-4 w-24 bg-neutral-300 dark:bg-neutral-700' />
      <div className='h-4 w-24 bg-neutral-300 dark:bg-neutral-700' />
    </div>
  </div>
)
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
    image: '/_static/images/landscape/team1.png'
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: 'sdfsdfk',
    icon: <IconArrowWaveRightUp className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className='h-4 w-4 text-neutral-500' />
  }
]

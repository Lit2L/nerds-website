import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils'

interface KokonutCardProps {
  title?: string
  subtitle?: string
  image?: string
  badge?: {
    text: string
    variant: 'pink' | 'indigo' | 'orange'
  }
  href?: string
}

export default function KokonutCard({
  title = 'Modern Design Systems',
  subtitle = 'Explore the fundamentals of contemporary UI design',
  image = '/_static/photos/2.png',
  badge = { text: 'New', variant: 'orange' },
  href = '#'
}: KokonutCardProps) {
  return (
    <Link href={href} className='group block w-full max-w-[280px]'>
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl',
          'bg-white/80 dark:bg-zinc-900/80',
          'backdrop-blur-xl',
          'border border-zinc-200/50 dark:border-zinc-800/50',
          'shadow-xs',
          'transition-all duration-300',
          'hover:shadow-md',
          'hover:border-zinc-300/50 dark:hover:border-zinc-700/50'
        )}
      >
        <div className='relative h-[320px] overflow-hidden'>
          <Image src={image} alt={title} fill className='object-cover' />
        </div>

        <div
          className={cn(
            'absolute inset-0',
            'bg-linear-to-t from-black/90 via-black/40 to-transparent'
          )}
        />

        <div className='absolute right-3 top-3'>
          <span
            className={cn(
              'rounded-full px-2.5 py-1 text-xs font-medium',
              'bg-white/90 text-zinc-800',
              'dark:bg-zinc-900/90 dark:text-zinc-200',
              'backdrop-blur-md',
              'shadow-xs',
              'border border-white/20 dark:border-zinc-800/50'
            )}
          >
            {badge.text}
          </span>
        </div>

        <div className='absolute bottom-0 left-0 right-0 p-5'>
          <div className='flex items-center justify-between gap-3'>
            <div className='space-y-1.5'>
              <h3 className='text-lg font-semibold leading-snug text-white dark:text-zinc-100'>
                {title}
              </h3>
              <p className='line-clamp-2 text-sm text-zinc-200 dark:text-zinc-300'>
                {subtitle}
              </p>
            </div>
            <div
              className={cn(
                'rounded-full p-2',
                'bg-white/10 dark:bg-zinc-800/50',
                'backdrop-blur-md',
                'group-hover:bg-white/20 dark:group-hover:bg-zinc-700/50',
                'group transition-colors duration-300'
              )}
            >
              <ArrowUpRight className='h-4 w-4 text-white transition-transform duration-300 group-hover:-rotate-12' />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

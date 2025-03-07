import Link from 'next/link'

import { FeatureCarouselDemo } from '../FeatureCarouselDemo'
import { Icons } from '../shared/icons'
import { Button } from '../ui/button'

export default function CarouselSection() {
  return (
    <section className='w-full'>
      <div className='container'>
        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='group relative overflow-hidden rounded-2xl border-4 border-black bg-background p-5 md:p-8'>
            <div className='absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-purple-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10'>
              <FeatureCarouselDemo />
            </div>
            <div className='relative'>
              <div className='relative flex size-12 rounded-2xl border border-border shadow-sm *:relative *:m-auto *:size-6'>
                <Icons.ellipsis />
              </div>
              <p className='mt-6 pb-6 text-muted-foreground'>
                Next.js is a React framework that enables server-side rendering
                and static site generation for React applications. It is a
                powerful tool that allows you to build fast and scalable web
                applications.
              </p>
              <div className='-mb-5 flex gap-3 border-t border-muted py-4 md:-mb-7'>
                <Button
                  variant='secondary'
                  size='sm'
                  // rounded='xl'
                  className='px-4'
                >
                  <Link href='/' className='flex items-center gap-2'>
                    <span>Visit the site</span>
                    <Icons.bookOpen className='size-4' />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className='group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8'>
            <div className='absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-purple-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10'></div>
            <div className='relative'>
              <div className='relative flex size-12 rounded-2xl border border-border shadow-sm *:relative *:m-auto *:size-6'>
                <Icons.dashboard />
              </div>
              <p className='text-muted- foreground mt-6 pb-6'>
                Tailwind CSS is a utility-first CSS framework that helps you
                build modern web applications. It provides low-level utility
                classes that allow you to create custom designs without writing
                any CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

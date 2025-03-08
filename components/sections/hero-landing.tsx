import Link from 'next/link'

import { env } from '@/env.mjs'
import { siteConfig } from '@/config/site'
import { cn, nFormatter } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'

import { BgMediaDemo } from '../BgMedia'
import { FlipWordsComponent } from '../FlipWordsComponent'
import { InstagramIcon } from '../icons/instagram'
import GradualSpacing from '../ui/gradual-spacing'

export default async function HeroLanding() {
  return (
    <section id='hero' className='min-h-screen w-full'>
      <div className='relative z-10 h-[900px] w-full bg-black/90 text-center'>
        <BgMediaDemo />

        <div className='z-40 flex h-full w-full flex-col items-center justify-center gap-20'>
          <Link
            href='https://instagram.com/nerdsfighting'
            className={cn(
              buttonVariants({
                variant: 'default',
                size: 'sm'
                // rounded: 'full'
              }),
              'px-4'
            )}
            target='_blank'
          >
            <span className='mx-3 text-lg md:text-2xl'>🥊</span>
            <span className='mg:text-sm flex text-xs'>
              Kickboxing & Martial Arts Training
            </span>{' '}
            <InstagramIcon />
          </Link>

          <GradualSpacing text='NERDS FIGHTING' />

          <p
            className='max-w-2xl text-balance leading-normal text-slate-200 sm:text-xl sm:leading-8'
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            Contact us for more information on our privates, classes, and events
          </p>

          <div
            className='flex justify-center space-x-2 md:space-x-4'
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Link
              href='/#waitlist'
              prefetch={true}
              className={cn(buttonVariants({ size: 'lg' }), 'gap-2')}
            >
              <span>Free 2-Day Pass</span>
              <Icons.arrowRight className='size-4' />
            </Link>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  size: 'lg'
                  // rounded: 'full'
                }),
                'px-5'
              )}
            >
              <Icons.gitHub className='mr-2 size-4' />
              <p>
                <span className='hidden sm:inline-block'>Members Area</span>
              </p>
            </Link>
          </div>
          <FlipWordsComponent />
        </div>
      </div>
    </section>
  )
}

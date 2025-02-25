import Link from 'next/link'

import { env } from '@/env.mjs'
import { siteConfig } from '@/config/site'
import { cn, nFormatter } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'

import { BgMediaDemo } from '../BgMedia'
import FeatureCarouselDemo from '../FeatureCarouselDemo'
import { InstagramIcon } from '../shared/instagram'
import GradualSpacing from '../ui/gradual-spacing'

export default async function HeroLanding() {
  return (
    <section className='w-full space-y-6 py-12 sm:py-20 lg:py-20'>
      <div className='container flex flex-col items-center gap-5 text-center'>
        <Link
          href='https://instagram.com/nerdsfighting'
          className={cn(
            buttonVariants({ variant: 'default', size: 'sm', rounded: 'full' }),
            'px-4'
          )}
          target='_blank'
        >
          <span className='mr-3'>🥊</span>
          <span className='hidden md:flex'>
            Kickboxing & Martial Arts Training
          </span>{' '}
          <InstagramIcon />
        </Link>
        <GradualSpacing text='NERDS FIGHTING' />
        {/* <h1 className='text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]'>
          <span className='text-gradient_indigo-purple font-extrabold'>
            SaaS Starter
          </span>
        </h1> */}

        <p
          className='max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8'
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          One step could change your life. Chill and come on in
        </p>

        <div className='absolute top-20 -z-10 w-full opacity-70'>
          <BgMediaDemo />
        </div>
        <FeatureCarouselDemo />
        <div
          className='flex justify-center space-x-2 md:space-x-4'
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <Link
            href='/pricing'
            prefetch={true}
            className={cn(
              buttonVariants({ size: 'lg', rounded: 'full' }),
              'gap-2'
            )}
          >
            <span>Go Pricing</span>
            <Icons.arrowRight className='size-4' />
          </Link>
          <Link
            href={siteConfig.links.github}
            target='_blank'
            rel='noreferrer'
            className={cn(
              buttonVariants({
                variant: 'outline',
                size: 'lg',
                rounded: 'full'
              }),
              'px-5'
            )}
          >
            <Icons.gitHub className='mr-2 size-4' />
            <p>
              <span className='hidden sm:inline-block'>Star on</span>
            </p>
          </Link>
        </div>

        <p className=''>
          If you&apos;re looking for the best source for kickboxing and martial
          arts training, then look no further than Nerds Fighting.
        </p>
      </div>
    </section>
  )
}

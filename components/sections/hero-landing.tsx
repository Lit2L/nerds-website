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
    <section className='min-h-screen w-full border-4'>
      <div className='container relative z-10 flex h-[800px] w-full flex-col items-center justify-center space-y-9 border-4 text-center'>
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
        <BgMediaDemo />
        <p
          className='max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8'
          style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
        >
          Come on over to Nerds Fighting and we&apos;ll take you where you need
        </p>

        {/* <div className='top-30 absolute -z-10 w-full opacity-70'>
          <BgMediaDemo />
        </div> */}

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
      </div>
    </section>
  )
}

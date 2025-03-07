import Link from 'next/link'

import { features } from '@/config/landing'
import { Button } from '@/components/ui/button'
import { HeaderSection } from '@/components/shared/header-section'
import { Icons } from '@/components/shared/icons'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'

import { FeatureCarouselDemo } from '../FeatureCarouselDemo'

export default function Features() {
  return (
    <section className='bg-black/50'>
      <div className='py-28 pb-6'>
        <MaxWidthWrapper>
          <HeaderSection
            label='Welcome to the gym'
            title='What We Do.'
            subtitle='Training Should be fun, engaging, challenging, and most of all rewarding. We offer a variety of classes and training options to help you reach your goals.'
          />
          <div className='py-20'>
            <FeatureCarouselDemo />
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}

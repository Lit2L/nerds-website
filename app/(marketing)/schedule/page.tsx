import Image from 'next/image'
import Link from 'next/link'

import { getCurrentUser } from '@/lib/session'
import { getUserSubscriptionPlan } from '@/lib/subscription'
import { constructMetadata } from '@/lib/utils'
import { PricingCards } from '@/components/pricing/pricing-cards'
import { PricingFaq } from '@/components/pricing/pricing-faq'
import { Schedule } from '@/components/sections/schedule'
import { HeaderSection } from '@/components/shared/header-section'

export const metadata = constructMetadata({
  title: 'Pricing - NERDS_FIGHTING',
  description: 'Explore our subscription plans.'
})

export default async function SchedulePage() {
  return (
    <div className='flex w-full flex-col gap-16 py-8 md:py-8'>
      <hr className='container' />
      <Schedule />s{' '}
    </div>
  )
}

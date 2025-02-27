import FeatureCarouselDemo from '@/components/FeatureCarouselDemo'
import BentoGrid from '@/components/sections/bentogrid'
import Features from '@/components/sections/features'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'
import Testimonials from '@/components/sections/testimonials'

export default function IndexPage() {
  return (
    <div className=''>
      <HeroLanding />
      <Testimonials />
      {/* <Features /> */}
      <Schedule />
    </div>
  )
}

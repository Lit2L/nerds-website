import LoadingCarousel from '@/components/ui/loading-carousel'
import { FeatureCarouselDemo } from '@/components/FeatureCarouselDemo'
import CarouselSection from '@/components/sections/carousel'
import Features from '@/components/sections/features'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'
import Testimonials from '@/components/sections/testimonials'

export default function IndexPage() {
  return (
    <div className=''>
      <HeroLanding />
      <LoadingCarousel />
      {/* <FeatureCarouselDemo /> */}
      <Features />
      <Testimonials />
      <Schedule />
    </div>
  )
}

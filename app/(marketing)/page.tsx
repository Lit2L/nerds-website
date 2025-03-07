import BentoGallery from '@/components/BentoGallery'
import { MarqueeText } from '@/components/MarqueeText'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'
import Testimonials from '@/components/sections/testimonials'
import Waitlist from '@/components/trial-class'

export default function IndexPage() {
  return (
    <div className=''>
      <HeroLanding />
      <MarqueeText />
      <BentoGallery />
      {/* <Features /> */}
      <Testimonials />
      {/* <LoadingCarousel /> */}
      {/* <VideosCarousel /> */}
      {/* <FilmsRoll /> */}
      <Waitlist mode='light' />
      {/* <FeatureCarouselDemo /> */}

      <Schedule />
    </div>
  )
}

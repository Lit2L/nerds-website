import { MarqueeText } from '@/components/MarqueeText'
import BentoGallery from '@/components/sections/BentoGallery'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'
import Testimonials from '@/components/sections/testimonials'
import Waitlist from '@/components/waitlist'

export default function IndexPage() {
  return (
    <div className=''>
      <HeroLanding />
      <MarqueeText />
      <BentoGallery />
      <Testimonials />
      <Waitlist mode='light' />
      <Schedule />
    </div>
  )
}

import PaddingContainer from '@/components/layout/padding-container'
import { MarqueeText } from '@/components/MarqueeText'
import BentoGallery from '@/components/sections/BentoGallery'
import HeroLanding from '@/components/sections/hero-landing'
import { Schedule } from '@/components/sections/schedule'
import Testimonials from '@/components/sections/testimonials'
import Waitlist from '@/components/waitlist'

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <MarqueeText />
      <BentoGallery />
      <Testimonials />
      <Waitlist mode='light' />
      <Schedule />
    </>
  )
}

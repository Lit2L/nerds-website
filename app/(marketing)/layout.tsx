import { NavMobile } from '@/components/layout/mobile-nav'
import { NavBar } from '@/components/layout/navbar'
import { SiteFooter } from '@/components/layout/site-footer'

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className='relative flex min-h-screen max-w-full flex-col overflow-hidden'>
      <div className='bgImage'></div>
      <NavMobile />
      <NavBar scroll={true} />
      <main className='flex-1'>{children}</main>
      <SiteFooter />
    </div>
  )
}

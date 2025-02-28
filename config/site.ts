import type { SidebarNavItem, SiteConfig } from 'types'
import { env } from '@/env.mjs'

const site_url = env.NEXT_PUBLIC_APP_URL

export const siteConfig: SiteConfig = {
  name: 'NERDS FIGHTING',
  description:
    'Huntington Beach and Fountain Valley Kickboxing and Martial Arts Training',
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: 'https://instagram.com/nerdsfighting',
    github: 'https://github.com/larryll/next-saas-stripe-starter'
  },
  mailSupport: 'larryl@nerdsfighting.com'
}

export const footerLinks: SidebarNavItem[] = [
  {
    title: 'Home Page',
    items: [
      { title: 'Home', href: '#' },
      { title: 'Pricing', href: '/pricing' },
      { title: 'Schedule', href: '/#schedule' },
      { title: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'User',
    items: [
      { title: 'Home', href: '/' },
      { title: 'Dashboard', href: '/dashboard' },
      { title: 'Customers', href: '#' },
      { title: 'Changelog', href: '#' }
    ]
  },
  {
    title: 'Docs',
    items: [
      { title: 'Introduction', href: '#' }
      // { title: 'Installation', href: '#' },
      // { title: 'Components', href: '#' },
      // { title: 'Code Blocks', href: '#' }
    ]
  }
]

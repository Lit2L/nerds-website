import { SidebarNavItem, SiteConfig } from 'types'
import { env } from '@/env.mjs'

const site_url = env.NEXT_PUBLIC_APP_URL

export const siteConfig: SiteConfig = {
  name: 'NERDs_FIGHTing',
  description:
    'Huntington Beach and Fountain Valley Kickboxing and Martial Arts Training',
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: 'https://instagram.com/nerdsfighting',
    github: 'https://github.com/mickasmt/next-saas-stripe-starter'
  },
  mailSupport: 'larryl@nerdsfighting.com'
}

export const footerLinks: SidebarNavItem[] = [
  {
    title: 'Company',
    items: [
      { title: 'Home', href: '#' },
      { title: 'Enterprise', href: '#' },
      { title: 'Terms', href: '/terms' },
      { title: 'Privacy', href: '/privacy' }
    ]
  },
  {
    title: 'Product',
    items: [
      { title: 'Security', href: '#' },
      { title: 'Customization', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Changelog', href: '#' }
    ]
  },
  {
    title: 'Docs',
    items: [
      { title: 'Introduction', href: '#' },
      { title: 'Installation', href: '#' },
      { title: 'Components', href: '#' },
      { title: 'Code Blocks', href: '#' }
    ]
  }
]

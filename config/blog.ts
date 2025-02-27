export const BLOG_CATEGORIES: {
  title: string
  slug: 'news' | 'education'
  description: string
}[] = [
  {
    title: 'News',
    slug: 'news',
    description: 'Updates and announcements from Next SaaS Starter.'
  },
  {
    title: 'Education',
    slug: 'education',
    description: 'Educational content about SaaS management.'
  }
]

export const BLOG_AUTHORS = {
  larryll: {
    name: 'larryll',
    image: '/_static/avatars/larryll.png',
    twitter: 'miickasmt'
  },
  shadcn: {
    name: 'shadcn',
    image: '/_static/avatars/shadcn.jpeg',
    twitter: 'shadcn'
  }
}

'use client'

import { Marquee } from '@/components/ui/marquee'

export function MarqueeText() {
  return (
    <div className='space-y-8'>
      <Marquee text='WELCOME TO NERDS FIGHTING!' />
    </div>
  )
}

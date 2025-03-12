import * as React from 'react'
import Link from 'next/link'

import { footerLinks, siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { NewsletterForm } from '../forms/newsletter-form'
import { Icons } from '../shared/icons'
import { ModeToggle } from '../ui/mode-toggle'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn('border-t bg-slate-600 dark:bg-slate-600', className)}
    >
      <div className='container grid max-w-6xl grid-cols-2 gap-6 py-14 md:grid-cols-5'>
        {footerLinks.map((section) => (
          <div key={section.title}>
            <span className='text-sm font-semibold text-slate-100 underline underline-offset-8'>
              {section.title}
            </span>
            <ul className='mt-4 list-inside space-y-3'>
              {section.items?.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className='text-sm text-slate-200 hover:text-primary'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className='col-span-full flex flex-col items-end sm:col-span-1 md:col-span-2'>
          {/* <NewsletterForm /> */}
        </div>
      </div>

      <div className='border-t py-4'>
        <div className='container flex max-w-6xl items-center justify-between'>
          {/* <span className="text-muted-foreground text-sm">
            Copyright &copy; 2024. All rights reserved.
          </span> */}
          <p className='text-left text-sm text-muted-foreground'>
            Reviews on{' '}
            <Link
              href={siteConfig.links.instagram}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Yelp
            </Link>
            . Located at{' '}
            <Link
              href='https://williamsmma.com'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Williams MMA Academy
            </Link>
            {/* . Illustrations by{' '}
            <Link
              href='https://popsy.co'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Nerds
            </Link> */}
          </p>

          <div className='flex items-center gap-3'>
            {/* <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              <Icons.gitHub className='size-5' />
            </Link> */}
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}

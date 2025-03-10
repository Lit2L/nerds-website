import Image from 'next/image'

import { testimonials } from '@/config/landing'
import { HeaderSection } from '@/components/shared/header-section'

export default function Testimonials() {
  return (
    <section>
      <div className='container flex max-w-6xl flex-col gap-10 py-32 sm:gap-y-16'>
        <HeaderSection
          label='Testimonials'
          title='What our members are saying'
          subtitle='.'
        />

        <div className='column-1 gap-5 space-y-5 md:columns-2 lg:columns-3'>
          {testimonials.map((item) => (
            <div className='break-inside-avoid' key={item.name}>
              <div className='relative rounded-xl border bg-black/20'>
                <div className='flex flex-col px-4 py-5 sm:p-6'>
                  <div>
                    <div className='relative mb-4 flex items-center gap-3'>
                      <span className='relative inline-flex size-10 shrink-0 items-center justify-center rounded-full text-base'>
                        <Image
                          width={100}
                          height={100}
                          className='size-full rounded-full border'
                          src={item.image}
                          alt={item.name}
                        />
                      </span>
                      <div className=''>
                        <p className='text-sm font-semibold text-slate-700 dark:text-white'>
                          {item.name}
                        </p>
                        <p className='text-sm text-slate-500 dark:text-white/50'>
                          {item.job}
                        </p>
                      </div>
                    </div>
                    <q className='text-slate-600 dark:text-white/80'>
                      {item.review}
                    </q>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

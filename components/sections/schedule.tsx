import { Calendar } from 'lucide-react'
import { GiPunchingBag } from 'react-icons/gi'
import { MdSportsMartialArts } from 'react-icons/md'

import { HeaderSection } from '@/components/shared/header-section'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'

import { Card, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'

const classes = [
  {
    id: 1,
    title: 'Sunday',
    description: 'Muay Thai',
    attributes: 'Sparring, Muay Thai, Heavy Bag, Mitts & Thai Pads.',
    schedule: [{ id: 1, day: 'Sun', time: '6:00am - 7:30am' }]
  },
  {
    id: 2,
    title: 'Monday',
    description: 'Kickboxing, Boxing',
    level: 'Beginners, Intermediate, Advanced',
    attributes: 'Conditioning, Cardio, Kickboxing, Heavy Bag, Focus Mitts.',
    schedule: [{ id: 1, day: 'Mon', time: '6:00am - 7:15am' }]
  },

  {
    id: 3,
    title: 'Tuesday',
    description: 'Kickboxing, Boxing',
    attributes: 'Conditioning, Cardio, Kickboxing, Heavy Bag, Focus Mitts.',
    schedule: [
      {
        id: 1,
        day: 'Wed',
        time: '6:00am - 7:15am'
      }
    ]
  },
  {
    id: 4,
    title: 'Thursday',
    description: 'Kickboxing, Boxing',
    attributes: 'Conditioning, Heavy Bag, Focus Mitts.',
    schedule: [
      {
        id: 1,
        day: 'Thurs',
        time: '6:00am - 7:15am'
      }
    ]
  },

  {
    id: 5,
    title: 'Saturday',
    description: 'Muay Thai',
    attributes: 'Muay Thai, Sparring, Technique, Heavy Bag, Mitts & Thai Pads.',
    schedule: [{ id: 1, day: 'Friday', time: '6:00am - 7:30am' }]
  }
]

export function Schedule() {
  return (
    <section id='schedule' className='container'>
      <div className='font-genos bg-[radial-gradient(circle_400px_at_50%_375px,#181818,transparent)] py-32 dark:bg-[radial-gradient(circle_400px_at_50%_350px,#144437,transparent)]'>
        <MaxWidthWrapper>
          <HeaderSection
            label='Nerds Fighting'
            title='Class Schedule'
            subtitle=''
          />

          <div className='mt-9 flex flex-wrap justify-center gap-6'>
            {classes &&
              classes.map((item) => (
                <Card
                  key={item.id}
                  className='flex h-52 w-64 flex-col rounded-xl border-zinc-700 bg-zinc-900/95 p-3 shadow-xl shadow-neutral-500/70 dark:bg-zinc-800 dark:shadow-neutral-800/70'
                >
                  <CardTitle className='p-1'>
                    <div className='flex items-center justify-between gap-3'>
                      <MdSportsMartialArts className='size-6 text-white' />
                      <h3 className='font-genos uppercase text-emerald-400 dark:text-green-300'>
                        {item.title}
                      </h3>
                    </div>
                  </CardTitle>
                  <Separator className='my-1 bg-emerald-500' />

                  <div className='flex flex-col items-center'>
                    {item.schedule.map((schedule) => (
                      <div
                        key={schedule.id}
                        className='flex w-full items-center justify-between border-b border-white/10'
                      >
                        <Calendar className='w-1/16 mx-2 size-4 text-emerald-600 dark:text-emerald-500' />
                        <div
                          key={schedule.time}
                          className='flex w-full items-center justify-between py-1'
                        >
                          <span className='w-1/16 text-md font-semibold text-white dark:text-gray-300'>
                            {schedule.time}
                          </span>

                          <p className='w-3/16 text-md font-genos m-1 flex font-bold capitalize tracking-wide text-neutral-300/90 dark:text-green-500'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}

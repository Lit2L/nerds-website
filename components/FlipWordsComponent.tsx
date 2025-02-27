import React from 'react'

import { FlipWords } from '@/components/ui/flip-words'

export function FlipWordsComponent() {
  const words = [
    // 'Safe and Welcoming Environment',
    // 'No Bullies, No Meatheads',
    // 'Workouts made for maximum fun',
    // 'Burn Calories and get ripped',
    // 'Learn to Strike and Look good doing it',
    // 'Improve Cardio & Conditioning',
    // 'Gain Confidence in Yourself'
    'Be Bold',
    'Be New',
    'Be You',
    'At NERDS FIGHTING'
  ]

  return (
    <div className='flex h-10 w-96 items-center justify-center'>
      <p className='text-center font-heading text-2xl font-bold text-emerald-600 dark:text-emerald-500'>
        +++
      </p>
      <FlipWords words={words} />
    </div>
  )
}

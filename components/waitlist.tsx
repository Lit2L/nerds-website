'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

type Mode = 'light' | 'dark'

interface Props {
  mode: Mode
}

const Waitlist: React.FC<Props> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Here you can write the Logic to send email
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.trim() === '' || !email.includes('@')) return

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
      } else {
        console.error('Failed to submit email')
      }
    } catch (error) {
      console.error('Error submitting email:', error)
    }
  }

  const isEmailValid = email.trim() !== '' && email.includes('@')

  return (
    <div id='waitlist' className='flex items-center justify-center py-20'>
      <InView triggerOnce threshold={0.5}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`${mode === 'dark' ? 'border border-zinc-600 bg-black' : 'bg-white'} mx-auto w-full max-w-md rounded-xl ${submitted ? 'p-1' : 'p-6'} z-50`}
          >
            {!submitted ? (
              <div>
                <div className='text-center'>
                  <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
                    transition={{ duration: 0.5 }}
                    className={`${mode === 'dark' ? 'text-white' : 'text-gray-800'} mb-4 text-3xl font-bold`}
                  >
                    Get Your Free Class!
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-6 text-sm`}
                  >
                    Confirm your email to get a free class and we&apos;ll see
                    you soon!
                  </motion.p>
                </div>
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className='flex items-center justify-center'
                  onSubmit={handleSubmit}
                >
                  <input
                    type='email'
                    placeholder='IAMNERD@NERD.com'
                    className='focus:shadow-outline w-full flex-1 appearance-none rounded-l-full border border-gray-300 bg-white px-4 py-2 text-sm leading-tight text-gray-700 focus:outline-none'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <motion.button
                    type='submit'
                    disabled={!isEmailValid}
                    className={`rounded-r-full bg-slate-800 px-6 py-[6px] text-sm font-semibold text-white focus:outline-none ${isEmailValid ? 'cursor-pointer border border-zinc-300 hover:bg-opacity-90' : 'cursor-not-allowed'} ${!isEmailValid && 'border border-zinc-300'}`}
                  >
                    CLAIM FREE CLASS
                  </motion.button>
                </motion.form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='text-center'
              >
                <motion.h2
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`${mode === 'dark' ? 'text-white' : 'text-gray-800'} mb-4 mt-8 text-2xl font-bold`}
                >
                  You are on the waitlist
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`${mode === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-6`}
                >
                  Thank you for using Serenity UI.
                  <br /> We&apos;ll keep you updated.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className={`${mode === 'dark' ? 'text-gray-300' : 'text-slate-800'} mx-auto mb-6 flex size-6 h-20 w-20 items-center justify-center rounded-full`}
                  >
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </div>
        )}
      </InView>
    </div>
  )
}

export default Waitlist

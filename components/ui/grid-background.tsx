'use client'

import * as React from 'react'

export function GridBackground() {
  return (
    <div
      className='pointer-events-none fixed inset-0 -z-10'
      style={{
        background: 'radial-gradient(circle at center, #b2d5fe, #181818)'
      }}
    >
      <div
        className='absolute inset-0 -z-10'
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.02) 2px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 2px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
    </div>
  )
}

import {
  Black_Ops_One,
  Inter as FontSans,
  Genos as GenosFont,
  Orbitron,
  Urbanist
} from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const fontGenos = GenosFont({
  subsets: ['latin'],
  variable: '--font-genos'
})

export const fontOrbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron'
})

export const fontHeading = localFont({
  src: './CalSans-SemiBold.woff2',
  variable: '--font-heading'
})

export const fontGeist = localFont({
  src: './GeistVF.woff2',
  variable: '--font-geist'
})

export const fontCrosstown = localFont({
  src: './CrossTown-yg9Z.ttf',
  variable: '--font-crosstown'
})

export const fontAwakenning = localFont({
  src: './AwakenningPersonalUse-DOLPD.ttf',
  variable: '--font-awakenning',
  display: 'swap'
})

export const fontLongslide = localFont({
  src: './Longslidedemo-7O38B.ttf',
  variable: '--font-longslide',
  display: 'swap'
})

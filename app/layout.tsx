import '@/styles/globals.css'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

import { cn, constructMetadata } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'
import { Analytics } from '@/components/analytics'
import ModalProvider from '@/components/modals/providers'
import { TailwindIndicator } from '@/components/tailwind-indicator'

import {
  fontAwakenning,
  fontCrosstown,
  fontGeist,
  fontHeading,
  fontLongslide,
  fontOrbitron,
  fontSans
} from '../public/fonts'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = constructMetadata()

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen w-full overflow-hidden font-sans antialiased',
          fontSans.variable,
          fontOrbitron.variable,
          fontHeading.variable,
          fontGeist.variable,
          fontCrosstown.variable,
          fontAwakenning.variable,
          fontLongslide.variable
        )}
      >
        <SessionProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>{children}</ModalProvider>
            <Analytics />
            <Toaster richColors closeButton />
            <TailwindIndicator />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

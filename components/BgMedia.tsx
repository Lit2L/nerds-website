import { BackgroundMedia } from './ui/bg-media'

export function BgMediaDemo() {
  return (
    <div className='absolute -z-10 h-full w-full opacity-50'>
      <BackgroundMedia
        type='video'
        variant='light'
        src='https://hm2v1jwhss.ufs.sh/f/6Zw2kVOf5iZUQ3vSyHdFbleQ9ZChJkgSMNqx2ArXvtOfI6dV'
      />
    </div>
  )
}

import { BackgroundMedia } from './ui/bg-media'

export function BgMediaDemo() {
  return (
    <div className='absolute top-0 -z-10 h-[800px] w-full opacity-90'>
      <BackgroundMedia
        type='video'
        variant='dark'
        src='https://hm2v1jwhss.ufs.sh/f/6Zw2kVOf5iZUQ3vSyHdFbleQ9ZChJkgSMNqx2ArXvtOfI6dV'
      />
    </div>
  )
}

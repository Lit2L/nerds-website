import { BackgroundMedia } from './ui/bg-media'

export function BgMediaDemo() {
  return (
    <div className='absolute -z-10 w-full overflow-hidden'>
      <BackgroundMedia
        type='video'
        variant='light'
        src='/_next-video/mike_mitts.mp4'
      />
    </div>
  )
}

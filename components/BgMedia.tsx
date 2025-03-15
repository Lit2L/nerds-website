import { BackgroundMedia } from './ui/bg-media'

export function BgMediaDemo() {
  return (
    <div className='absolute top-0 -z-10 h-[800px] w-full opacity-100'>
      <BackgroundMedia
        type='video'
        variant='dark'
        src='/video/mike_mitts.mp4'
      />
    </div>
  )
}

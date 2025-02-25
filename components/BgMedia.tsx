import { BackgroundMedia } from './ui/bg-media'

export function BgMediaDemo() {
  return (
    <div className='relative max-h-[30rem] w-full border-4'>
      <div className='absolute w-full overflow-hidden bg-black/50'>
        <BackgroundMedia
          type='video'
          variant='dark'
          speed={1}
          src='/videos/mike_mitts.mp4'
        />
      </div>
    </div>
  )
}

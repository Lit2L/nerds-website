import { BackgroundMedia } from './ui/bg-media'

export function BgMediaDemo() {
  return (
    <div className='absolute w-full overflow-hidden bg-black/60'>
      <BackgroundMedia
        type='video'
        variant='light'
        src='/_next-video/mike_mitts_edit.mp4'
      />
    </div>
  )
}

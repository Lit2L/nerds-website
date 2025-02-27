import { BackgroundMedia } from './ui/bg-media'

export function BgMediaDemo() {
  return (
    <div className='absolute w-full overflow-hidden bg-black/60'>
      <BackgroundMedia
        type='video'
        variant='light'
        src='https://stream.mux.com/r7lSSIOQGJ53l602hU023DiVpk48yMqK2xS2006N4fAQC00.m3u8'
      />
    </div>
  )
}

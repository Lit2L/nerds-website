import { ScrambleHover } from '@/components/ui/scramble-hover'

function ScrambleTextHover() {
  return (
    <div className='flex h-full w-full flex-col space-x-6 space-y-2 overflow-hidden bg-background p-12 text-xl font-normal sm:p-20 sm:text-3xl md:p-24 md:text-5xl'>
      <ScrambleHover
        text={'NERDS FIGHTING'}
        scrambleSpeed={50}
        maxIterations={8}
        useOriginalCharsOnly={true}
        className='cursor-pointer'
      />
      <ScrambleHover
        text={'new characters'}
        scrambleSpeed={50}
        maxIterations={8}
        useOriginalCharsOnly={false}
        className='cursor-pointer'
        characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
      />
    </div>
  )
}

export { ScrambleTextHover }

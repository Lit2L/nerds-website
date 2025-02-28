import { cn } from '@/lib/utils'
import { FeatureCarousel } from '@/components/ui/feature-card'

export const metadata = {
  title: 'Feature Carousel',
  description:
    'An animated carousel component that showcases features with smooth transitions and interactive elements.',
  component: FeatureCarouselDemo,
  source: 'https://github.com/your-repo/components/animate/feature-card.tsx'
}

export function FeatureCarouselDemo() {
  return (
    <div className='mx-auto w-full max-w-5xl'>
      <div className='rounded-[34px] bg-neutral-700 p-2'>
        <div className='relative z-10 grid w-full rounded-[28px] border-4 bg-neutral-950 p-2'>
          <FeatureCarousel
            title='Interactive Feature Demo'
            description='Showcase your features with smooth animations and transitions'
            // Example classes for responsive layout
            welcomeimg1Class={cn(
              'pointer-events-none w-full absolute border border-stone-100/10 dark:border-stone-700/50 rounded-t-[24px] transition-all duration-500 ', // Base classes
              'left-[5%] top-[50%] md:top-[30%] md:left-[68px]', // Responsive classes,
              'md:group-hover:translate-y-2' // Hover classes
            )}
            welcomeimg2Class={cn(
              'pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700/50 rounded-t-[24px] transition-all duration-500 overflow-hidden', // Base classes
              'left-[5%] top-[50%] md:top-[30%] md:left-[68px]', // Responsive classes,
              'md:group-hover:translate-y-2' // Hover classes
            )}
            step1img1Class={cn(
              'pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50',
              'max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[25%] top-[57%] md:left-[35px] md:top-[29%]',
              'md:group-hover:translate-y-2'
            )}
            step1img2Class={cn(
              'pointer-events-none w-[60%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden',
              'max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[53%] md:top-[21%] md:left-[calc(50%+35px+1rem)]',
              'md:group-hover:-translate-y-6'
            )}
            step2img1Class={cn(
              'pointer-events-none w-[50%] rounded-t-[24px] overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700',
              'max-md:scale-[160%] left-[25%] top-[69%] md:left-[35px] md:top-[30%]',
              'md:group-hover:translate-y-2'
            )}
            step2img2Class={cn(
              'pointer-events-none w-[40%] rounded-t-[24px] border border-stone-100/10 dark:border-stone-700 transition-all duration-500 rounded-2xl overflow-hidden',
              'max-md:scale-[140%] left-[70%] top-[53%] md:top-[25%] md:left-[calc(50%+27px+1rem)]',
              'md:group-hover:-translate-y-6'
            )}
            step3imgClass={cn(
              'pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden',
              'left-[5%] top-[50%] md:top-[30%] md:left-[68px]'
            )}
            step4imgClass={cn(
              'pointer-events-none w-[90%] border border-stone-100/10 dark:border-stone-700 rounded-t-[24px] transition-all duration-500 overflow-hidden',
              'left-[5%] top-[50%] md:top-[30%] md:left-[68px]'
            )}
            image={{
              welcomeimg1: '/_static/images/landscape/location.png',
              welcomeimg2: '/_static/images/landscape/team3.png',
              step1light1: '/_static/images/square/drill1.png',
              step1light2: '/_static/images/mobile/team9.png',
              step2light1: '/_static/images/mobile/mike_mitts1.png',
              step2light2: '/_static/images/landscape/training-hill.png',
              step3light: '/_static/images/landscape/bman1.png',
              step4light: '/_static/images/wes2.png',
              alt: 'Feature showcase'
            }}
            bgClass='bg-gradient-to-tr from-blue-900/90 to-purple-800/90'
          />
        </div>
      </div>
    </div>
  )
}

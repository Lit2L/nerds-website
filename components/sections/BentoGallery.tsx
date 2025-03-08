import InteractiveBentoGallery from '../InteractiveBentoGallery'

const mediaItems = [
  {
    id: 1,
    title: 'Park Your Ride',
    desc: 'Say hello',
    imageUrl: '/_static/images/landscape/location.png',
    videoUrl: '/video/warmup1.mp4',
    span: 'col-span-2'
  },
  {
    id: 2,
    title: 'Step Inside',
    desc: 'Start warming up',
    imageUrl: '/_static/images/square/empty.png',
    videoUrl: '/video/warmup1.mp4',
    span: 'col-span-2'
  },
  {
    id: 3,
    title: 'Warm Up',
    desc: 'Loosen up your muscles',
    imageUrl: '/_static/images/landscape/mitts_andrew.png',
    videoUrl: '/video/warmup2.mp4',
    span: 'col-span-2'
  },
  {
    id: 4,
    title: 'Get to Work',
    desc: 'Push yourself',
    imageUrl: '/_static/images/landscape/coach1.png',
    videoUrl: '/video/mike_mitts.mp4',
    span: 'col-span-2'
  },
  {
    id: 5,
    title: 'Push Your Teammates',
    desc: 'Push your teammates',
    imageUrl: '/_static/images/square/mitts1.png',
    videoUrl: '/video/teaps.mp4',
    span: 'col-span-2'
  },
  {
    id: 6,
    title: 'Find Your Rhythm, Find Your Flow',
    desc: 'Work Together.',
    imageUrl: '/_static/images/landscape/team4.png',
    videoUrl: '/video/shifting_coach_slowmo.mp4',
    span: 'col-span-2'
  }
]

export default function BentoGallery() {
  return (
    <div className='min-h-screen bg-transparent'>
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title='The First Step is the Hardest'
        description='What to expect on your first day'
      />
    </div>
  )
}

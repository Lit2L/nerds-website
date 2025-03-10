import InteractiveBentoGallery from '../InteractiveBentoGallery'

const mediaItems = [
  {
    id: 1,
    title: 'Stop into Williams MMA Academy',
    desc: 'Walk in and say hi',
    imageUrl: '/_static/images/landscape/location.png',
    videoUrl: '/video/welcome.mp4',
    span: 'col-span-2'
  },
  {
    id: 2,
    title: 'Wrap-up, Shadowbox and Stretch',
    desc: 'Relax and Loosen up',
    imageUrl: '/_static/images/square/empty.png',
    videoUrl: '/video/shadowbox.mp4',
    span: 'col-span-2'
  },
  {
    id: 3,
    title: 'Warm Up',
    desc: 'Get your blood flowing with our world famous warm-up',
    imageUrl: '/_static/images/landscape/lines.png',
    videoUrl: '/video/warmup1.mp4',
    span: 'col-span-2'
  },
  {
    id: 4,
    title: 'Practice Time',
    desc: 'Push Yourself, Push your Team',
    imageUrl: '/_static/images/landscape/team4.png',
    videoUrl: '/video/bigclass.mp4',
    span: 'col-span-2'
  },
  {
    id: 5,
    title: 'Learn from the Coach, Learn from your Team',
    desc: 'Most Importantly, Work Together.',
    imageUrl: '/_static/images/landscape/shield1.png',
    videoUrl: '/video/teaps.mp4',
    span: 'col-span-2'
  },
  {
    id: 6,

    title: 'Find your Flow, Find your Rhythm',
    desc: 'Shadow Boxing',
    imageUrl: '/_static/images/landscape/coach1.png',
    videoUrl: '/video/shifting_coach_slowmo.mp4',
    span: 'col-span-2'
  },
  {
    id: 7,
    title: 'Drill Techniques into Muscle Memory',
    desc: 'Until Desired Results Are Achieved.',
    imageUrl: '/_static/images/square/mitts1.png',
    videoUrl: '/video/kwa11.mp4',
    span: 'col-span-2'
  },
  {
    id: 8,
    title: 'Warm Down and Finish up',
    desc: 'Shadow Boxing',
    imageUrl: '/_static/images/square/drill2.png',
    videoUrl: '/video/abs.mp4',
    span: 'col-span-2'
  }
]

export default function BentoGallery() {
  return (
    <div className='relative min-h-screen w-full bg-transparent'>
      <div className='bgImage' />
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title='The First Step is the Hardest'
        description='What to expect on your first day'
      />
    </div>
  )
}

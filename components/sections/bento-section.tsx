import InteractiveBentoGallery from '@/components/InteractiveBentoGallery'

const mediaItems = [
  {
    id: 1,
    title: 'Beautiful Mountains',
    desc: 'A scenic view of mountains during sunset.',
    imageUrl: '/_static/images/landscape/team1.png',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    span: 'col-span-1'
  },
  {
    id: 2,
    title: 'Ocean Waves',
    desc: 'Relaxing waves hitting the shore.',
    imageUrl: '/_static/images/landscape/team1.png',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    span: 'col-span-2'
  },
  {
    id: 3,
    title: 'City Lights',
    desc: 'Night view of a vibrant cityscape.',
    imageUrl: '/_static/images/landscape/team1.png',
    videoUrl: '/video/combo.mp4',
    span: 'col-span-1'
  },
  {
    id: 4,
    title: 'Running River',
    desc: 'Peaceful river flowing through a forest.',
    imageUrl: '/_static/images/landscape/team1.png',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    span: 'col-span-2'
  }
]

export default function BentoSection() {
  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title='Explore Our Media Gallery'
        description='A curated collection of stunning visuals and relaxing videos.'
      />
    </div>
  )
}

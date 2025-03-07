import VideoCarousel from './ui/video-carousel'

const VideosCarousel = () => {
  const videos = [
    {
      id: 1,
      title: 'Cosmic Journey',
      src: '/video/teaps.mp4',
      srcLow: '/video/teaps.mp4',
      description:
        'A masked traveler ventures through the cosmos in search of an elusive truth.'
    },
    {
      id: 2,
      title: 'Ocean Depths',
      src: '/video/combo.mp4',
      srcLow: '/video/combo.mp4',
      description:
        'A girl waits on a secluded shore, anticipating the arrival of the masked traveler.'
    },
    {
      id: 3,
      title: 'Nature Whisper',
      src: '/video/combo.mp4',
      srcLow: '/video/combo.mp4',
      description:
        'The traveler, immersed in nature, experiences profound emotions and goosebumps.'
    },
    {
      id: 4,
      title: 'Urban Rhythm',
      src: '/video/combo.mp4',
      srcLow: '/video/combo.mp4',
      description: 'A girl and boy eagerly wait for the traveler to arrive.'
    }
  ]

  return (
    <div>
      <VideoCarousel videos={videos} />
    </div>
  )
}

export default VideosCarousel

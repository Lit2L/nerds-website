import React from 'react'

import FilmRoll from './ui/film-roll'

const videos = [
  '/video/Roll4.mp4',
  '/video/Roll1.mp4',
  '/video/Roll3.mp4',
  '/video/Roll2.mp4'
]

const FilmsRoll = () => {
  return <FilmRoll videos={videos} />
}

export default FilmsRoll

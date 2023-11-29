import React from 'react'
import { Image_URL } from '../utils/constants'

const MovieCard = ({posterPath, title}) => {
  if(!posterPath) return null;
  return (
    <div className='w-24 md:w-32'>
        <img src={Image_URL+posterPath} alt={title} />
    </div>
  )
}

export default MovieCard
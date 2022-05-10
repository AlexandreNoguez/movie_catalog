import React from 'react'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'
import './styles.css'

const MovieStars: React.FC = () => {
  return (
    <div className="dsmovie-stars-container">
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStarHalf />
      <IoIosStarOutline />
    </div>
  )
}

export default MovieStars

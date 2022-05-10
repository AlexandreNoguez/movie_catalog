import React from 'react'
import MovieStars from '../MovieStars'
import './styles.css'

const MovieScore: React.FC = () => {
  const score = 3.8
  const count = 13

  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : '-'}
      </p>
      <MovieStars />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  )
}

export default MovieScore

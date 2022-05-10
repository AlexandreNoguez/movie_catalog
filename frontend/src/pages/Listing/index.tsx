import React from 'react'
import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'

// import { Container } from './styles';

const Listing: React.FC = () => {
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Listing

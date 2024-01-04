import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className=''>

            <h1 className='text-white text-2xl md:text-5xl'>{title}</h1>

            <div className='flex  overflow-x-auto '>


                <div className='flex gap-5  '>


                    {
                        movies?.map(movie => (<MovieCard key={movie.id} posterPath={movie?.poster_path} />))
                    }
                </div>
            </div>
        </div>


    )
}

export default MovieList
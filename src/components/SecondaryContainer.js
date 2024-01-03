import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies)
    return (



        movies && (

            <div className=' bg-[#141414]'>

                <div className='z-20 relative'>
                    <div className=' '>

                        <MovieList title={"Popular on Netflix"} movies={movies?.nowPlayingMovies} />
                        <MovieList title={"Trending"} movies={movies?.popularMovies} />
                        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                        <MovieList title={"Award-winnig Films"} movies={movies?.nowPlayingMovies} />
                    </div>

                </div>
            </div>

        )


    )
}

export default SecondaryContainer


{/*
movielist-popular
movielist-Trending
movielist-popular
movielist-popular


*/}
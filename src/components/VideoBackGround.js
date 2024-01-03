import React from 'react'

import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer';


const VideoBackGround = ({ movieID }) => {


    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    useMovieTrailer(movieID);



    //fecth trailer api
    return (
        <div className=' h-screen'>
            <iframe className='w-full   aspect-video  -z-10' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
        </div>
    )
}

export default VideoBackGround
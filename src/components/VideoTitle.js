import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video p-5 pl-16 pt-[22%] absolute text-white bg-gradient-to-r from-black '>
            <h1>{title}</h1>
            <p className='w-[45%] mb-10'>{overview}</p>
            <div>
                <button className='text-white border border-white mr-5 '><i class="fa-solid fa-play"></i>Play</button>
                <button className='text-white border border-white'><i class="bi bi-info-circle"></i>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
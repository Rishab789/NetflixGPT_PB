import React from 'react'



const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' aspect-video p-5 pl-16 pt-[22%] absolute text-white bg-gradient-to-r from-black '>
            <h1 className='text-5xl w-[45%]'>{title}</h1>
            <p className='w-[45%] mb-10'>{overview}</p>
            <div>
                <button className='text-black bg-white px-6 rounded-md py-2 mr-5 '><i className="fa-solid fa-play text-black"></i>Play</button>
                <button className='text-white px-6 rounded-md py-2 mr-5 hover:bg-[#9c9c9cb3]  bg-[#6d6d6eb3] font-bold '><i className="bi bi-info-circle"></i>More Info</button>
            </div>
        </div>
    )
}
// 

export default VideoTitle
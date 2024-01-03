import React from 'react'
import GPTSeacrhBar from './GPTSeacrhBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'

const GPTSearch = () => {
    return (
        <div className='absolute bg-[url("../public/assets/netflix-banner.jpg")] w-full'>
            <GPTSeacrhBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GPTSearch
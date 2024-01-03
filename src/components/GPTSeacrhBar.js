import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GPTSeacrhBar = () => {
    const langLey = useSelector(store => store.config.lang)
    return (
        <div className=" h-screen  w-full flex justify-center items-start pt-20  ">
            {/* <div className='w-full flex justify-center bg-black '> */}

            <form className='bg-[#141414] w-[40%] flex  items-center p-1 '>
                <input type='text' placeholder={lang[langLey].gptSearchPlaceholder} className='py-3 px-3 w-full ' />
                <button className='bg-red-600 font-semibold text-white py-3 px-6'>{lang[langLey].search}</button>
            </form>
        </div>
        // </div>
    )
}

export default GPTSeacrhBar

// bg-[url('../public/assets/netflix-banner.jpg')]
// w-full flex justify-center bg-black bg-opacity-60
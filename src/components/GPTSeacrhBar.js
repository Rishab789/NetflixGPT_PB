import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'
import openai from '../utils/openai'

const GPTSeacrhBar = () => {
    const langLey = useSelector(store => store.config.lang)
    const searchText = useRef(null)

    const handleGPTSearchClick = async () => {
        console.log("searcch text", searchText.current.value)

        const gptQuery = "act as a movie recomenation system and suggest some movies for the query :" + searchText.current.value + ".only give me names of 5 movies, comma separated like the example result given ahead. Example result: movieName1, movieName2, movieName3, movieName4, movieName5"

        const gptSearch = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

    }
    return (
        <div className=" h-screen  w-full flex justify-center items-start md:pt-20  pt-32">
            {/* <div className='w-full flex justify-center bg-black '> */}

            <form onSubmit={(e) => e.preventDefault()} className='bg-none md:bg-[#141414] flex-col md:flex-row w-full md:w-[40%] flex  items-center p-1 '>
                <input ref={searchText} type='text' placeholder={lang[langLey].gptSearchPlaceholder} className='py-3 px-3 w-full mb-2 md:mb-0' />
                <button onClick={handleGPTSearchClick} className='bg-red-600 font-semibold text-white py-3 px-6'>{lang[langLey].search}</button>
            </form>
        </div>
        // </div>
    )
}

export default GPTSeacrhBar

// bg-[url('../public/assets/netflix-banner.jpg')]
// w-full flex justify-center bg-black bg-opacity-60
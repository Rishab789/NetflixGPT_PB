import React, { useEffect, useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO } from '../utils/constants'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import GPTSearch from './GPTSearch'
import { toggleSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Browse = () => {
    const showGptSeacrh = useSelector(store => store.gpt.showGptSearch)

    const [menuToggle, setMenuToggle] = useState(false)


    const dispatch = useDispatch()
    useNowPlayingMovies()
    usePopularMovies()
    const user = useSelector(store => store.user)
    const navigate = useNavigate()

    const handleSignout = () => {


        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/')
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });





    }

    const handleGPTSearchClick = () => {
        //Toggle GPT Search
        dispatch(toggleSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    const handleSlider = () => {
        setMenuToggle(!menuToggle)

    }



    return (
        <section className=''>
            {menuToggle && <div className=' md:hidden flex flex-col items-center pt-20  text-white  absolute  h-[60%] bg-slate-800 w-[50%]'>
                <ul className='flex flex-col items-start w-full pl-5'>
                    <li className='text-white mb-2' onClick={handleSignout}>Sign Out</li>
                </ul>
            </div>}
            <div className='flex justify-between items-center w-full z-20  px-4 absolute'>
                <div className='block md:hidden'>
                    <i className="fa-solid fa-bars text-white text-3xl" onClick={handleSlider}></i>
                </div>
                <img src={LOGO} alt="Logo" className='md:h-24 md:w-52 h-16 w-32 md:-ml-0 -ml-16' />
                <div className='flex md:gap-5 gap-0'>
                    {/* Dynamically fetching the languge and mapping */}
                    {showGptSeacrh && <select className='py-1 px-3' onChange={
                        handleLanguageChange
                    }>
                        {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)

                        }
                    </select>}
                    <div>
                        <button onClick={handleGPTSearchClick} className='text-white md:bg-red-600 py-2 px-5 font-bold shadow-sm'>{showGptSeacrh ? (<i class="fa-solid fa-house"></i>) : "GPT Search"}</button>
                    </div>
                    <button className='text-white font-bold md:block hidden' onClick={handleSignout}>
                        Sign Out
                    </button>
                </div>
            </div>
            <div>
                {
                    showGptSeacrh ? <GPTSearch /> : <> <MainContainer />
                        <SecondaryContainer /></>
                }


            </div>
        </section>

    )
}

export default Browse
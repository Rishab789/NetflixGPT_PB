import React, { useEffect } from 'react'
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


    return (
        <section>
            <div className='flex justify-between items-center w-full z-20  px-4 absolute'>
                <img src={LOGO} alt="Logo" className='h-24 w-52' />
                <div className='flex gap-5'>
                    {/* Dynamically fetching the languge and mapping */}
                    {showGptSeacrh && <select className='py-1 px-3' onChange={
                        handleLanguageChange
                    }>
                        {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)

                        }
                    </select>}
                    <div>
                        <button onClick={handleGPTSearchClick} className='text-white bg-red-600 py-2 px-5 font-bold shadow-sm'>{showGptSeacrh ? "Home Page" : "GPT Search"}</button>
                    </div>
                    <button className='text-white font-bold' onClick={handleSignout}>
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
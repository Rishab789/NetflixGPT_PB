import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO } from '../utils/constants'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
    useNowPlayingMovies()
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


    return (
        <section>
            <div className='flex justify-between items-center w-full z-20  px-4 absolute'>
                <img src={LOGO} alt="Logo" className='h-24 w-52' />
                <div>
                    <button className='text-white font-bold' onClick={handleSignout}>
                        Sign Out
                    </button>
                </div>
            </div>
            <div>
                <MainContainer />
                <SecondaryContainer />
            </div>
        </section>

    )
}

export default Browse
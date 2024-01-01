import React, { useState, useRef } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const [isSignin, setIsSignIn] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    function signInHandler() {
        setIsSignIn(!isSignin)

    }

    function submitHandler(e) {
        e.preventDefault()
    }

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handleButtonClick = () => {
        let message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return;

        if (!isSignin) {
            //sign in logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {

                    // Signed up  logic
                    const user = userCredential.user;

                    updateProfile(auth, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const { uid, displayName, email } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                        // Profile updated!
                        // navigate('/browse')
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // ..
                });

        }
        else {

            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // navigate('/browse')

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });



        }




    }




    return (
        <div className=' '>
            <Header />

            <div className="bg-[url('../public/assets/netflix-banner.jpg')]  h-full  w-full flex  justify-center items-center ">

                <div className='w-full flex justify-center bg-black bg-opacity-60'>

                    <form onSubmit={submitHandler} className='w-[35%]  bg-black bg-opacity-75 flex flex-col justify-center rounded-[.25rem] mt-32 '>
                        <h1 className='text-white pl-16 text-3xl font-semibold pb-10 pt-10'>{isSignin ? 'Sign In' : 'Sign Up'}</h1>
                        <div className='flex flex-col justify-center items-center'>

                            {!isSignin && (<input ref={name} type='text' placeholder='Enter your name' className='w-[66%] p-2 m-2 rounded-[.25rem] py-3 mb-7 bg-[#333333] text-white font-semibold ' />)

                            }
                            <div className='w-full flex flex-col justify-center items-center '>

                                <input ref={email} type='text' placeholder='Email or phone number' className='w-[66%] p-2  m-2 rounded-[.25rem] py-3  bg-[#333333] text-white font-semibold ' />
                                <p className='text-[#e87c03]  text-sm  w-[70%] pl-2'>{errorMessage}</p>

                            </div>

                            <div className='w-full flex flex-col justify-center items-center mb-10'>
                                <input ref={password} type='text' placeholder='Password' className='w-[66%] p-2 m-2 rounded-[.25rem] py-3  bg-[#333333] text-white font-semibold' />
                                <p className='text-[#e87c03]   w-[70%] text-sm pl-2'>{errorMessage}</p>
                            </div>
                            <button className='w-[66%] p-2 py-3 m-2 text-white font-bold bg-[#e50914]  rounded-[.25rem]' onClick={handleButtonClick} >{isSignin ? 'Sign In' : 'Sign Up'}</button>
                            <div className='flex gap-[6rem] mb-3'>
                                <div>

                                    <input type='checkbox' /><span className='text-white'>Remember me</span>
                                </div>
                                <p className='text-white'>Need help?</p>
                            </div>
                            <div className='flex items-start  w-[70%] pb-40'>
                                <p className='text-[#979797] mr-2'>New to Netflix?</p>
                                <button className='text-white' onClick={signInHandler}>{isSignin ? 'Sign In now' : 'Sign up now'}</button>
                            </div>
                        </div>

                    </form>
                </div>



            </div>
        </div>



    )
}

export default Login
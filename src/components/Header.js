import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, displayName, email } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate('/browse')

                // ...
            } else {
                // User is signed out
                // ...

                dispatch(removeUser())
                navigate('/')
            }
        });

        //unsubcribe when header component unmounts. other wise it will render all the time when header renders.
        return () => unsubscribe()

    }, [])
    return (
        <div className="absolute md:left-4 z-30 ">
            <img
                className="md:h-24 md:w-52 h-16 w-32"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />

        </div>

    )
}
// 

export default Header
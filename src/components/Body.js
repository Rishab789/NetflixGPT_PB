import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'




const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])

    ////ADDING onAuthStateChanged API FOR STATE CHANGE like what will happen after an user sign in/sign up/sign out.



    return (
        <div><RouterProvider router={appRouter} /></div>
    )


}

export default Body
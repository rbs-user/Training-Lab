import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Singup from '../components/Singup'
import Login from '../components/Login'
import Forgotpassword from '../components/Forgotpassword'

const Router = createBrowserRouter([
    {
        path : "/signup",
        element : <Singup />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/forgotpassword",
        element : <Forgotpassword />
    },
    {
        path : "*",
        element : <Navigate to="/signup" />
    }
])

export default Router
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './App'

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={LandingPage} />
                </Routes>
            </BrowserRouter >
        </>)
}

export default AppRoutes
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={App} />
                </Routes>
            </BrowserRouter >
        </>)
}

export default AppRoutes
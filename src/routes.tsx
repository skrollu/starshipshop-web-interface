import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
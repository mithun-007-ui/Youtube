import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Shorts from '../pages/Shorts.jsx'
import Download from '../pages/Download.jsx'
import Profile from '../pages/Profile.jsx'
import Subscription from '../pages/Subscription.jsx'
import Music from '../pages/Music.jsx'

function AppRoutes() {
  return (
    <>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/shorts' element={<Shorts />} />
            <Route path='/downloads' element={<Download />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/subscripition' element={<Subscription />} />
            <Route path='/Music' element={<Music />} />
        </Routes>
    </>
  )
}

export default AppRoutes
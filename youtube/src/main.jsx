import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home.jsx';
import Shorts from '../src/pages/Shorts.jsx';
import Download from '../src/pages/Download.jsx';
import Profile from '../src/pages/Profile.jsx';
import Subscription from '../src/pages/Subscription.jsx';
import Music from '../src/pages/Music.jsx'
import Logut from '../src/pages/Logut.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shorts' element={<Shorts />} />
            <Route path='/downloads' element={<Download />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/subscripition' element={<Subscription />} />ubscription
            <Route path='/Music' element={<Music />} />
            <Route path='/logut' element={<Logut />} />
        </Routes>
  </StrictMode>
  </BrowserRouter>
)

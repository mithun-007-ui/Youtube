import React from 'react'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import AppRoute from './Routes/AppRoutes.jsx'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Header /> 
      <div className='layout'>
        <Navbar /> 
        <AppRoute />
      </div>
    </div>
  )
}

export default App

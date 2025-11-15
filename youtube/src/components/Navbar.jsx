import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom' 
import Header from './Header.jsx' 
import { SiYoutubeshorts } from "react-icons/si";
import { FaArrowDown } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { LuListMusic } from "react-icons/lu";


function Navbar() {
  return (
    
     <nav  className='Navbar'>
        <Header/><br/><br/>
        <ul>
            <li  className='dgfj'>
                 <IoHome />
               <Link to="/">Home</Link>
            </li>
            <li  className='dgfj'>
                <SiYoutubeshorts />
                <Link to="/shorts" >Shorts</Link>
               
            </li>
            <li className='dgfj'>
                <LuListMusic />
                <Link to='/Music'>Music</Link>  
            </li>
            <li className='dgfj'>
                <FaArrowDown />
                <Link to="/downloads">Downloads</Link>
            </li> 
            <li className='dgfj'>
                <IoPersonCircleSharp />
                <Link to ="/profile">Profile</Link>
            </li>  
            <li className='dgfj'>
                <MdSubscriptions />
                <Link to ="/subscripition">Subscription</Link>
            </li>
        </ul>
     </nav>
  )
}

export default Navbar
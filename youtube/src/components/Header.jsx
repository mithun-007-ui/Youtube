import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch} from "react-icons/fa";
import './Header.css';
import Logo from '../assets/logo.png';

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="header">
      <div className="headerLeft">
        <GiHamburgerMenu className="menuIcon" />
        <img src={Logo} alt="YouTube Logo" className="headerLogo" />
      </div>
      <div className="headerCenter">
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="searchButton" />
        </div>
      </div>
      <div>
        <button ></button>
      </div>
      </div>
    
  );
}

export default Header;

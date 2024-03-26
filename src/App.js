import React from 'react';
import './App.css'; 
import { FaSearch } from 'react-icons/fa'; 
import Logo from './assets/logo.png'; 
import styles from "./App.module.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search an album " />
        <FaSearch className="search-icon" />
      </div>
      <div className="feedback-button">
        <button>Give Feedback</button>
      </div>
    </nav>
  );
};

export default Navbar;

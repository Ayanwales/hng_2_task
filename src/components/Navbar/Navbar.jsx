import React from "react";
import './Navbar.css'
import Image from '../../images/tv.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = ({setSearchValues,searchValues,handleSubmit}) => {
  return (
    <nav className="nav-class">
      <Link to='/' className="nav-icon">
        <img
          src={Image}
          className="img-nav" width='50'height='50'
          alt="logo"
        />
        <h1 className="logo-header">MovieBox</h1>
      </Link>
      <div className="searchMovie">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input" value={searchValues} 
            onChange={(e)=> setSearchValues(e.target.value)}
             placeholder ='what did you want to watch'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
        </form>
      </div>
      <div className="menu-list">
        <Link to='/'>Sign In</Link>
        <div className="red-bg">
          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

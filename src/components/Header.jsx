import React from "react";
import {  Link,NavLink } from "react-router-dom";
import noodle from "../images/noodle.png";
import hambuger from "../images/hambuger.png";
import  salat from "../images/salat.png";
import './Header.css'

const Header = ({ getSearch, updateSearch, search }) => {
  return (
    <div className="container-header">

      <Link to={"/"} className="logo">
        <img src={noodle} alt="" className="carrot" />
        <p> Recipes</p>
      </Link>

      <nav className="navbar">

      <NavLink to={'/cuisine/italian'} >
      <img src={salat} alt="" srcset="" />

      Italian
      </NavLink>

      <NavLink to={'/cuisine/asian'}>
        <img src={noodle} alt="" srcset="" />
      Asian
      </NavLink>

      <NavLink to={'/cuisine/american'}>
      <img src={hambuger} alt="" srcset="" />
        
      American
      </NavLink>

      </nav>

      </div>
    
  );
};

export default Header;

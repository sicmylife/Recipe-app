import React from "react";
import {  Link,NavLink } from "react-router-dom";
import noodle from "../images/noodle.png";
import hambuger from "../images/hambuger.png";
import  salat from "../images/salat.png";
import  carrot from "../images/carrot.png";
import './Header.css'
import NavBar from "./NavBar";

const Header = ({ getSearch, updateSearch, search }) => {
  return (
    <div className="container-header">

      <Link to={"/"} className="logo">
        <img src={carrot} alt="" className="carrot" />
        <p> Recipes</p>
      </Link>

      <NavBar/>

      </div>
    
  );
};

export default Header;

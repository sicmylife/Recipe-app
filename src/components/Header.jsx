import React from "react";
import { Link } from "react-router-dom";
import carrot from "../images/carrot.png";
import './Header.css'

const Header = ({ getSearch, updateSearch, search }) => {
  return (
    <div className="container">
      <Link to={"/"} className="logo">
        <img src={carrot} alt="" className="carrot" />
        <p>Recipes</p>
      </Link>

    
    </div>
  );
};

export default Header;

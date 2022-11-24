import {  NavLink } from "react-router-dom";
import noodle from "../images/noodle.png";
import hambuger from "../images/hambuger.png";
import  salat from "../images/salat.png";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import classes from './NavBar.module.css'


const NavBar = () => {
  return (
    <nav className={classes.Navbar}>
<Navigation />
<MobileNavigation />
    </nav>
  )
}

export default NavBar
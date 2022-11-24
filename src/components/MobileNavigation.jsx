import Navlinks from "./Navlinks"
import classes from './NavBar.module.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useState } from "react"



const MobileNavigation = () => {
    const [open, setOpen] = useState(false)
    const hamburger = <AiOutlineMenu onClick={()=> setOpen(!open)} className={classes.hamburger} size='40px' />
    const closeIcon = <AiOutlineCloseCircle onClick={()=> setOpen(!open)} className={classes.hamburger} size='40px' />
   
  return (
    <nav className={classes.MobileNavigation}>
        {open ? closeIcon : hamburger}
   {open && <Navlinks />} 
    </nav>

  )
}

export default MobileNavigation
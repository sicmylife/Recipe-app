import {  NavLink } from "react-router-dom";
import noodle from "../images/noodle.png";
import hambuger from "../images/hambuger.png";
import  salat from "../images/salat.png";


const Navlinks = () => {
  return (
    <div className="navbar">

        
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
    </div>
  )
}

export default Navlinks
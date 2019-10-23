import React from "react";
import {NavLink} from 'react-router-dom';

import "./Navbar.css";
import logo from '../../img/logo.png';

import ToggleButton from "../BurgerMenu/ToggleButton";


const Navbar = (props) => (
  <div className="main-nav">
    <div className="container-nav">
    <h2 className="nav-items"><img src={logo} alt=""/>{props.title}</h2>
        <div className="spacer"></div>
        <ul className="nav-menu">
          <li><NavLink className="nav-menu__link" exact to="/react-app" >Home</NavLink></li>
          <li><NavLink className="nav-menu__link" to="/about" >About</NavLink></li>
          <li><NavLink className="nav-menu__link" to="/destination" >Where to go?</NavLink></li>
          <li><NavLink className="nav-menu__link" to="/contact" >Contact</NavLink></li>
        </ul>
        <div>
          <ToggleButton click={props.toggleClickHandler} />
        </div>
    </div>
  </div>

);

export default Navbar;

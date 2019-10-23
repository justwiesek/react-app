import React from "react";

import {NavLink} from 'react-router-dom';
import './BurgerMenu.css';

const burgerMenu = props => {

    let drawerClasses = "side-nav";
    if (props.show) {
        drawerClasses = "side-nav open";
    }

    return (
        <nav className={drawerClasses}>
        <ul className="side-menu">
          <li><NavLink className="side-menu__link" exact to="/" onClick={props.click} >Home</NavLink></li>
          <li><NavLink className="side-menu__link" exact to="/about" onClick={props.click} >About</NavLink></li>
          <li><NavLink className="side-menu__link" exact to="/destination" onClick={props.click} >Where to go?</NavLink></li>
          <li><NavLink className="side-menu__link" exact to="/contact" onClick={props.click} >Contact</NavLink></li>
        </ul>
    </nav>
    )
    
};


export default burgerMenu;


import './Header.css';
import React from 'react';
import { NavLink } from "react-router-dom";

export const Header = () => {

    return (
        <div id="topHeader">
            <NavLink to="/">
                <div id="logo">
                    <h2 id="logo-h2">Knit-Love</h2>
                </div>
            </NavLink>
            <nav id="topNav">
                <ul className="list-general" id="header-ul">
                    <li><NavLink>Contact</NavLink></li>
                    <li><NavLink>About</NavLink></li>
                    <li id="logIn"><NavLink>Log In</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
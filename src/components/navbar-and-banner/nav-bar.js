import React from "react";
import classes from "./nav-bar.module.css";
import logo from "../../images/logo.png";

export const NavBar = () => (
    <header className={classes.header}>
        <a href="/" className={classes.logo}>
            <img src={logo} alt="logo" />
        </a>
        <input type="checkbox" id="menu-btn" />
        <label className={classes.menuIcon} htmlFor="menu-btn">
            <span></span>
        </label>
        <ul className={classes.menu}>
            <li>
                <a href="#clients">Nos Clients</a>
            </li>
            <li>
                <a href="#clients">Notre Offre</a>
            </li>
            <li>
                <a href="#studio">Le Studio</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </header>
);

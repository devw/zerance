import React from "react";
import classes from "./nav-bar.module.css";
import logo from "../../images/logo.png";

export const NavBar = () => (
    <ul className={classes.navigation}>
        <img src={logo} alt=""></img>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Products</a>
        </li>
        <li>
            <a href="#">Contact</a>
        </li>
    </ul>
);

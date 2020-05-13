import React from "react";
import { Banner } from "./banner";
import { NavBar } from "./nav-bar";
import cat from "../../images/cat.png";
import classes from "./index.module.css";

export const Top = () => (
    <div className={classes["grid-container"]}>
        <div>
            <img src={cat} alt="cat" />
        </div>
        <div>
            <NavBar></NavBar>
        </div>
        <div>
            <Banner></Banner>
        </div>
    </div>
);

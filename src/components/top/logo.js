import React from "react";
import classes from "./logo.module.css";
import cat from "../../images/cat.png";

export const Logo = () => (
    <div className={classes.logo}>
        <img src={cat} alt="cat" />
    </div>
);

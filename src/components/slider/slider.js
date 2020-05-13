import React from "react";
import classes from "./slider.module.css";
import { Slide1 } from "./slide-1";
import { Slide2 } from "./slide-2";

export const Slider = () => (
    <div className={classes.slider}>
        <Slide2></Slide2>
        <Slide1></Slide1>
    </div>
);

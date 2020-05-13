import React from "react";
import classes from "./slide.module.css";
import slide1 from "../../images/artboard_2.jpg";

export const Slide2 = () => (
    <div id="slide-2" className={classes.slide}>
        <img src={slide1} alt="" />
        <span>not working</span>
        <a href="#slide-1">
            <i style={{ transform: "rotate(-45deg)" }}></i>
        </a>
        <div></div>
    </div>
);

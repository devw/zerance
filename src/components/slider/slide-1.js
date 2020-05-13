import React from "react";
import classes from "./slide.module.css";
import { SlideCaption } from "./slide-caption";
import slide1 from "../../images/artboard_1.jpg";

export const Slide1 = () => (
    <div id="slide-1" className={classes.slide}>
        <img src={slide1} alt="" />
        <SlideCaption></SlideCaption>
        <a href="#slide-2">
            <i style={{ transform: "rotate(135deg)" }}></i>
        </a>
        <div></div>
    </div>
);

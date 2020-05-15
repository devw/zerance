import React from "react";
import classes from "./slider.module.css";
import { SlideCaption } from "./slide-caption";
import slide2 from "../../images/artboard_1.jpg";
import slide1 from "../../images/artboard_2.jpg";

export const Slider = () => (
    <div id="offre" className={classes.slider}>
        <div id="slide-2">
            <img src={slide1} alt="" />
            <SlideCaption></SlideCaption>
            <a href="#slide-1">
                <i style={{ transform: "rotate(-45deg)" }}></i>
            </a>
            <div></div>
        </div>
        <div id="slide-1">
            <img src={slide2} alt="" />
            <SlideCaption></SlideCaption>
            <a href="#slide-2">
                <i style={{ transform: "rotate(135deg)" }}></i>
            </a>
            <div></div>
        </div>
    </div>
);

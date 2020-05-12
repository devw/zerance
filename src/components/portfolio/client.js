import React from "react";
import img from "../../images/calque_4.png";
import classes from "./client.module.css";

export const Client = () => (
    <a className={classes.client} href="https://yokoshop.com">
        <img src={img} alt="" />
    </a>
);

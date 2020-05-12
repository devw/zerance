import React from "react";
import { Client } from "./client";
import classes from "./portfolio.module.css";

export const Portfolio = () => (
    <div className={classes.portfolio}>
        <div className={classes.clients}>
            <div>Nos client sont Geniaux !</div>
            {Array.from(Array(15)).map((x, i) => (
                <Client key={i}></Client>
            ))}
        </div>
    </div>
);

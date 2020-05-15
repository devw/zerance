import React from "react";
import { Item } from "./item";
import classes from "./portfolio.module.css";

export const Portfolio = () => (
    <div id="clients" style={{ "background-color": "#000", padding: "40px 0" }}>
        <div className={classes.portfolio}>
            <h2>Nos client sont Geniaux !</h2>
            {Array.from(Array(20)).map((x, i) => (
                <Item key={i}></Item>
            ))}
        </div>
    </div>
);

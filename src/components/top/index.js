import React from "react";
import { Banner } from "./banner";
import { NavBar } from "./nav-bar";
import { Cat } from "./cat";

export const Top = () => (
    <div>
        <Cat></Cat>
        <NavBar></NavBar>
        <Banner></Banner>
    </div>
);

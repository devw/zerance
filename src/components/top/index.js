import React from "react";
import { Banner } from "./banner";
import { NavBar } from "./nav-bar";
import { Logo } from "./logo";

export const Top = () => (
    <div>
        <Logo></Logo>
        <NavBar></NavBar>
        <Banner></Banner>
    </div>
);

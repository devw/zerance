import React from "react";
import "./App.css";
import { Top } from "./components/navbar-and-banner/";
import { Portfolio } from "./components/portfolio/portfolio";
import { Slider } from "./components/slider/slider";
import { TextInfinite } from "./components/text-infinite";

function App() {
    return (
        <>
            <Top></Top>
            <Portfolio></Portfolio>
            <Slider></Slider>
            <TextInfinite></TextInfinite>
        </>
    );
}

export default App;

import React from "react";
import "./App.css";
import { Top } from "./components/top/";
import { Portfolio } from "./components/portfolio/portfolio";
import { Slider } from "./components/slider/slider";
import { TextInfinite } from "./components/text-infinite";

function App() {
    return (
        <>
            <Top></Top>
            <Portfolio></Portfolio>
            <Slider></Slider>
            {/* <div class="row">
                <Portfolio></Portfolio>
            </div>
            <div class="row">
                <Slider></Slider>
            </div>
            <div class="row">
                <TextInfinite></TextInfinite>
            </div> */}
        </>
    );
}

export default App;

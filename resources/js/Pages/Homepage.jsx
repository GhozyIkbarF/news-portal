import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../Components/Navbar/index";
import BackToTop from "../Components/Button/index";
import Home from "./Home";


export default function Homepage(props) {
    console.log(props);
    return (
        <BrowserRouter>
            <div className="flex flex-col items-center min-h-screen">
                <Navbar />
                <BackToTop />
                <div className="w-4/5">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        {/* <Route path="about" element={<About />} /> */}
                    </Routes>
                </div>

                <div className="flex flex-col flex-wrap justify-center align-center ">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </BrowserRouter>

    )
}

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
                    <p className="lg:text-9xl sm:text-sm md:text-6xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore omnis nesciunt beatae culpa sit totam sunt vitae debitis? Dolor iure at temporibus, aperiam autem tenetur modi sapiente praesentium architecto.</p>
                </div>
            </div>
        </BrowserRouter>

    )
}

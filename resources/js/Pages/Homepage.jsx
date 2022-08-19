import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../Components/Navbar/index";


export default function Homepage(props) {
    console.log(props)
    return (
        <BrowserRouter>
            <div className="flex flex-col justify-center align-center">
                <Navbar />
                {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes> */}
                <div className="flex justify-center align-center">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </BrowserRouter>

    )
}

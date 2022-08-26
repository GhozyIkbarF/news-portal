import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/index";
import Subscribe from '../Components/Subscribe/index'
import Footer from "../Components/Footer"
import BackToTop from "../Components/Button/index";
import Home from "./Home";
import data from '../Data/index'


export default function Homepage(props) {

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
                {/* {useLocation().pathname == '/home' ? <Subscribe /> : null} */}
                <Footer />
            </div>
        </BrowserRouter>

    )
}

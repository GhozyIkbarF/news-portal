import React from "react";
import Navbar from "../Components/Navbar/index";

export default function Homepage(props) {
    console.log(props)
    return(
        <div className="flex flex-col justify-center align-center">
            <Navbar />
            <div className="flex justify-center align-center">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

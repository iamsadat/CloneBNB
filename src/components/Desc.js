import React from "react";
import background from "../assets/backgroung.png";

export default function Desc() {
    return (
        <div className="desc">
            <img src={background} className="background--pic" alt="activities" />
            <h1 className="desc--header">Online Experiences</h1>
            <p className="desc--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
            <h1>Places to visit: </h1>
        </div>
    )
}
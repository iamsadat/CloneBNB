import React from "react";

export default function Nav() {
    return(
        <nav>
            <img src="https://www.pngitem.com/pimgs/m/132-1322128_logo-airbnb-airbnb-vector-hd-png-download.png" className="nav--logo" />
            <h1 className="nav--title">CloneBNB</h1>
            <div className="dropdown">
                <button className="dropBtn"> <img className="menu--pic" src="https://img.icons8.com/?size=512&id=3096&format=png" /> </button>
                <div className="drop--content">
                    <a href="#">Profile</a>
                    <a href="#">Settings</a>
                    <a href="#">Sign in/Sign up</a>
                </div>
            </div>
        </nav>
    )
}
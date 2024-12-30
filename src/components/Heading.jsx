
import React, { useState } from "react";
import logo from "../assets/photonic.png";
import "./Heading.css";
import "./all.css";

function Heading() {
   

    return(
        <div className="header hidden">
            <nav>
                <a href="index.html">
                    <img src={logo} alt="logo" />
                </a>

                <div className="nav-links hidden" id="link">

                    <ul id="home">
                        <li>
                            <a href="#" style={{ color: "rgb(157, 234, 41)", fontSize: "1rem", fontFamily: "cursive" }}>Home</a>
                        </li>
                        <li>
                        <a href="#" style={{ color: "rgb(157, 234, 41)", fontSize: "1rem", fontFamily: "cursive" }}>Join Us</a>
                        </li>
                        <li>
                        <a href="#" style={{ color: "rgb(157, 234, 41)", fontSize: "1rem", fontFamily: "cursive" }}>About Us</a>
                        </li>
                        <li>
                        <a href="#" style={{ color: "rgb(157, 234, 41)", fontSize: "1rem", fontFamily: "cursive" }}>Events</a>
                        </li>
                        <li>
                        <a href="#" style={{ color: "rgb(157, 234, 41)", fontSize: "1rem", fontFamily: "cursive" }}>Gallery</a>
                        </li>
                        <li>
                        <a href="#" style={{ color: "rgb(157, 234, 41)", fontSize: "1rem", fontFamily: "cursive" }}>Team</a>
                        </li>
                    </ul>
                </div>
               
            </nav>

            <div className="text-box hidden">
                <h1 className="heading_robo">
                    <span>
                        IEEE <span style={{ color: "rgb(157, 234, 41)" }}>PHOTONICS</span> SOCIETY
                    </span>
                </h1>
                <p>
                    <span style={{ color: "rgb(157, 234, 41)" }}>
                        Welcome to the IEEE Photonics Society at VIT Chennai - 
                    </span> driving innovation in light-based technologies to shape the future of communication and
                    sensing.
                </p>

                <div className="counter-container hidden">
                    <div className="count">
                        <h2>
                            <span className="counter-number" data-target="600" style={{ color: "rgb(157, 234, 41)" }}>
                                150 +
                            </span>
                        </h2>
                        <p style={{ fontFamily: "cursive" }}>Active Members</p>
                    </div>
                    <div className="count">
                        <h2>
                            <span className="counter-number" data-target="800" style={{ color: "rgb(157, 234, 41)" }}>
                                70 +
                            </span>
                        </h2>
                        <p style={{ fontFamily: "cursive" }}>Events Conducted</p>
                    </div>
                </div>
                <a href="#" className="button"> Join Us   </a>
            </div>
        </div>
    );
};

export default Heading;
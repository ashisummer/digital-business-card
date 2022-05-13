import React from "react";
import pic from "../images/display.webp"
import mail from "../images/Mail.png"
import linkedIn from "../images/linkedin-sociocon.ico"

export default function Intro(){
    return(
        <div className="intro-box">
            <img className="img--display" src={pic} alt="display" width={270}/>
            <h1> Laura Smith</h1>
            <h3> Frontend Developer</h3>
            <h4> laurasmith.web</h4>
            <button className="button-intro-1"> 
                <img className="email-btn" src = {mail} alt= " mail" ></img> Email
            </button>
            <button className="button-intro-2">
                <img className="linkedin-btn" src= {linkedIn} alt= "linkedIn" height="30px"></img> LinkedIn
            </button>
        </div>
    )
}
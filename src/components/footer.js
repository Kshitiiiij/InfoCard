import React from "react";
import Instagram from "../images/instagram.svg"
import Linkedin from "../images/linkedin.svg"
import Github from "../images/github.svg"

export default function footer() {
    return (
        <footer>
                <img src={Github} alt="github"/>
                <img src={Instagram} alt="instagram"/>
                <img src={Linkedin}alt="linkedin"/>
        </footer>
    )
    }
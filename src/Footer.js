import React from "react";
import logo from "./logo.jpg"

function Footer(){
    return(
        <footer className="footer">
            <img src={logo} alt="footerlogo" width={240} height={135}/>
            <h4 id="contact">Contact</h4>
            <h4 id="media">Social Media Links</h4>
        </footer>
    )
}

export default Footer;
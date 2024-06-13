import React from "react";
import main from "./main.jpg"
import { Link } from "react-router-dom";

function Calltoaction(){

    const Submit = () => {
        //e.preventDefault();
        <Link to="/booking" />
    }

    return(
        <section className="calltoaction">
            <div className="notimg">
                <h1 id="little">Little Lemon</h1>
                <h2 id="chi">Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <button id="button1" onClick={Submit}>Book a Table</button>
            </div>
            <div className="img">
                <img src={main} alt="img" width={178} height={100}/>
            </div>
        </section>
    )
}

export default Calltoaction;
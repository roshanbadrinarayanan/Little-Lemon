import React from "react";
import about from "./Owners.jpg";

function Chicago(){
    return(
        <section className="chicago">
            <div className="notimg1">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>About Little Lemon</p>
            </div>
            <img src={about} width={480} height={270}/>
        </section>
    )
}

export default Chicago;
import React from "react";
import star from "./5star.png"

function CustomerSays(){
    return(
        <div>
            <h2 id="test">Testimonials</h2>
            <section className="customer">
                <div className="testimonial">
                    <div className="r1">
                        <h5>Rating</h5>
                        <img src={star} width={200}/>
                        <p>This comes straight from my heart</p>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="r2">
                        <h5>Rating</h5>
                        <img src={star} width={200}/>
                        <p>This comes straight from my eyes</p>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="r3">
                        <h5>Rating</h5>
                        <img src={star} width={200}/>
                        <p>This comes straight from my brain</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CustomerSays;
import React from "react";
import salad from "./salad.jpg"
import lemon from "./lemondessert.jpg"
import brus from "./bruschetta.jpg"


function Specials(){
    const specials = [{title: "Greek Salad", description: "Greek salad is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, feta cheese, and olives and dressed with salt, Greek oregano, lemon juice and olive oil.", img:salad},
                        {title: "Bruschetta", description: "Bruschetta is an Italian antipasto consisting of grilled bread often topped with olive oil and salt. Most commonly it is served with toppings of tomato, vegetables, beans, cured meat, and/or cheese.", img:brus},
                        {title: "Lemon Cake", description: "This comes straight from my grandma's cookbook. Made from sour lemons and the thickest cream, this sweet and savoury dessert will have you craving for more", img:lemon}
    ]

    return(
        <section className="specials">
            <div className="top">
                <h2>This week's Specials!</h2>
                <button id="menu">Our Menu</button>
            </div>
            <div className="specials-list">
                {specials.map((special, index) => (
                    <div key={index} className="special">
                        <h3>{special.title}</h3>
                        <img src={special.img} alt="img"/>
                        <p>{special.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Specials;
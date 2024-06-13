import React from "react";
import Calltoaction from "./CalltoAction";
import Specials from "./Specials";
import CustomerSays from "./Customersay";
import Chicago from "./Chicago";
import Footer from "./Footer";

function HomePage(){
    return(
    <main>
        <Calltoaction /><br></br><br></br>
        <Specials /><br></br><br></br>
        <CustomerSays />
        <Chicago />
        <Footer />
    </main>)
}

export default HomePage;
import React from "react";
import hummus from "./hummus.jpeg";
import dolmas from "./dolmas.jpeg";
import falafel from "./falafel.jpeg";
import kofta from "./kofta.jpeg";
import mousakka from "./mousakka.jpeg";
import skewer from "./skewer.jpeg";
import spanak from "./spanak.jpeg";
import shakshuka from "./shakshuka.jpeg";
import baklava from "./baklava.jpeg";


function Menu() {
  return (
    <>
    <h2 id="enjoy">Enjoy our mouth watering dishes!</h2>
    <div className="menu-container">
      <div className="menu-item">
        <h4>Hummus Plate</h4>
        <img src={hummus} alt="Hummus Plate" width={200} height={200} />
        <p>A classic Mediterranean appetizer served with warm pita bread.</p>
      </div>
      <div className="menu-item">
        <h4>Falafel Wrap</h4>
        <img src={falafel} alt="Falafel Wrap" width={200} height={200} />
        <p>Crispy chickpea patties wrapped in pita with fresh vegetables and tahini sauce.</p>
      </div>
      <div className="menu-item">
        <h4>Moussaka</h4>
        <img src={mousakka} alt="Moussaka" width={200} height={200} />
        <p>A traditional baked dish with layers of eggplant, minced meat, and béchamel sauce.</p>
      </div>
      <div className="menu-item">
        <h4>Grilled Lamb Skewers</h4>
        <img src={skewer} alt="Grilled Lamb Skewers" width={200} height={200} />
        <p>Tender lamb marinated in Mediterranean spices and grilled to perfection.</p>
      </div>
      <div className="menu-item">
        <h4>Shakshuka</h4>
        <img src={shakshuka} alt="Shakshuka" width={200} height={200} />
        <p>Eggs poached in a spiced tomato sauce with bell peppers and onions, served with crusty bread.</p>
      </div>
      <div className="menu-item">
        <h4>Lamb Kofta</h4>
        <img src={kofta} alt="Lamb Kofta" width={200} height={200} />
        <p>Spiced ground lamb formed into kebabs and grilled, served with rice or couscous.</p>
      </div>
      <div className="menu-item">
        <h4>Dolmas</h4>
        <img src={dolmas} alt="Stuffed Grape Leaves (Dolmas)" width={200} height={200} />
        <p>Grape leaves stuffed with a savory mixture of rice, pine nuts, and herbs, served with yogurt sauce.</p>
      </div>
      <div className="menu-item">
        <h4>Baklava</h4>
        <img src={baklava} alt="Baklava" width={200} height={200} />
        <p>Layers of flaky pastry filled with nuts and sweetened with honey syrup, a classic Mediterranean dessert.</p>
      </div>
      <div className="menu-item">
        <h4>Spanakopita</h4>
        <img src={spanak} alt="Spanakopita" width={200} height={200} />
        <p>A savory Greek pastry filled with spinach, feta cheese, and herbs, wrapped in flaky phyllo dough.</p>
      </div>
    </div>
    </>
  );
}

export default Menu;

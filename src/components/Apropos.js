import React from 'react';
import Banner from './Banner'; 
import Footer from'./Footer';
import '../styles/Apropos.scss';
import Fond2 from '../assets/fond2.png'

function Apropos() {
  return (
    <div>
      <Banner />
      <div>
      <div class='bod2'>
          <img class='fond2' src={Fond2} alt="Fond" />
      </div>
      <div class="accordionbouton">
      <button class="accordion">Fiabilité</button>
        <div class="panel">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>

      </div>
      </div>
      <Footer />
    </div>
  );
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* active ou desactive le "active" */
    
    this.classList.toggle("active");


    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

export default Apropos;

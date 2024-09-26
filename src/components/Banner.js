import React from 'react';
import logo from '../assets/logokosa.PNG'; 
import '../styles/Banner.scss'; 


function Banner() {
  return (
    <div className="banner">
        <img src={logo} alt="Logo" />
        <nav>
            <ul>
                <li>
                  <a class="accueil" href="/home">Accueil</a>
                </li>
                <li>
                  <a class="apropos" href="/a-propos">À Propos</a>
                </li>
            </ul>
        </nav>

    </div>
  );
}

export default Banner;

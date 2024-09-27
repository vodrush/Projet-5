import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Utilisation de Link et useLocation
import logo from '../assets/logokosa.PNG'; 
import '../styles/Banner.scss'; 

function Banner() {
  const location = useLocation(); // Utilisation de useLocation pour obtenir l'URL actuelle

  return (
    <div className="banner">
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            {/* Applique la classe active uniquement si la route est exactement "/home" */}
            <Link 
              className={`accueil ${location.pathname === '/home' ? 'active' : ''}`} 
              to="/home"
            >
              Accueil
            </Link>
          </li>
          <li>
            {/* Applique la classe active uniquement si la route est exactement "/a-propos" */}
            <Link 
              className={`apropos ${location.pathname === '/a-propos' ? 'active' : ''}`} 
              to="/a-propos"
            >
              À Propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Banner;

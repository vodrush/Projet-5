import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import logo from '../assets/logokosa.PNG'; 
import '../styles/Banner.scss'; 

function Banner() {
  const location = useLocation(); 

  return (
    <div className="banner">
      <img class="logo" src={logo} alt="Logo" a href />
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
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Banner;

import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import logo from '../assets/logokosa.PNG'; 
import '../styles/Banner.scss'; 

function Banner() {
  const location = useLocation(); 

  return (
    <header className="banner" role="banner">
      <Link to="/home" aria-label="Retour à l'accueil">
        <img className="logo" src={logo} alt="Logo Kosa" />
      </Link>
      <nav aria-label="Navigation principale">
        <ul>
          <li>
            {/* Applique la classe active uniquement si la route est "/home" */}
            <Link 
              className={`accueil ${location.pathname === '/home' ? 'active' : ''}`} 
              to="/home" 
              aria-current={location.pathname === '/home' ? 'page' : undefined}
            >
              Accueil
            </Link>
          </li>
          <li>
            {/* Applique la classe active uniquement si la route est "/a-propos" */}
            <Link 
              className={`apropos ${location.pathname === '/a-propos' ? 'active' : ''}`} 
              to="/a-propos" 
              aria-current={location.pathname === '/a-propos' ? 'page' : undefined}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Banner;

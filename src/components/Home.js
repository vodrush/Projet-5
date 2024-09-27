import React from 'react';
import Banner from './Banner'; 
import Footer from './Footer';
import Gallery from './Gallery';
import '../styles/home.scss'; // Import du fichier SCSS spécifique à cette page
import Fond from '../assets/fond1.png';

function Home() {
  return (
    <div className="home-page"> {/* Ajout de la classe parent pour scinder les styles */}
      <div className="t">
        <div className="bod">
          <img className="fond" src={Fond} alt="Logo" />
          <div className="overlay"></div>
          <p className="p1">Chez vous, </p>
          <p className="p2">partout et ailleurs</p>
        </div>
        <Gallery />
      </div>
    </div>
  );
}

export default Home;

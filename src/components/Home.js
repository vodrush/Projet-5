import React from 'react';
import Banner from './Banner'; 
import Footer from './Footer';
import Gallery from './Gallery';
import '../styles/home.scss'; 
import Fond from '../assets/fond1.png';

function Home() {
  return (
    <div className="home-page">
      <div className="t">
        <img 
          className="fond" 
          src={Fond} 
          alt="Image de fond représentant un paysage" 
          aria-hidden="true" 
        />
        <div className="overlay" aria-hidden="true"></div>

        <div className="banner-text" role="banner" aria-label="Slogan de l'entreprise">
          <h1 className="p1 desktop-text" role="heading" aria-level="1">Chez vous, partout et ailleurs</h1>
          <h1 className="p1mobile-text" role="heading" aria-level="1">Chez vous,</h1>
          <h1 className="p2mobile-text" role="heading" aria-level="1">partout et ailleurs</h1>
        </div>

        <Gallery aria-label="Galerie d'images des logements disponibles" />
      </div>
    </div>
  );
}

export default Home;

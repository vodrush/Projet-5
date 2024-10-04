
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
        <img className="fond" src={Fond} alt="Logo" />
          <div className="overlay"></div>
        <div className="banner-text">
          <p className="p1 desktop-text">Chez vous, partout et ailleurs</p>
          <p className="p1 mobile-text">Chez vous,</p>
          <p className="p2 mobile-text">partout et ailleurs</p>
        </div>
      </div>
    </div>
  );
}




export default Home;

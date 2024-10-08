import React from 'react';
import logo from '../assets/logokosablanc.PNG'; 
import '../styles/Footer.scss'; 

function Footer() {
  return (
    <footer className="Footer" role="contentinfo" aria-label="Pied de page">
      <img src={logo} alt="LogoKosaFooter" />
      <h2 className="p1 desktop-text">© 2020 Kasa. All rights reserved</h2>
      <h2 className="p1mobile-text">© 2020 Kasa. All</h2>
      <h2 className="p2mobile-text">rights reserved</h2>
    </footer>
  );
}

export default Footer;

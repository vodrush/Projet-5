import React from 'react';
import logo from '../assets/logokosablanc.PNG'; 
import '../styles/Footer.scss'; 


function Footer() {
  return (
    <footer className="Footer">
        <img src={logo} alt="Logo" />
        <p className="p1 desktop-text">© 2020 Kasa. All rights reserved</p>
        <p className="p1mobile-text">© 2020 Kasa.</p>
        <p className="p2mobile-text">All rights reserved</p>
    </footer>
  );
}

export default Footer;

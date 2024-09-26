import React from 'react';
import logo from '../assets/logokosablanc.PNG'; 
import '../styles/Footer.scss'; 


function Footer() {
  return (
    <footer className="Footer">
        <img src={logo} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

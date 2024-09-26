import React from 'react';
import Banner from './Banner'; 
import Footer from'./Footer';
import Gallery from'./Gallery';
import '../styles/home.scss';
import Fond from '../assets/fond1.png'

function Home() {
  return (
    <div>
      <Banner />
      <div class='bod'>
        <img class='fond' src={Fond} alt="Logo" />
        <div class="overlay"></div>
        <p class="p1">Chez vous,</p>
        <p class="p2">partout et ailleurs</p>
      </div>
      <Gallery />
      
      <Footer />
    </div>
  );
}

export default Home;

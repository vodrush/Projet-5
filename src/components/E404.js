import React from 'react';
import Banner from './Banner'; 
import Footer from'./Footer';
import '../styles/e404.scss';

function E404() {
  return (
    <div>
      <div id="e404">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <a id ='href' href ="/home">Retourner sur la page d'accueil</a>
      </div>
    </div>
  );
}

export default E404;

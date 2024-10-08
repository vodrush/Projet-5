import React from 'react';
import Banner from './Banner'; 
import Footer from './Footer';
import '../styles/e404.scss';

function E404() {
  return (
    <div>
      <div id="e404" role="alert" aria-labelledby="erreur-titre" aria-describedby="erreur-description">
        <h1 id="erreur-titre">404</h1>
        <h2 id="erreur-description" className="h2404">Oups ! La page que vous demandez n'existe pas.</h2>
        <a id="href" href="/home" aria-label="Retourner sur la page d'accueil">Retourner sur la page d'accueil</a>
      </div>
    </div>
  );
}

export default E404;

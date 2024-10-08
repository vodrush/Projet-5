import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logementsData from '../assets/logements.json';
import '../styles/Gallery.scss'; 

function Gallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData.slice(0, 6)); 
  }, []);

  return (
    <div className="fondgallery" aria-label="Galerie de logements disponibles">
      <div className="gallery">
        {logements.map((logement) => (
          <div className="card" key={logement.id} role="article" aria-labelledby={`logement-title-${logement.id}`}>
            <Link to={`/logement/${logement.id}`} aria-label={`Voir les détails du logement ${logement.title}`}>
              <img src={logement.cover} alt={`Image de couverture du logement ${logement.title}`} />
            </Link>
            <h3 className="titre-logement" id={`logement-title-${logement.id}`}>
              {logement.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

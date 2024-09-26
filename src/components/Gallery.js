import React, { useState, useEffect } from 'react';
import logementsData from '../assets/logements.json';
import '../styles/Gallery.scss'; // Fichier SCSS pour styliser

function Gallery() {
  const [logements, setLogements] = useState([]);

  // Limite à 6 logements
  useEffect(() => {
    setLogements(logementsData.slice(0, 6));
  }, []);

  return (
    <div className="fondgallery">
      <div className="gallery">
        {logements.map((logement) => (
          <a class="href"href={`#${logement.id}`} key={logement.id}>
            <div className="card">
              <img src={logement.cover} alt={logement.title} />
              <h3>{logement.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

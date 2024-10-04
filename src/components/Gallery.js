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
    <div className="fondgallery">
      <div className="gallery">
        {logements.map((logement) => (
          <div className="card" key={logement.id}>
            <Link to={`/logement/${logement.id}`}> 
              <img src={logement.cover} alt={logement.title} />
            </Link>
            <h3 className="titre-logement">{logement.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

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
          <Link to={`/logement/${logement.id}`} key={logement.id}> 
            <div className="card">
              <img src={logement.cover} alt={logement.title} />
              <h3>{logement.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

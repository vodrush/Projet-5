import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementsData from '../assets/logements.json';
import '../styles/LogementDetail.scss';

function LogementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openAccordions, setOpenAccordions] = useState([false, false]);

  // Vérifie si le logement existe
  const logement = logementsData.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logement) {
      // Redirige vers la page 404 si le logement n'existe pas
      navigate('/E404');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  // Logique des images du carrousel
  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % logement.pictures.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  const toggleAccordion = (index) => {
    const newOpenAccordions = [...openAccordions];
    newOpenAccordions[index] = !newOpenAccordions[index];
    setOpenAccordions(newOpenAccordions);
  };

  return (
    <div className="logement-detail">
      <div className="logement-carousel">
        <div
          className="carousel-image-container"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {logement.pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          ))}
        </div>
        {logement.pictures.length > 1 && (
          <div className="carousel-navigation">
            <button onClick={handlePrevImage} className="prev-button">
              <svg
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 4L8 12L15 20"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="image-counter">
              {currentImageIndex + 1}/{logement.pictures.length}
            </p>
            <button onClick={handleNextImage} className="next-button">
              <svg
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4L16 12L9 20"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Titre et localisation */}
      <div className="logement-title-location">
        <div className="title-section">
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>

          {/* Tags */}
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Informations sur l'hôte et la note */}
        <div className="host-rating">
          <div className="host-info">
            <div className="host-names">
              <p className="first-name">{logement.host.name.split(' ')[0]}</p>
              <p className="last-name">{logement.host.name.split(' ')[1]}</p>
            </div>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>

          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={`star ${index < logement.rating ? 'filled' : ''}`}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Accordéons Description et Équipements */}
      <div className="Accordiongroup">
        {[
          { title: 'Description', content: logement.description },
          {
            title: 'Équipements',
            content: (
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            ),
          },
        ].map((accordion, index) => (
          <AccordionItem
            key={index}
            title={accordion.title}
            content={accordion.content}
            isOpen={openAccordions[index]}
            toggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ title, content, isOpen, toggle }) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="accordionbouton">
      <div className="accordion" onClick={toggle}>
        <span className="accordion-text">{title}</span>
        <svg
          className={`accordion-icon ${isOpen ? 'open' : ''}`}
          fill="#ffffff"
          height="24px"
          width="24px"
          viewBox="0 0 330 330"
        >
          <path
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150
            c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
            C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </div>
      <div
        className={`panel ${isOpen ? 'open' : ''}`}
        ref={contentRef}
        style={{ maxHeight: contentHeight }}
      >
        {typeof content === 'string' ? <p>{content}</p> : content}
      </div>
    </div>
  );
}

export default LogementDetail;

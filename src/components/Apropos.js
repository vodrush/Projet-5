import React, { useState, useRef, useEffect } from 'react';
import Banner from './Banner'; 
import Footer from './Footer';
import '../styles/Apropos.scss'; // Import du fichier SCSS spécifique à cette page
import Fond2 from '../assets/fond2.png';

function Apropos() {
  const [openAccordions, setOpenAccordions] = useState([false, false, false, false]);

  const toggleAccordion = (index) => {
    const newOpenAccordions = [...openAccordions];
    newOpenAccordions[index] = !newOpenAccordions[index];
    setOpenAccordions(newOpenAccordions);
  };

  const accordionsData = [
    { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "Service", content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
    { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
  ];

  return (
    <div className="apropos-page"> {/* Classe parent spécifique pour la page À Propos */}
      <div>
        <div className="bod2">
          <img className="fond2" src={Fond2} alt="Fond" />
        </div>
        <div className="Accordiongroup">
          {accordionsData.map((accordion, index) => (
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
    </div>
  );
}

function AccordionItem({ title, content, isOpen, toggle }) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className="accordionbouton">
      <div className="accordion">
        <span className="accordion-text">{title}</span>
        <svg
          onClick={toggle}
          className={`accordion-icon ${isOpen ? 'open' : ''}`}
          fill="#ffffff"
          height="24px"
          width="24px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
          </g>
        </svg>
      </div>
      <div
        className={`panel ${isOpen ? 'open' : ''}`}
        ref={contentRef}
        style={{
          maxHeight: contentHeight,
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Apropos;

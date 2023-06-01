import React from "react";
import PropTypes from "prop-types";
import "../../../style/Dieta.css";
import intersect1 from "../../../assets/intersect1.svg";
import intersect from "../../../assets/intersect.svg";

const Dieta = ({ title, tipo, image }) => {
  return (
    <div className="dieta-rectangle">
        <img className="dieta-image-client-rectangle" src={image} alt="client" />
      <div className="dieta-content">
        <div className="dieta-text">
          <h2 className="dieta-title">{title}</h2>
          <span className="dieta-tipo">{tipo}</span>
        </div>
      </div>
      <img className="uppershadow-dieta-rectangle" src={intersect} alt="Intersect" />
      <img className="lowershadow-dieta-rectangle" src={intersect1} alt="Intersect" />
    </div>
  );
};

Dieta.propTypes = {
  title: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Dieta;

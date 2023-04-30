import "../../style/Dieta.css";
import intersect1 from "../../assets/intersect1.svg";
import intersect from "../../assets/intersect.svg";
import PropTypes from 'prop-types';

const Dieta = ({ title, tipo }) => {
  return (
    <div className="dieta-rectangle">
      <img className="uppershadow-dieta-rectangle" src={intersect} alt="Intersect" />
      <img className="lowershadow-dieta-rectangle" src={intersect1} alt="Intersect" />
      <div className="dieta-container" alt="Intersect">
        <h2 className="dieta-title">{title}</h2>
        <span className="dieta-tipo">{tipo}</span>
        {/* <img className="group-9" src={group9} /> */}
      </div>
    </div>
  );
};

Dieta.propTypes = {
  title: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired
};

export default Dieta;

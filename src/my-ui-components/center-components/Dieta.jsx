import "../../App.css";
import intersect1 from "../../assets/intersect1.svg";
import group9 from "../../assets/group9.svg";
import intersect from "../../assets/intersect.svg";


import { Component } from 'react';

class Dieta extends Component {
    render() {
        return (
                <div className="rectangle-consulta" >
                    <img className="intersect" src={intersect} alt="Intersect" />
                    <img className="intersect-1" src={intersect1} alt="Intersect" />
                    <div className="dieta-container" alt="Intersect">
                        <span className="dieta-title" >Dieta</span>
                        <span className="dieta-tipo">Deportiva</span>
                        <img className="group-9" src={group9} />
                    </div>
                </div>
        );
    }
}
export default Dieta;
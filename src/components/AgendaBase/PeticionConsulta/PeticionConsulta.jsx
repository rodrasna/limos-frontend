import "../../../App.css";
import moreVertical6 from "../../../assets/moreVertical6.svg";
import checkSquare from "../../../assets/check-square.svg";
import xSquare from "../../../assets/x-square.svg";
import "./PeticionConsulta.css"
import { Component } from 'react';
import { IconButton } from "@mui/material";

class PeticionConsulta extends Component {
    render() {
        const { imageSrc, clientName } = this.props;

        return (
            <div className="peticion-consulta-rectangle">
                <img className="peticion-consulta-image-client-rectangle" src={imageSrc} />
                <div className="peticion-consulta-data-client-container">
                    <span className="grammar-intermedia">{clientName}</span>
                </div>
                <IconButton className="accept-button"><img src={checkSquare}></img></IconButton>
                <IconButton className="reject-button"><img src={xSquare}></img></IconButton>
                <IconButton>
                    <img className="peticion-consulta-option" src={moreVertical6} />
                </IconButton>
            </div>
        );
    }
}

export default PeticionConsulta;

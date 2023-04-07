import "../../App.css";
import rectangle24 from "../../assets/client.png";
import moreVertical6 from "../../assets/moreVertical6.svg";
import checkSquare from "../../assets/check-square.svg";
import xSquare from "../../assets/x-square.svg";


import { Component } from 'react';
import { IconButton, Button } from "@mui/material";

class Consulta extends Component {
    render() {
        return (
            <div className="consulta-rectangle">
                <img className="consulta-image-client-rectangle" src={rectangle24} />
                <div className="consulta-data-client-container">
                    <span className="grammar-intermedia">Lucía Martín Fontes</span>
                    
                </div>
                <IconButton className="accept-button"><img src={checkSquare}></img></IconButton>
                <IconButton className="reject-button"><img src={xSquare}></img></IconButton>
                <IconButton>
                    <img className="consulta-option" src={moreVertical6} />
                </IconButton>
            </div>
        );
    }
}
export default Consulta;
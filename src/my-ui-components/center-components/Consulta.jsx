import "../../App.css";
import rectangle24 from "../../assets/client.png";
import moreVertical6 from "../../assets/moreVertical6.svg";

import { Component } from 'react';
import { IconButton } from "@mui/material";

class Consulta extends Component {
    render() {
        return (
            <div className="consulta-rectangle">
                <img className="consulta-image-client-rectangle" src={rectangle24} />
                <div className="flex-container-13">
                    <span className="grammar-intermedia">Lucía Martín Fontes</span>
                    <span className="time">8:00 - 10:00 AM</span>
                </div>
                <IconButton>
                    <img className="consulta-option" src={moreVertical6} />
                </IconButton>
            </div>
        );
    }
}
export default Consulta;
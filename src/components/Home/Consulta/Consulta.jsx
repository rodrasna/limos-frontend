import "../../../style/Consulta.css";
import rectangle24 from "../../../assets/client.png";
import moreVertical6 from "../../../assets/moreVertical6.svg";
import { IconButton } from "@mui/material";

const Consulta = (props) => {
    const { cliente, hora, image } = props;
    return (
        <div className="consulta-rectangle">
            <img className="consulta-image-client-rectangle" src={image} alt="client" />
            <div className="consulta-data-client-container">
                <span className="grammar-intermedia">{cliente}</span>
                <span className="time">{hora}</span>
            </div>
            <IconButton>
                <img className="consulta-option" src={moreVertical6} alt="options" />
            </IconButton>
        </div>
    );
};

export default Consulta;

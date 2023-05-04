import "../../style/Client.css";
import rectangle24 from "../../assets/client.png";
import moreVertical6 from "../../assets/moreVertical6.svg";
import { IconButton } from "@mui/material";

const Client = (props) => {
    const { name, profesional, place, plan, lastConsultDate } = props;
    return (
        <div className="client-rectangle">
            <div className="left-side">
                <img className="client-image-rectangle"  alt="client" />
                <div className="client-data-container">
                    <span className="client-name">{name}</span>
                    <button className="view-profile-button">Ver perfil</button>
                </div>
            </div>
            <div className="right-side">
                <div className="item">
                    <img className="icon"  alt="profesional" />
                    <span className="label">{profesional}</span>
                </div>
                <div className="item">
                    <img className="icon"  alt="lugar" />
                    <span className="label">{place}</span>
                </div>
                <div className="item">
                    <img className="icon"  alt="plan" />
                    <span className="label">{plan}</span>
                </div>
                <div className="item">
                    <img className="icon"  alt="fecha" />
                    <span className="label">{lastConsultDate}</span>
                </div>
            </div>
            <IconButton>
                <img className="client-option" src={moreVertical6} alt="options" />
            </IconButton>
        </div>

    );
};

export default Client;

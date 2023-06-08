import "../HomeBase.css";
import moreVertical6 from "../../../assets/moreVertical6.svg";
import { IconButton } from "@mui/material";
import React, { useState } from "react";

const Consulta = ({ cliente, hora, image }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        setIsClicked(!isClicked);
        setIsHovered(false);
    };
    return (
        <div
            className={`consulta-rectangle ${isHovered ? "hovered" : ""} ${isClicked ? "clicked" : ""
                }`} 
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img className="consulta-image-client-rectangle" src={image} alt="client" />
            <div className="consulta-data-client-container">
                <span className="client-name">{cliente}</span>
                <span className="time">{hora}</span>
            </div>
            <IconButton>
                <img className="consulta-option" src={moreVertical6} alt="options" />
            </IconButton>
        </div>
    );
};

export default Consulta;

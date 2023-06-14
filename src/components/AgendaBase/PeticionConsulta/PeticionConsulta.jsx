import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import "../AgendaBase.css";

const PeticionConsulta = ({ imageSrc, clientName }) => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  const handleAcceptClick = () => {
    setAccepted(true);
    setRejected(false);
  };

  const handleRejectClick = () => {
    setAccepted(false);
    setRejected(true);
  };

  const handleOptionClick = () => {
    console.log("Se hizo clic en el botón de opciones de la petición de consulta del cliente:", clientName);
  };

  const rectangleClassNames = `peticion-consulta-rectangle ${accepted ? "accepted" : ""} ${rejected ? "rejected" : ""}`;

  return (
    <div className={rectangleClassNames}>
      <img className="peticion-consulta-image-client-rectangle" src={imageSrc} alt="client" />
      <div className="peticion-consulta-data-client-container">
        <span className="grammar-intermedia">{clientName}</span>
      </div>
      <div className="button-group">
        <IconButton className="accept-button" onClick={handleAcceptClick}>
          <CheckBoxOutlinedIcon />
        </IconButton>
        <IconButton className="reject-button" onClick={handleRejectClick}>
          <DisabledByDefaultOutlinedIcon />
        </IconButton>
      </div>
      <IconButton onClick={handleOptionClick}>
        <MoreVertIcon className="peticion-consulta-option" />
      </IconButton>
    </div>
  );
};

export default PeticionConsulta;

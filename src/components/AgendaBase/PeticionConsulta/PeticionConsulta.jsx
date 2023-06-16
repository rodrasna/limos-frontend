import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import "../AgendaBase.css";

const PeticionConsulta = ({ imageSrc, clientName, fecha }) => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAcceptClick = () => {
    setAccepted(true);
    setRejected(false);
  };

  const handleRejectClick = () => {
    setAccepted(false);
    setRejected(true);
  };

  const handleOptionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const rectangleClassNames = `peticion-consulta-rectangle ${accepted ? "accepted" : ""
    } ${rejected ? "rejected" : ""}`;

  return (
    <div className={rectangleClassNames}>
      <div className="left-side-consulta">
        <div className="client-container">
          <img
            className="peticion-consulta-image-client-rectangle"
            src={imageSrc}
            alt="client"
          />
          <span className="client-name">{clientName}</span>
          <span className="date-agenda">{fecha}</span>
        </div>
      </div>
      <div className="right-side-consulta">
        <div className="button-group">
          <IconButton
            className={`accept-button ${accepted ? "accepted" : ""}`}
            onClick={handleAcceptClick}
          >
            <CheckBoxOutlinedIcon />
          </IconButton>
          <IconButton
            className={`reject-button ${rejected ? "rejected" : ""}`}
            onClick={handleRejectClick}
          >
            <DisabledByDefaultOutlinedIcon />
          </IconButton>
        </div>
        <IconButton
          className="peticion-consulta-option"
          onClick={handleOptionClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Consultar Perfil</MenuItem>
          <MenuItem onClick={handleMenuClose}>Cambiar fecha</MenuItem>
          <MenuItem onClick={handleMenuClose}>Cancelar</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default PeticionConsulta;

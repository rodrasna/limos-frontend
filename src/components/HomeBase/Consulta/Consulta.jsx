import "../HomeBase.css";
import moreVertical6 from "../../../assets/moreVertical6.svg";
import { IconButton, MenuItem, Menu } from "@mui/material";
import React, { useState } from "react";

const Consulta = ({ cliente, fecha, image, confirmada }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStartConsulta = () => {
    handleClose();
    // Lógica para iniciar la consulta
  };

  const handleFinishConsulta = () => {
    handleClose();
    // Lógica para terminar la consulta
  };

  const handleConsultProfile = () => {
    handleClose();
    // Lógica para consultar el perfil
  };

  const handleChangeDate = () => {
    handleClose();
    // Lógica para cambiar la fecha
  };

  const handleCancelConsulta = () => {
    handleClose();
    // Lógica para cancelar la consulta
  };

  const consultaClassName = `consulta-rectangle ${
    isHovered ? "hovered" : ""
  } ${isClicked ? "clicked" : ""} ${confirmada ? "confirmada" : "no-confirmada"}`;

  return (
    <div
      className={consultaClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="consulta-image-client-rectangle" src={image} alt="client" />
      <div className="consulta-data-client-container siguiente-consulta">
        <span className="client-name">{cliente}</span>
        <span className="date">{fecha}</span>
      </div>
      <div className="consulta-opciones">
        <IconButton className="consulta-option" onClick={handleClick}>
          <img src={moreVertical6} alt="options" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleStartConsulta}>Iniciar consulta</MenuItem>
          <MenuItem onClick={handleFinishConsulta}>Terminar consulta</MenuItem>
          <MenuItem onClick={handleConsultProfile}>Consultar perfil</MenuItem>
          <MenuItem onClick={handleChangeDate}>Cambiar la fecha</MenuItem>
          <MenuItem onClick={handleCancelConsulta}>Cancelar la consulta</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Consulta;

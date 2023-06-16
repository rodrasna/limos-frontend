import * as React from "react";
import Grid from '@mui/material/Grid';
import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckSquareIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PeticionConsulta from "./PeticionConsulta";

const ProximasPeticionesConsulta = () => {
  const peticionesConsulta = [
    {
      imageSrc: require("../../../assets/Richy.jpg"),
      clientName: "Jairo",
      fecha: "2023-06-15 10:00" // Fecha y hora para Jairo
    },
    {
      imageSrc: require("../../../assets/Richy.jpg"),
      clientName: "Richy",
      fecha: "2023-06-16 11:30" // Fecha y hora para Richy
    },
    {
      imageSrc: require("../../../assets/Lucia.jpg"),
      clientName: "Lucia",
      fecha: "2023-06-17 14:15" // Fecha y hora para Lucia
    },
    {
      imageSrc: require("../../../assets/Pedro.jpg"),
      clientName: "Pedro",
      fecha: "2023-06-18 16:45" // Fecha y hora para Pedro
    }
  ];


  const handleAcceptClick = (clientName) => {
    // Lógica para aceptar la petición de consulta
    console.log("Se aceptó la petición de consulta del cliente:", clientName);
  };

  const handleRejectClick = (clientName) => {
    // Lógica para rechazar la petición de consulta
    console.log("Se rechazó la petición de consulta del cliente:", clientName);
  };

  const peticionesConsultaItems = peticionesConsulta.map((peticion, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <PeticionConsulta
        imageSrc={peticion.imageSrc}
        clientName={peticion.clientName}
        onAcceptClick={handleAcceptClick}
        onRejectClick={handleRejectClick}
        fecha={peticion.fecha}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {peticionesConsultaItems}
    </Grid>
  );
}

export default ProximasPeticionesConsulta;

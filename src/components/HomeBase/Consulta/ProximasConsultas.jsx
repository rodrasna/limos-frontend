import * as React from "react";
import Grid from '@mui/material/Grid';
import Consulta from "./Consulta";
import '../HomeBase.css';

const ProximasConsultas = () => {
  const consultas = [
    {
      cliente: "Lucía Martín Fontes",
      hora: "8:00 - 10:00 AM",
      image: require("../../../assets/Lucia.jpg")
    },
    {
      cliente: "Juan Pérez",
      hora: "10:00 - 11:00 AM",
      image: require("../../../assets/Pedro.jpg")
    },
    {
      cliente: "Mario Rodríguez",
      hora: "11:30 - 12:30 PM",
      image: require("../../../assets/Richy.jpg")
    },
    {
      cliente: "Ana García",
      hora: "14:00 - 15:00 PM",
      image: require("../../../assets/Lucia.jpg")
    }
  ];

  const consultaItems = consultas.map((consulta, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Consulta cliente={consulta.cliente} hora={consulta.hora} image={consulta.image} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {consultaItems}
    </Grid>
  );
}

export default ProximasConsultas;

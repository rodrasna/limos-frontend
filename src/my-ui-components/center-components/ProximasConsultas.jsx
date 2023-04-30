import * as React from "react";
import Grid from '@mui/material/Grid';
import Consulta from "./Consulta";

const ProximasConsultas = () => {
  const consultas = [
    {
      cliente: "Lucía Martín Fontes",
      hora: "8:00 - 10:00 AM"
    },
    {
      cliente: "Juan Pérez",
      hora: "10:00 - 11:00 AM"
    },
    {
      cliente: "Mario Rodríguez",
      hora: "11:30 - 12:30 PM",
    },
    {
      cliente: "Ana García",
      hora: "14:00 - 15:00 PM",
    }
  ];

  const consultaItems = consultas.map((consulta, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Consulta cliente={consulta.cliente} hora={consulta.hora} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {consultaItems}
    </Grid>
  );
}

export default ProximasConsultas;

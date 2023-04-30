import * as React from "react";
import Grid from '@mui/material/Grid';
import PeticionConsulta from "./PeticionConsulta";

const ProximasPeticionesConsulta = () => {
  const peticionesConsulta = [
    {
      imageSrc: "ruta/imagen1.jpg",
      clientName: "Cliente 1"
    },
    {
      imageSrc: "ruta/imagen2.jpg",
      clientName: "Cliente 2"
    },
    {
      imageSrc: "ruta/imagen3.jpg",
      clientName: "Cliente 3"
    },
    {
      imageSrc: "ruta/imagen4.jpg",
      clientName: "Cliente 4"
    }
  ];

  const peticionesConsultaItems = peticionesConsulta.map((peticion, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <PeticionConsulta imageSrc={peticion.imageSrc} clientName={peticion.clientName} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {peticionesConsultaItems}
    </Grid>
  );
}

export default ProximasPeticionesConsulta;

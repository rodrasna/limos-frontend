import * as React from "react";
import Grid from '@mui/material/Grid';
import PeticionConsulta from "./PeticionConsulta";

const ProximasPeticionesConsulta = () => {
  const peticionesConsulta = [
    {
      imageSrc: require("../../assets/Richy.jpg"),
      clientName: "Jairo"
    },
    {
      imageSrc: require("../../assets/Richy.jpg"),
      clientName: "Richy"
    },
    {
      imageSrc: require("../../assets/Lucia.jpg"),
      clientName: "Lucia"
    },
    {
      imageSrc: require("../../assets/Pedro.jpg"),
      clientName: "Pedro"
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

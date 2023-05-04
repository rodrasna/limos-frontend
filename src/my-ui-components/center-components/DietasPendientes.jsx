import * as React from "react";
import "../../App.css";
import Grid from '@mui/material/Grid';
import Dieta from "./Dieta";
  

function DietasPendientes() {

  const dietas = [
    { title: "Dieta deportiva", tipo: "Deportiva" },
    { title: "Dieta para bajar de peso", tipo: "Bajar de peso" },
    { title: "Dieta vegana", tipo: "Vegana" },
    { title: "Dieta para aumentar masa muscular", tipo: "Masa muscular" },
    { title: "Dieta cetogénica", tipo: "Cetogénica" },
  ];

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 3 }} sx={{ maxWidth: 800, margin: 'auto' }}>
      {dietas.map((dieta, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ marginBottom: 2 }}>
          <Dieta title={dieta.title} tipo={dieta.tipo} />
        </Grid>
      ))}
    </Grid>
  );
}

export default DietasPendientes;

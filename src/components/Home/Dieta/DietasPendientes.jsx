import * as React from "react";
import "../../../App.css";
import Grid from '@mui/material/Grid';
import Dieta from "./Dieta";
  

function DietasPendientes() {

  const dietas = [
    { title: "LNP Élite", tipo: "Deportiva" , image: require("../../../assets/Élite.jpg")  },
    { title: "LNP Competidor", tipo: "Bajar de peso", image: require("../../../assets/Competidor.jpg")  },
    { title: "LNP Deporte y Salud", tipo: "Vegana", image: require("../../../assets/DeporteSalud.jpg")  },
  ];

  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 3 }} sx={{ maxWidth: 800, margin: 'auto' }}>
      {dietas.map((dieta, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ marginBottom: 2 }}>
          <Dieta title={dieta.title} tipo={dieta.tipo} image={dieta.image} />
        </Grid>
      ))}
    </Grid>
  );
}

export default DietasPendientes;

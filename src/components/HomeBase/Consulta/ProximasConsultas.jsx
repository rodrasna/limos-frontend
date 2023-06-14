import * as React from "react";
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import Consulta from "./Consulta";
import '../HomeBase.css';

const ProximasConsultas = () => {
  const consultas = [
    {
      cliente: "Lucía Martín Fontes",
      fecha: "2023-06-15 10:00",
      image: require("../../../assets/Lucia.jpg"),
      confirmada: true
    },
    {
      cliente: "Juan Pérez",
      fecha: "2023-06-14 10:00",
      image: require("../../../assets/Pedro.jpg"),
      confirmada: true
    },
    {
      cliente: "Mario Rodríguez",
      fecha: "2023-06-16 10:00",
      image: require("../../../assets/Richy.jpg"),
      confirmada: false
    },
    {
      cliente: "Ana García",
      fecha: "2023-06-17 10:00",
      image: require("../../../assets/Lucia.jpg"),
      confirmada: true
    }
  ];

  const consultasOrdenadas = consultas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  const siguienteConsulta = consultasOrdenadas.shift();

  return (
    <div>
      <h1>Siguiente consulta</h1>
      {siguienteConsulta && (
        <div className="consulta-rectangle">
          <img className="consulta-image-client-rectangle" src={siguienteConsulta.image} alt="client" />
          <div className="consulta-data-client-container siguiente-consulta">
            <span className="client-name">{siguienteConsulta.cliente}</span>
            <span className="date centered">{new Date(siguienteConsulta.fecha).toLocaleString()}</span>
          </div>
          <div className="opcion-buttons">
            <Button variant="contained" className="consulta-opcion-button" onClick={() => handleOptionClick("Iniciar consulta")}>
              Iniciar consulta
            </Button>
            <Button variant="outlined" className="consulta-opcion-button" onClick={() => handleOptionClick("Terminar consulta")}>
              Terminar consulta
            </Button>
            <Button variant="outlined" className="consulta-opcion-button" onClick={() => handleOptionClick("Consultar perfil")}>
              Consultar perfil
            </Button>
            <Button variant="outlined" className="consulta-opcion-button" onClick={() => handleOptionClick("Cambiar la fecha")}>
              Cambiar la fecha
            </Button>
            <Button variant="outlined" className="consulta-opcion-button" onClick={() => handleOptionClick("Cancelar la consulta")}>
              Cancelar consulta
            </Button>
          </div>
        </div>
      )}
      <h1>Próximas consultas</h1>
      <Grid container spacing={2}>
        {consultasOrdenadas.map((consulta, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Consulta
              cliente={consulta.cliente}
              fecha={new Date(consulta.fecha).toLocaleString()}
              image={consulta.image}
              confirmada={consulta.confirmada}
            />
          </Grid>
        ))}
      </Grid>

      <div className="separador"></div>
    </div>
  );
}

export default ProximasConsultas;

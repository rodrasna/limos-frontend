import * as React from "react";
import "../../App.css";
import Client from "./Client.jsx";
import Grid from '@mui/material/Grid';

import { Component } from 'react';


const clients = [
    {
      name: "Juan Pérez",
      profesional: "Dr. Luisa González",
      place: "Clínica Médica Central",
      plan: "Plan Básico",
      lastConsultDate: "23 de abril de 2022",
      hora: "10:00 am"
    },
    {
      name: "María García",
      profesional: "Dr. Roberto Sánchez",
      place: "Clínica Médica del Norte",
      plan: "Plan Plus",
      lastConsultDate: "15 de mayo de 2022",
      hora: "2:30 pm"
    },
    {
      name: "Pedro Rodríguez",
      profesional: "Dr. Ana Hernández",
      place: "Clínica Médica Sur",
      plan: "Plan Premium",
      lastConsultDate: "7 de junio de 2022",
      hora: "4:45 pm"
    }
  ];
  
const clientItems = clients.map((client, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
        <Client name={client.name} profesional={client.profesional} place={client.place} plan={client.plan} lastConsultDate={client.lastConsultDate} hora={client.hora} />
    </Grid>
));

class CenterClients extends Component {
    render() {
        return (
            <div className="center-column-basegrid-rectangle">
                <span className="hello-welcome">🍔Hola Juan!🍔</span>
                <div className="title-container">
                    <span className="section-title">Clientes</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <Grid container spacing={2}>
                    {clientItems}
                </Grid>
            </div>
        );
    }
}
export default CenterClients;
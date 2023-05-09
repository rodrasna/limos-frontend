import * as React from "react";
import "../../App.css";
import User from "./User.jsx";
import Grid from '@mui/material/Grid';
import { Component } from 'react';

const users = [
    { name: "Juan Pérez", specialty: "Nutricionista" },
    { name: "María García", specialty: "Nutricionista" },
    { name: "Pedro Rodríguez", specialty: "Secretaria" }
];

const userItems = users.map((user, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
        <User name={user.name} specialty={user.specialty} />
    </Grid>
));

class CenterTeam extends Component {
    render() {
        return (
            <div className="center-column-basegrid-rectangle">
                <span className="hello-welcome">🍔Hola Juan!🍔</span>
                <div className="title-container">
                    <span className="section-title">Equipo</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <Grid container spacing={2}>
                    {userItems}
                </Grid>
            </div>
        );
    }
}

export default CenterTeam;
import * as React from "react";
import "../../App.css";
import TeamMember from "./TeamMember.jsx";
import Grid from '@mui/material/Grid';
import { Component } from 'react';

const users = [
    { name: "Juan", specialty: "Nutricionista", image: require("../../assets/juanito.jpg") },
    { name: "María García", specialty: "Nutricionista", image: require("../../assets/Lucia.jpg") },
];

const userItems = users.map((user, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
        <TeamMember name={user.name} specialty={user.specialty} image={user.image} />
    </Grid>
));

class CenterTeam extends Component {
    render() {
        return (
            <div className="center-column-basegrid-rectangle">
                
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
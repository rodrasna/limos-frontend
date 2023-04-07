import * as React from "react";
import "../../App.css";

import Grid from '@mui/material/Grid';
import PeticionConsulta from "./PeticionConsulta";


import { Component } from 'react';

class PeticionesPeticionConsulta extends Component {
    render() {
        return (
            <Grid container rowSpacing={2} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <PeticionConsulta></PeticionConsulta>
                </Grid>
                <Grid item xs={6}>
                    <PeticionConsulta></PeticionConsulta>
                </Grid>
                <Grid item xs={6}>
                    <PeticionConsulta></PeticionConsulta>
                </Grid>
                <Grid item xs={6}>
                    <PeticionConsulta></PeticionConsulta>
                </Grid>
                <Grid item xs={6}>
                    <PeticionConsulta></PeticionConsulta>
                </Grid>
                <Grid item xs={6}>
                    <PeticionConsulta></PeticionConsulta>
                </Grid>
                <Grid item xs={6}>
                    <PeticionConsulta></PeticionConsulta>
                </Grid>
                <Grid item xs={6}>
                    <PeticionConsulta></PeticionConsulta>
                </Grid>
            </Grid>
        );
    }
}
export default PeticionesPeticionConsulta;
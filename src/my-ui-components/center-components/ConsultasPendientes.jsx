import * as React from "react";
import "../../App.css";

import Grid from '@mui/material/Grid';
import Consulta from "./Consulta";


import { Component } from 'react';

class ConsultasPendientes extends Component {
    render() {
        return (
            <Grid container rowSpacing={2} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Consulta></Consulta>
                </Grid>
                <Grid item xs={6}>
                    <Consulta></Consulta>
                </Grid>
                <Grid item xs={6}>
                    <Consulta></Consulta>
                </Grid>
                <Grid item xs={6}>
                    <Consulta></Consulta>
                </Grid>
                <Grid item xs={6}>
                    <Consulta></Consulta>
                </Grid>
                <Grid item xs={6}>
                    <Consulta></Consulta>
                </Grid>
                <Grid item xs={6}>
                    <Consulta></Consulta>
                </Grid>
                <Grid item xs={6}>
                    <Consulta></Consulta>
                </Grid>
            </Grid>
        );
    }
}
export default ConsultasPendientes;
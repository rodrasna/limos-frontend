import * as React from "react";
import "../../App.css";

import Grid from '@mui/material/Grid';

import Dieta from "./Dieta";


import { Component } from 'react';

class ProximasDietas extends Component {
    render() {
        return (
            <Grid container rowSpacing={2} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <Dieta></Dieta>
                </Grid>
                <Grid item xs={4}>
                    <Dieta></Dieta>
                </Grid>
                <Grid item xs={4}>
                    <Dieta></Dieta>
                </Grid>
                <Grid item xs={4}>
                    <Dieta></Dieta>
                </Grid>
            </Grid>
        );
    }
}
export default ProximasDietas;
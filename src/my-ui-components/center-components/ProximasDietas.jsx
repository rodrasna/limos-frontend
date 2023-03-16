import * as React from "react";
import "../../App.css";
import intersect1 from "../../assets/intersect1.svg";
import intersect6 from "../../assets/intersect6.svg";
import intersect3 from "../../assets/intersect3.svg";
import intersect5 from "../../assets/intersect5.svg";
import group9 from "../../assets/group9.svg";
import intersect from "../../assets/intersect.svg";
import intersect4 from "../../assets/intersect4.svg";
import intersect7 from "../../assets/intersect7.svg";
import group91 from "../../assets/group91.svg";
import intersect2 from "../../assets/intersect2.svg";
import group93 from "../../assets/group93.svg";
import group92 from "../../assets/group92.svg";

import Grid from '@mui/material/Grid';

import Dieta from "./Dieta";


import { Component } from 'react';

class ProximasDietas extends Component {
    render() {
        return (
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 8 }}>
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
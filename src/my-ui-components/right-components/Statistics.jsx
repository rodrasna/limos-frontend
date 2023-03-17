import * as React from "react";
import "../../App.css";
import intersect1 from "../../assets/intersect1.svg";
import group9 from "../../assets/group9.svg";
import intersect from "../../assets/intersect.svg";
import { Component } from 'react';

import Grid from '@mui/material/Grid';

class Statistics extends Component {
    render() {
        return (
            <>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div className="statistic-rectangle">
                            {/* <img className="uppershadow-statistic-rectangle" src={intersect} alt="Intersect" />
                            <img className="lowershadow-statistic-rectangle" src={intersect1} alt="Intersect" /> */}
                            <span className="statistic-box-title">Consultas hechas</span>
                            <div className="statistic-box-container">
                                <span className="statistic-box-num">02</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="statistic-rectangle">
                            <span className="statistic-box-title">Horas en consulta</span>
                            <div className="statistic-box-container">
                                <span className="statistic-box-num">250</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="statistic-rectangle">
                            <span className="statistic-box-title">Consulta actual</span>
                            <div className="statistic-box-container">
                                <span className="statistic-box-num">03</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="statistic-rectangle">
                            <span className="statistic-box-title">Tareas acabadas</span>
                            <div className="statistic-box-container">
                                <span className="statistic-box-num">05</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </>
        );
    }
}
export default Statistics;
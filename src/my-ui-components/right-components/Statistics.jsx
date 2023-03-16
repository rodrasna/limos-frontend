import * as React from "react";
import "../../App.css";
import rectangle29 from "../../assets/rectangle29.svg";

import { Component } from 'react';

import Grid from '@mui/material/Grid';

class Statistics extends Component {
    render() {
        return (
            <>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div className="rectangle-5-5">
                            <span className="statistic-box-title">Consultas hechas</span>
                            <div className="statistic-box-container">
                                <span className="statistic-box-num">02</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="rectangle-5-5">
                            <span className="statistic-box-title">Horas en consulta</span>
                            <div className="statistic-box-container">
                                <span className="statistic-box-num">250</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="rectangle-5-5">
                            <span className="statistic-box-title">Consulta actual</span>
                            <div className="statistic-box-container">
                                <span className="statistic-box-num">03</span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="rectangle-5-5">
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
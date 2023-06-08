import * as React from "react";
import "./Statistics.css";
import { Component } from 'react';
import Grid from '@mui/material/Grid';

class Statistics extends Component {

    render() {
        const statistics = [
            {
                title: "Consultas hechas",
                num: 2,
            },
            {
                title: "Horas en consulta",
                num: 250,
            },
            {
                title: "Consulta actual",
                num: 3,
            },
            {
                title: "Tareas acabadas",
                num: 5,
            },
        ];

        return (
            <>
                <Grid container spacing={2} justifyContent="center">
                    {statistics.map((statistic, index) => (
                        <Grid item xs={6} key={index}>
                            <div className="statistic-rectangle">
                                <span className="statistic-box-title">{statistic.title}</span>
                                <div className="statistic-box-container">
                                    <span className="statistic-box-num">{statistic.num}</span>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </>
        );
    }
}

export default Statistics;

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

import Consulta from "./Consulta";


import { Component } from 'react';

class ProximasConsultas extends Component {
    render() {
        return (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Consulta></Consulta>
                </Grid>
                <Grid item xs={6}>
                    <div className="group-3">
                        <img className="intersect-7" src={intersect7} />
                        <img className="intersect-6" src={intersect6} />
                        <div className="rectangle-5-1">
                            <div className="flex-container-11">
                                <span className="italian">Rodri 2</span>
                                <span className="num-20-lessons">20 lessons</span>
                                <img className="group-93" src={group93} />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="group-2-1">
                        <img className="intersect-3" src={intersect3} />
                        <img className="intersect-2" src={intersect2} />
                        <div className="rectangle-5-2">
                            <div className="flex-container-19">
                                <span className="portugese">Rodri 3</span>
                                <span className="num-30-lessons">30 lessons</span>
                                <img className="group-91" src={group91} />
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="group-4-1">
                        <img className="intersect-5" src={intersect5} />
                        <img className="intersect-4" src={intersect4} />
                        <div className="rectangle-5-3">
                            <div className="flex-container-20">
                                <span className="german">Rodri 4</span>
                                <span className="num-40-lessons">40 lessons</span>
                                <img className="group-92" src={group92} />
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
export default ProximasConsultas;
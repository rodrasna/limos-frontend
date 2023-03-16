import * as React from "react";
import "../../App.css";
import rectangle26 from "../../assets/rectangle26.svg";
import rectangle24 from "../../assets/rectangle24.svg";
import group16 from "../../assets/group16.svg";
import group14 from "../../assets/group16.svg";
import moreVertical6 from "../../assets/moreVertical6.svg";

import Grid from '@mui/material/Grid';


import { Component } from 'react';

class DietasPendientes extends Component {
    render() {
        return (
            <Grid container rowSpacing={2} columnSpacing={{ xs: 6, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <div className="rectangle-10">
                        <img className="rectangle-24" src={rectangle24} />
                        <div className="flex-container-13">
                            <span>Lucía Martín Fontes</span>
                            <span className="num-800-am-1000-am">8:00 AM - 10:00 AM</span>
                        </div>
                        <img className="more-vertical-6" src={moreVertical6} />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="rectangle-12">
                        <img className="rectangle-26" src={rectangle26} />
                        <div className="flex-container-14">
                            <span className="listening-intermed">
                                Lucía Martín Fontes
                            </span>
                            <span className="num-0300-pm-0400-pm">03:00 PM - 04:00 PM</span>
                        </div>
                        <img className="more-vertical-6" src={moreVertical6} />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="rectangle-17">
                        <img className="group-15" src={group14} />
                        <div className="flex-container-15">
                            <span>Lucía Martín Fontes</span>
                            <span className="num-800-am-1200-pm">8:00 AM - 12:00 PM</span>
                        </div>
                        <img className="more-vertical-6" src={moreVertical6} />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="rectangle-16">
                        <img className="group-17" src={group16} />
                        <div className="flex-container-16">
                            <span className="grammar-intermedia">
                                Lucía Martín Fontes
                            </span>
                            <span className="num-800-am-1200-pm-1">8:00 AM - 12:00 PM</span>
                        </div>
                        <img className="more-vertical-6" src={moreVertical6} />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="rectangle-11">
                        <img className="group-16" src={group16} />
                        <div className="flex-container-22">
                            <span className="reading-beginner-t">
                                Lucía Martín Fontes
                            </span>
                            <span className="num-0100-pm-0200-pm">01:00 PM - 02:00 PM</span>
                        </div>
                        <img className="more-vertical-6" src={moreVertical6} />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="rectangle-11">
                        <img className="group-14" src={group14} />
                        <div className="flex-container-22">
                            <span className="reading-beginner-t">
                                Lucía Martín Fontes
                            </span>
                            <span className="num-0700-pm-0800-pm">07:00 PM - 08:00 PM</span>
                        </div>
                        <img className="more-vertical-6" src={moreVertical6} />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="rectangle-11">
                        <img className="rectangle-27" src={rectangle26} />
                        <div className="flex-container-22">
                            <span className="reading-beginner-t">
                                Lucía Martín Fontes
                            </span>
                            <span className="num-800-am-1200-pm-2">8:00 AM - 12:00 PM</span>
                        </div>
                        <img className="more-vertical-6" src={moreVertical6} />
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="rectangle-11">
                        <img className="rectangle-28" src={rectangle24} />
                        <div className="flex-container-22">
                            <span className="reading-beginner-t">
                                Lucía Martín Fontes
                            </span>
                            <span className="num-800-am-1200-pm-3">8:00 AM - 12:00 PM</span>
                        </div>
                        <img className="more-vertical-6" src={moreVertical6} />
                    </div>
                </Grid>
            </Grid>
        );
    }
}
export default DietasPendientes;
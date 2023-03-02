import * as React from "react";
import "../App.css";
import moreVertical7 from "../assets/moreVertical7.svg";
import rectangle26 from "../assets/rectangle26.svg";
import rectangle24 from "../assets/rectangle24.svg";
import intersect1 from "../assets/intersect1.svg";
import group16 from "../assets/group16.svg";
import intersect6 from "../assets/intersect6.svg";
import intersect3 from "../assets/intersect3.svg";
import intersect5 from "../assets/intersect5.svg";
import group9 from "../assets/group9.svg";
import search1 from "../assets/search1.svg";
import intersect from "../assets/intersect.svg";
import frame2 from "../assets/frame2.svg";
import intersect4 from "../assets/intersect4.svg";
import intersect7 from "../assets/intersect7.svg";
import vscalendarAlt from "../assets/vscalendarAlt.svg";
import group91 from "../assets/group91.svg";
import group14 from "../assets/group14.svg";
import moreVertical1 from "../assets/moreVertical1.svg";
import frame from "../assets/frame.svg";
import moreVertical4 from "../assets/moreVertical4.svg";
import moreVertical6 from "../assets/moreVertical6.svg";
import moreVertical5 from "../assets/moreVertical5.svg";
import intersect2 from "../assets/intersect2.svg";
import moreVertical3 from "../assets/moreVertical3.svg";
import frame1 from "../assets/frame1.svg";
import frame3 from "../assets/frame3.svg";
import group93 from "../assets/group93.svg";
import moreVertical8 from "../assets/moreVertical8.svg";
import moreVertical2 from "../assets/moreVertical2.svg";
import group92 from "../assets/group92.svg";

import ProximasConsultas from "./ProximasConsultas";
import DietasPendientes from "./DietasPendientes";


import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';


import { Component } from 'react';

class Center extends Component {
    render() {
        return (
            <div className="rectangle-2">
                <span className="hello-welcome">Hello JUAN, welcome back!</span>
                <div className="flex-container-9">
                    <span className="my-courses">Proximas Consultas</span>
                    <span className="view-all">View All</span>
                </div>
                <ProximasConsultas></ProximasConsultas>
                <div className="flex-container-9">
                    <span className="planning">Dietas Pendientes</span>
                    <span className="view-all">View All</span>
                </div>
                <DietasPendientes></DietasPendientes>
                
            </div>
        );
    }
}
export default Center;
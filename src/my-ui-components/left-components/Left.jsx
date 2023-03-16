import * as React from "react";
import "../../App.css";
import rectangle291 from "../../assets/rectangle291.svg";
import iconlyLightOutlineS from "../../assets/iconlyLightOutlineS.svg";
import iconlyLightOutlineF from "../../assets/iconlyLightOutlineF.svg";
import iconlyLightOutlineH from "../../assets/iconlyLightOutlineH.svg";
import fill1152 from "../../assets/fill1152.svg";
import iconlyLightOutlineC from "../../assets/iconlyLightOutlineC.svg";
import ellipse1 from "../../assets/ellipse1.svg";
import iconlyLightOutlineC1 from "../../assets/iconlyLightOutlineC1.svg";

import { Component } from 'react';

class LeftBar extends Component {
    render() {
        return (
            <div className="column-basegrid-rectangle">
                <div className="flex-container">
                    <img className="fill-1152" src={fill1152} />
                    <span className="se">LIMOS</span>
                </div>
                <div className="flex-container-1">
                    <img className="iconly-light-outline-h" src={iconlyLightOutlineH} />
                    <span className="overview">Inicio</span>
                    <img className="ellipse-4" src={ellipse1} />
                </div>
                <div className="flex-container-2">
                    <img
                        className="iconly-light-outline-c-1"
                        src={iconlyLightOutlineC1}
                    />
                    <span className="course">Agenda</span>
                </div>
                <div className="flex-container-2">
                    <img className="iconly-light-outline-f" src={iconlyLightOutlineF} />
                    <span className="resources">Usuarios</span>
                </div>
                <div className="flex-container-2">
                    <img className="iconly-light-outline-c" src={iconlyLightOutlineC} />
                    <span className="message">Clientes</span>
                </div>
                <div className="flex-container-2">
                    <img className="iconly-light-outline-s" src={iconlyLightOutlineS} />
                    <span className="setting">Biblioteca</span>
                </div>
                <div className="flex-container-2">
                    <img className="iconly-light-outline-s" src={iconlyLightOutlineS} />
                    <span className="setting">Pagos</span>
                </div>
                <div className="flex-container-2">
                    <img className="iconly-light-outline-s" src={iconlyLightOutlineS} />
                    <span className="setting">Estadisticas</span>
                </div>
                
                <div className="rectangle-30">
                    <span className="upgrade-your-plan">Mejora tu plan</span>
                    <div className="flex-container-7">
                        <span className="go-to-pro">Ir a PRO</span>
                        <img className="rectangle-29" src={rectangle291} />
                    </div>
                </div>
            </div>
        );
    }
}
export default LeftBar;
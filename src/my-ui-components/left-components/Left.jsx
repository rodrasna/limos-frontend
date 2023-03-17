import * as React from "react";
import "../../App.css";
import rectangle291 from "../../assets/rectangle291.svg";
import iconlyLightOutlineS from "../../assets/search.svg";
import iconlyLightOutlineF from "../../assets/person.svg";
import iconlyLightOutlineH from "../../assets/iconlyLightOutlineH.svg";
import fill1152 from "../../assets/fill1152.svg";
import iconlyLightOutlineC from "../../assets/person-vcard.svg";
import ellipse1 from "../../assets/ellipse1.svg";
import iconlyLightOutlineC1 from "../../assets/calendar.svg";
import pay from "../../assets/credit-card.svg";
import statistic from "../../assets/bar-chart-line.svg";
import home from "../../assets/house.svg";

import { Component } from 'react';

class LeftBar extends Component {
    render() {
        return (
            <div className="left-column-basegrid-rectangle">
                <div className="flex-container">
                    <img className="fill-1152" src={fill1152} />
                    <span className="se">LIMOS</span>
                </div>
                <div className="left-sidebar-link-active">
                    <img className="iconly-light-outline-h" src={home} />
                    <span className="overview">Inicio</span>
                    <img className="ellipse-4" src={ellipse1} />
                </div>
                <div className="left-sidebar-link">
                    <img
                        className="iconly-light-outline-c-1"
                        src={iconlyLightOutlineC1}
                    />
                    <span className="course">Agenda</span>
                </div>
                <div className="left-sidebar-link">
                    <img className="iconly-light-outline-f" src={iconlyLightOutlineF} />
                    <span className="resources">Usuarios</span>
                </div>
                <div className="left-sidebar-link">
                    <img className="iconly-light-outline-c" src={iconlyLightOutlineC} />
                    <span className="message">Clientes</span>
                </div>
                <div className="left-sidebar-link">
                    <img className="iconly-light-outline-s" src={iconlyLightOutlineS} />
                    <span className="setting">Biblioteca</span>
                </div>
                <div className="left-sidebar-link">
                    <img className="iconly-light-outline-s" src={pay} />
                    <span className="setting">Pagos</span>
                </div>
                <div className="left-sidebar-link">
                    <img className="iconly-light-outline-s" src={statistic} />
                    <span className="setting">Estadisticas</span>
                </div>
            </div>
        );
    }
}
export default LeftBar;
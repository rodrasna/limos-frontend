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
import { Link, NavLink } from "react-router-dom";

import { Component } from 'react';

class LeftBar extends Component {
    render() {
        return (
            <div className="left-column-basegrid-rectangle">
                <div className="flex-container">
                    <img className="fill-1152" src={fill1152} />
                    <span className="se">LIMOS</span>
                </div>
                <NavLink to="/" className="left-sidebar-link">
                    <img className="iconly-light-outline-h" src={home} />
                    <span className="overview">Inicio</span>
                </NavLink>
                <NavLink to="/agenda" className="left-sidebar-link">
                    <img
                        className="iconly-light-outline-c-1"
                        src={iconlyLightOutlineC1}
                    />
                    <span className="course">Agenda</span>
                </NavLink>
                <NavLink to="/users" className="left-sidebar-link">
                    <img className="iconly-light-outline-f" src={iconlyLightOutlineF} />
                    <span className="resources">Usuarios</span>
                </NavLink>
                <NavLink to="/clients" className="left-sidebar-link">
                    <img className="iconly-light-outline-c" src={iconlyLightOutlineC} />
                    <span className="message">Clientes</span>
                </NavLink>
                <NavLink to="/library" className="left-sidebar-link">
                    <img className="iconly-light-outline-s" src={iconlyLightOutlineS} />
                    <span className="setting">Biblioteca</span>
                </NavLink>
                <NavLink to="/pay" className="left-sidebar-link">
                    <img className="iconly-light-outline-s" src={pay} />
                    <span className="setting">Pagos</span>
                </NavLink>
                <NavLink to="/statistic" className="left-sidebar-link">
                    <img className="iconly-light-outline-s" src={statistic} />
                    <span className="setting">Estadisticas</span>
                </NavLink>
            </div>
        );
    }
}
export default LeftBar;
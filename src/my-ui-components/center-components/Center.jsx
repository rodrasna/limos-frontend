import * as React from "react";
import "../../App.css";
import "../../style/Center.css"

import { Component } from 'react';
import DietasPendientes from "./DietasPendientes";
import ProximasConsultas from "./ProximasConsultas";

class Center extends Component {
    render() {
        return (
            <div className="center-column-basegrid-rectangle">
                <span className="hello-welcome">🍔Hola Juan!🍔</span>
                <div className="title-container">
                    <span className="section-title">Dietas Pendientes</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <DietasPendientes></DietasPendientes>
                <div className="title-container">
                    <span className="section-title">Proximas Consultas</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <ProximasConsultas></ProximasConsultas>
            </div>
        );
    }
}
export default Center;
import * as React from "react";
import "../../App.css";
import "./HomeBase.css"
import { Component } from 'react';
import DietasPendientes from "./Dieta/DietasPendientes";
import ProximasConsultas from "./Consulta/ProximasConsultas";

class Center extends Component {
    render() {
        return (
            <div className="center-column-basegrid-rectangle">
                <div className="title-container">
                    <span className="section-title">Dietas Pendientes</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <DietasPendientes></DietasPendientes>
                <div className="title-container">
                    <span className="section-title">Próximas Consultas</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <ProximasConsultas></ProximasConsultas>
            </div>
        );
    }
}
export default Center;
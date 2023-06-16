import * as React from "react";
import "../../App.css";
import "./HomeBase.css"
import { Component } from 'react';
import DietasPendientes from "./Dieta/DietasPendientes";
import ProximasConsultas from "./Consulta/ProximasConsultas";
import Consulta from "./Consulta/Consulta";

class   Center extends Component {
    render() {
        const consulta =
        {
            cliente: "Lucía Martín Fontes",
            fecha: "2023-06-15",
            image: require("../../assets/Lucia.jpg")
        }
        return (
            <div className="center-column-basegrid-rectangle">
                <div className="title-container">
                    <span className="section-title">Consultas</span>
                    <span className="view-all">Ver todas</span>
                </div>
                <ProximasConsultas></ProximasConsultas>
                <div className="title-container">
                    <span className="section-title">Dietas Pendientes</span>
                    <span className="view-all">Ver todas</span>
                </div>
                <DietasPendientes></DietasPendientes>
            </div>
        );
    }
}
export default Center;
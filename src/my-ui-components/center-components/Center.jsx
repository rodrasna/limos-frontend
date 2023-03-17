import * as React from "react";
import "../../App.css";

import { Component } from 'react';
import ProximasDietas from "./ProximasDietas";
import ConsultasPendientes from "./ConsultasPendientes";

class Center extends Component {
    render() {
        return (
            <div className="center-column-basegrid-rectangle">
                <span className="hello-welcome">🍔Hola Juan!🍔</span>
                <div className="title-container">
                    <span className="planning">Dietas Pendientes</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <ProximasDietas></ProximasDietas>
                <div className="title-container">
                    <span className="my-courses">Proximas Consultas</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <ConsultasPendientes></ConsultasPendientes>
            </div>
        );
    }
}
export default Center;
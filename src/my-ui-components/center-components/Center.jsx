import * as React from "react";
import "../../App.css";

import ProximasConsultas from "./ProximasConsultas";
import DietasPendientes from "./DietasPendientes";

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
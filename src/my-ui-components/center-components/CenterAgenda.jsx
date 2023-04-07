import * as React from "react";
import "../../App.css";

import { Component } from 'react';
import ProximasDietas from "./ProximasDietas";
import ConsultasPendientes from "./ConsultasPendientes";
import PeticionesConsulta from "./PeticionesConsulta";

class CenterAgenda extends Component {
    render() {
        return (
            <div className="center-column-basegrid-rectangle">
                <span className="hello-welcome">🍔Hola Juan!🍔</span>
                <div className="title-container">
                    <span className="my-courses">Nuevas peticiones de consulta</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <PeticionesConsulta></PeticionesConsulta>
                <div className="title-container">
                    <span className="my-courses">Google Calndar</span>
                    {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FMadrid&showTz=0&showCalendars=0&showTabs=0&showPrint=0&showDate=0&showNav=0&showTitle=0" style="border-width:0" width="800" height="600" frameborder="0"></iframe> */}
                    <span className="view-all">Ver todo</span>
                </div>
            </div>
        );
    }
}
export default CenterAgenda;
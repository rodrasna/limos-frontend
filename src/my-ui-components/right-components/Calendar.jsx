import * as React from "react";
import "../../App.css";
import group30 from "../../assets/group30.svg";

import { Component } from 'react';

class Statistics extends Component {
    render() {
        return (
            <><div className="flex-container-35">
            <span className="day">Día</span>
            <span className="week">Semana</span>
            <span className="month">Mes</span>
          </div>
          <img className="group-30" src={group30} />
          <div className="flex-container-36">
            <span>Lun</span>
            <span>Mar</span>
            <span>Mier</span>
            <span>Jue</span>
            <span className="fri">Vier</span>
            <span className="sat">Sab</span>
            <span className="sun">Dom</span>
          </div></>
        );
    }
}
export default Statistics;
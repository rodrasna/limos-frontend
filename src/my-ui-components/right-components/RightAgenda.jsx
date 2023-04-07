import * as React from "react";
import "../../App.css";

import { Component } from 'react';
import Statistics from "./Statistics";
import Profile from "./Profile";
import Calendar from "./Calendar";

class Right extends Component {
    render() {
        return (
            <>
                <div className="column-basegrid-rectangle">
                    <Profile></Profile>
                    <div className="title-container">
                        <span className="my-courses">Filtros</span>
                        <span className="view-all">Ver todo</span>
                    </div>
                </div>
            </>
        );
    }
}
export default Right;
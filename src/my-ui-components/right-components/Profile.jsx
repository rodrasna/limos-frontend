import * as React from "react";
import "../../App.css";
import claritynotification from "../../assets/claritynotification.svg";
import chevronDown1 from "../../assets/chevronDown1.svg";
import rectangle4 from "../../assets/juanito.jpg";

import { Component } from 'react';

class Statistics extends Component {
    render() {
        return (
            <><div className="profile-container">
                <img className="claritynotification" src={claritynotification} />
                <div className="rectangle-3">
                    <img className="rectangle-4" src={rectangle4} />
                    <div className="flex-container-28">
                        <span className="profile-name">Juan</span>
                        <span className="profile-plan">Administrador</span>
                    </div>
                    <img className="chevron-down-1" src={chevronDown1} />
                </div>
            </div></>
        );
    }
}
export default Statistics;
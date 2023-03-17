import * as React from "react";
import "../../App.css";
import claritynotification from "../../assets/claritynotification.svg";
import chevronDown1 from "../../assets/chevronDown1.svg";
import rectangle4 from "../../assets/juanito.jpg";

import { Component } from 'react';

import { Icon, IconButton } from "@mui/material";

class Statistics extends Component {
    render() {
        return (
            <><div className="profile-container">
                <div className="profile-rectangle">
                    <img className="profile-image" src={rectangle4} />
                    <div className="vl" />
                    <IconButton>
                        <img className="claritynotification" src={claritynotification} />
                    </IconButton>
                    <div className="vl" />
                    <div className="profile-data-container">
                        <span className="profile-name">Juan</span>
                        <span className="profile-plan">Administrador</span>
                    </div>
                    <IconButton>
                        <img className="profile-rectangle-options" src={chevronDown1} />
                    </IconButton>

                </div>
            </div></>
        );
    }
}
export default Statistics;
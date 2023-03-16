import * as React from "react";
import "../../App.css";
import claritynotification from "../../assets/claritynotification.svg";
import chevronDown1 from "../../assets/chevronDown1.svg";
import rectangle4 from "../../assets/rectangle4.png";

import { Component } from 'react';

class Statistics extends Component {
    render() {
        return (
            <><div className="flex-container-27">
                <img className="claritynotification" src={claritynotification} />
                <div className="rectangle-3">
                    <img className="rectangle-4" src={rectangle4} />
                    <div className="flex-container-28">
                        <span className="bruno-fernandes">Bruno Fernandes</span>
                        <span className="basic-plan">Basic Plan</span>
                    </div>
                    <img className="chevron-down-1" src={chevronDown1} />
                </div>
            </div></>
        );
    }
}
export default Statistics;
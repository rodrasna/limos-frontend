import * as React from "react";
import "../../App.css";
import group30 from "../../assets/group30.svg";

import { Component } from 'react';

class Statistics extends Component {
    render() {
        return (
            <><div className="flex-container-35">
            <span className="activity">Activity</span>
            <span className="day">Day</span>
            <span className="week">Week</span>
            <span className="month">Month</span>
          </div>
          <img className="group-30" src={group30} />
          <div className="flex-container-36">
            <span>Mon</span>
            <span>Tues</span>
            <span>Wed</span>
            <span>Thurs</span>
            <span className="fri">Fri</span>
            <span className="sat">Sat</span>
            <span className="sun">Sun</span>
          </div></>
        );
    }
}
export default Statistics;
import * as React from "react";
import "../../App.css";

import { Component } from 'react';
import Statistics from "./Statistics";
import Profile from "./Profile";
import Calendar from "./Calendar";

class Right extends Component {
    render() {
        return (
            <div className="flex-container-26">
            <Profile></Profile>
            <Statistics></Statistics>
            <Calendar></Calendar>
          </div>
        );
    }
}
export default Right;
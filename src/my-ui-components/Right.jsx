import * as React from "react";
import "../App.css";
import claritynotification from "../assets/claritynotification.svg";
import chevronDown1 from "../assets/chevronDown1.svg";
import rectangle29 from "../assets/rectangle29.svg";
import rectangle4 from "../assets/rectangle4.png";
import group30 from "../assets/group30.svg";

import { Component } from 'react';

class Center extends Component {
    render() {
        return (
            <div className="flex-container-26">
            <div className="flex-container-27">
              <img className="claritynotification" src={claritynotification} />
              <div className="rectangle-3">
                <img className="rectangle-4" src={rectangle4} />
                <div className="flex-container-28">
                  <span className="bruno-fernandes">Bruno Fernandes</span>
                  <span className="basic-plan">Basic Plan</span>
                </div>
                <img className="chevron-down-1" src={chevronDown1} />
              </div>
            </div>
            <span className="statistics">Statistics</span>
            <div className="flex-container-29">
              <div className="rectangle-5-5">
                <span className="courses-completed">Courses Completed</span>
                <div className="flex-container-30">
                  <img className="rectangle-29-1" src={rectangle29} />
                  <span className="num-02">02</span>
                </div>
              </div>
              <div className="rectangle-6">
                <span className="total-points-gained">Total Points Gained</span>
                <div className="flex-container-31">
                  <img className="rectangle-30-1" src={rectangle29} />
                  <span className="num-250">250</span>
                </div>
              </div>
            </div>
            <div className="flex-container-32">
              <div className="rectangle-7">
                <span className="courses-in-progress">Courses In Progress</span>
                <div className="flex-container-33">
                  <img className="rectangle-32" src={rectangle29} />
                  <span className="num-03">03</span>
                </div>
              </div>
              <div className="rectangle-8">
                <div className="flex-container-34">
                  <span>Tasks Finished</span>
                  <img className="rectangle-31" src={rectangle29} />
                </div>
                <span className="num-05">05</span>
              </div>
            </div>
            <div className="flex-container-35">
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
            </div>
          </div>
        );
    }
}
export default Center;
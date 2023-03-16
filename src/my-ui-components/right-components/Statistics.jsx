import * as React from "react";
import "../../App.css";
import rectangle29 from "../../assets/rectangle29.svg";

import { Component } from 'react';

class Statistics extends Component {
    render() {
        return (
            <><span className="statistics">Statistics</span><div className="flex-container-29">
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
            </div><div className="flex-container-32">
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
                </div></>
        );
    }
}
export default Statistics;
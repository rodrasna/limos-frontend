import * as React from "react";
import "./Right.css";
import { Component } from 'react';
import Statistics from "../StatisticBase/Statistics";
import Calendar from "./Calendar";

class Right extends Component {
    constructor(props) {
        super(props);
        this.state = { width: window.innerWidth };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const isSmallScreen = this.state.width < 768;
        const rightColumnBasegridRectangleClassNames = isSmallScreen
            ? "right-column-basegrid-rectangle small-screen"
            : "right-column-basegrid-rectangle";

        return (
            <>
                <div className={rightColumnBasegridRectangleClassNames}>
                    <div className="title-container">
                        <span className="section-title">Estadísticas</span>
                        <span className="view-all">Ver todo</span>
                    </div>
                    <Statistics></Statistics>
                    <div className="title-container">
                        <span className="section-title">Actividad</span>
                        <span className="view-all">Ver todo</span>
                    </div>
                    <Calendar></Calendar>
                </div>
            </>
        );
    }
}
export default Right;

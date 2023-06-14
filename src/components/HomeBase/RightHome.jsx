import * as React from "react";
import "./HomeBase.css";
import { Component } from 'react';
import Statistics from "../StatisticBase/Statistics";

class RightHome extends Component {
    
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
        const clientBirthday = "Rafa";
        const isSmallScreen = this.state.width < 768;
        const rightColumnBasegridRectangleClassNames = isSmallScreen
            ? "right-column-basegrid-rectangle small-screen"
            : "right-column-basegrid-rectangle";

        const isBirthday = true; // Cambia esto a la lógica real para determinar si es el cumpleaños de un cliente

        return (
            <>
                {isBirthday && (
                    <div className="right-column-basegrid-rectangle birthday">
                        <div className="title-container">
                            <span className="section-title-birthday">¡Es el cumpleaños de @{clientBirthday} hoy!</span>
                        </div>
                        <div className="birthday-content">
                            {/* Contenido del cumpleaños */}
                        </div>
                    </div>
                )}
                <div className={rightColumnBasegridRectangleClassNames}>
                    <div className="title-container">
                        <span className="section-title">Estadísticas</span>
                        <span className="view-all">Ver todo</span>
                    </div>
                    <Statistics />
                    <div className="title-container">
                        <span className="section-title">Conversaciones abiertas</span>
                        <span className="view-all">Ver todo</span>
                    </div>
                    {/* Contenido de las conversaciones abiertas */}
                    <div className="title-container">
                        <span className="section-title">Acompañamiento</span>
                        <span className="view-all">Ver todo</span>
                    </div>
                    {/* Contenido de la actividad de los clientes */}
                </div>
            </>
        );
    }
}

export default RightHome;

import * as React from "react";
import { Component } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Checkbox,
    FormControlLabel,
    Typography,
} from "@mui/material";
import Profile from "./Profile.jsx";
import "../../style/RightClients.css";


class RightClients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            selectedUser: "",
            selectedPlace: [],
            selectedProfesionals: [],
            selectedOrderBy: [],
            selectedPlans: [],
        };
    }


    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        this.setState({ width: window.innerWidth });
    };

    //handleOrderBy - this function will handle the order by select box
    handleOrderBy = (event) => {
        const selectedValue = event.target.value;
        const selectedOrderBy = [...this.state.selectedOrderBy]; // Copia el array existente para evitar mutaciones directas
        const selectedIndex = selectedOrderBy.indexOf(selectedValue);

        if (selectedIndex === -1) {
            // add the value to the selected users array
            selectedOrderBy.push(selectedValue);
        } else {
            // remove the value from the selected users array
            selectedOrderBy.splice(selectedIndex, 1);
        }
        this.props.onFilterChange(this.state.selectedPlace, selectedOrderBy, this.state.selectedProfesionals, this.state.selectedPlans);
        this.setState({ selectedOrderBy });
    };

    handlePlace = (event) => {
        const selectedValue = event.target.value;
        const selectedPlace = [...this.state.selectedPlace];
        const selectedIndex = selectedPlace.indexOf(selectedValue);

        if (selectedIndex === -1) {
            // add the value to the selected options array
            selectedPlace.push(selectedValue);
        } else {
            // remove the value from the selected options array
            selectedPlace.splice(selectedIndex, 1);
        }
        this.props.onFilterChange(selectedPlace, this.state.selectedOrderBy, this.state.selectedProfesionals, this.state.selectedPlans);
        this.setState({ selectedPlace });
    };

    handleProfesionals = (event) => {
        const selectedValue = event.target.value;
        const selectedProfesionals = [...this.state.selectedProfesionals];
        const selectedIndex = selectedProfesionals.indexOf(selectedValue);

        if (selectedIndex === -1) {
            // Agregar el valor al array de profesionales seleccionados
            selectedProfesionals.push(selectedValue);
        } else {
            // Eliminar el valor del array de profesionales seleccionados
            selectedProfesionals.splice(selectedIndex, 1);
        }

        // Actualizar el estado y llamar a la función de filtro del padre
        this.setState({ selectedProfesionals });
        this.props.onFilterChange(
            this.state.selectedPlace,
            this.state.selectedOrderBy,
            selectedProfesionals,
            this.state.selectedPlans
        );
    };


    handlePlans = (event) => {
        const selectedValue = event.target.value;
        const selectedPlans = [...this.state.selectedPlans];
        const selectedIndex = selectedPlans.indexOf(selectedValue);

        if (selectedIndex === -1) {
            // add the value to the selected options array
            selectedPlans.push(selectedValue);
        } else {
            // remove the value from the selected options array
            selectedPlans.splice(selectedIndex, 1);
        }
        this.props.onFilterChange(this.state.selectedPlace, this.state.selectedOrderBy, this.state.selectedProfesionals, selectedPlans);
        this.setState({ selectedPlans });
    };




    render() {
        const clients = [
            {
                name: "María García",
                profesional: "Juan Diaz Cobiella",
                place: "Consulta Presencial",
                plan: "LNP Élite",
                lastConsultDate: "15 de mayo de 2022",
                hora: "2:30 pm"
            },
            {
                name: "Pedro Rodríguez",
                profesional: "Lucía Martín Fontes",
                place: "Consulta Presencial",
                plan: "LNP Élite",
                lastConsultDate: "7 de junio de 2022",
                hora: "4:45 pm"
            }
        ];

        const isSmallScreen = this.state.width < 768;
        const rightColumnBasegridRectangleClassNames = isSmallScreen
            ? "right-column-basegrid-rectangle small-screen"
            : "right-column-basegrid-rectangle";

        return (
            <>
                <div className={rightColumnBasegridRectangleClassNames}>
                    <Profile></Profile>
                    <div className="title-container">
                        <span className="section-title">Filtros</span>
                    </div>
                    <div className="filters-container">
                        <Accordion className="MuiAccordion-root">
                            <AccordionSummary>
                                <Typography>Ordenar por</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="checkbox-list">
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                className="checkbox-list-item"
                                                checked={this.state.selectedOrderBy.includes("A-Z")}
                                                onChange={this.handleOrderBy}
                                                value="A-Z"
                                            />
                                        }
                                        label="De la A la Z"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                className="checkbox-list-item"
                                                checked={this.state.selectedOrderBy.includes("LastConsultDate")}
                                                onChange={this.handleOrderBy}
                                                value="LastConsultDate"
                                            />
                                        }
                                        label="Fecha de última consulta"
                                    />
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                <Typography>Lugar de consulta</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="checkbox-list">
                                    {["Consulta Presencial", "Consulta Online", "Box 4K", "Vilanova Jungle Crossfit", "Crossfit Terrassa", "Crossfit BT"].map((place) => (
                                        <FormControlLabel
                                            key={place}
                                            control={
                                                <Checkbox
                                                    className="checkbox-list-item"
                                                    checked={this.state.selectedPlace.includes(place)}
                                                    onChange={this.handlePlace}
                                                    value={place}
                                                />
                                            }
                                            label={place === "" ? "Otros" : `${place}`}
                                        />
                                    ))}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary>
                                <Typography>Profesional</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="checkbox-list">
                                    {clients.map((client) => (
                                        <FormControlLabel
                                            key={client.profesional}
                                            control={
                                                <Checkbox
                                                    className="checkbox-list-item"
                                                    checked={this.state.selectedProfesionals.includes(client.profesional)}
                                                    onChange={this.handleProfesionals}
                                                    value={client.profesional}
                                                />
                                            }
                                            label={client.profesional}
                                        />
                                    ))}
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary>
                                <Typography>Plan</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="checkbox-list">
                                    {["LNP Deporte y Salud", "LNP Competidor", "LNP Élite"].map((plans) => (
                                        <FormControlLabel
                                            key={plans}
                                            control={
                                                <Checkbox
                                                    className="checkbox-list-item"
                                                    checked={this.state.selectedPlans.includes(plans)}
                                                    onChange={this.handlePlans}
                                                    value={plans}
                                                />
                                            }
                                            label={plans === "" ? "Otros" : `${plans}`}
                                        />
                                    ))}
                                </div>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </>
        );
    };
}

export default RightClients;
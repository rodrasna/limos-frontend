import * as React from "react";
import "../../style/Right.css";
import { Component } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Checkbox,
    FormControlLabel,
    Typography,
} from "@mui/material";
import Profile from "../right-components/Profile.jsx";
import "../../style/RightAgenda.css";


class RightAgenda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            selectedUser: "",
            selectedUsers: [],
            selectedOptions: [],
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

    handleUserChange = (event) => {
        const selectedValue = event.target.value;
        const selectedUsers = this.state.selectedUsers;
        const selectedIndex = selectedUsers.indexOf(selectedValue);
        console.log("TODOS:" + selectedUsers);

        if (selectedIndex === -1) {
            // add the value to the selected users array
            selectedUsers.push(selectedValue);
        } else {
            // remove the value from the selected users array
            selectedUsers.splice(selectedIndex, 1);
        }

        this.setState({ selectedUsers });
    };

    handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOptions = this.state.selectedOptions;
        const selectedIndex = selectedOptions.indexOf(selectedValue);

        if (selectedIndex === -1) {
            // add the value to the selected options array
            selectedOptions.push(selectedValue);
        } else {
            // remove the value from the selected options array
            selectedOptions.splice(selectedIndex, 1);
        }

        this.setState({ selectedOptions });
    };

    render() {
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
                    <Accordion>
                        <AccordionSummary>
                            <Typography>Usuarios</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="checkbox-list">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            className="checkbox-list-item"
                                            checked={this.state.selectedUsers === ""}
                                            onChange={this.handleUserChange}
                                            value=""
                                        />
                                    }
                                    label="Todos los usuarios"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            className="checkbox-list-item"
                                            checked={this.state.selectedUsers.includes("usuario1")}
                                            onChange={this.handleUserChange}
                                            value="usuario1"
                                        />
                                    }
                                    label="Usuario 1"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            className="checkbox-list-item"
                                            checked={this.state.selectedUsers.includes("usuario2")}
                                            onChange={this.handleUserChange}
                                            value="usuario2"
                                        />
                                    }
                                    label="Usuario 2"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            className="checkbox-list-item"
                                            checked={this.state.selectedUsers.includes("usuario3")}
                                            onChange={this.handleUserChange}
                                            value="usuario3"
                                        />
                                    }
                                    label="Usuario 3"
                                />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary>
                            <Typography>Opciones</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="checkbox-list">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            className="checkbox-list-item"
                                            checked={this.state.selectedOptions.includes(
                                                "cumpleanos"
                                            )}
                                            onChange={this.handleOptionChange}
                                            value="cumpleanos"
                                        />
                                    }
                                    label="Cumpleaños"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            className="checkbox-list-item"
                                            checked={this.state.selectedOptions.includes(
                                                "consultas"
                                            )}
                                            onChange={this.handleOptionChange}
                                            value="consultas"
                                        />
                                    }
                                    label="Consultas"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            className="checkbox-list-item"
                                            checked={this.state.selectedOptions.includes("eventos")}
                                            onChange={this.handleOptionChange}
                                            value="eventos"
                                        />
                                    }
                                    label="Eventos"
                                />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </>
        );
    };
}

export default RightAgenda;
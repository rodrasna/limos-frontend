import * as React from "react";
import "../../App.css";
import "../../style/CenterClients.css";
import Client from "./Client.jsx";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Component } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';


const clients = [
    {
        name: "Juan Pérez",
        profesional: "Dr. Luisa González",
        place: "Consulta Presencial",
        plan: "LBP Deporte y Salud",
        lastConsultDate: "23 de abril de 2022",
        hora: "10:00 am"
    },
    {
        name: "María García",
        profesional: "Dr. Roberto Sánchez",
        place: "Consulta Presencial",
        plan: "LNP Élite",
        lastConsultDate: "15 de mayo de 2022",
        hora: "2:30 pm"
    },
    {
        name: "Pedro Rodríguez",
        profesional: "Dr. Ana Hernández",
        place: "Consulta Presencial",
        plan: "LNP Élite",
        lastConsultDate: "7 de junio de 2022",
        hora: "4:45 pm"
    }
];



class CenterClients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            selectedPlace: [],
            selectedOrderBys: [],
            selectedFilters: [],
            selectedPlans: [],
            selectedProfesionals: [], // Corregido aquí
            openDialog: false,
            newClient: {
                name: "",
                lastName: "",
                birthDate: "",
                gender: "",
                email: "",
                phone: "",
                address: "",
                plan: ""
            }
        };
    }

    handleSearch = (event) => {
        const searchTerm = event.target.value;
        this.setState({ searchTerm });
    };

    handleAddClient = () => {
        this.setState({ openDialog: true });
    };

    handleDialogClose = () => {
        this.setState({ openDialog: false });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            newClient: {
                ...prevState.newClient,
                [name]: value
            }
        }));
    };

    handleAddNewClient = () => {
        const { newClient } = this.state;
        // Aquí puedes realizar la lógica para agregar el nuevo cliente
        console.log(newClient);
        this.setState({ openDialog: false });
    };

    // Este método se ejecuta cuando se cambia el filtro
    handleFilterChange = (selectedPlace, selectedOrderBys, selectedProfesionals, selectedPlans) => {
        this.setState({ selectedPlace, selectedOrderBys, selectedProfesionals, selectedPlans });
    };

    render() {
        const { searchTerm, openDialog, newClient } = this.state;
        const { selectedPlace, selectedOrderBys, selectedProfesionals, selectedPlans } = this.props;
        // Obtén las propiedades pasadas desde Clients
        console.log(this.props, this.state);

        // Utiliza los filtros en la lógica de filtrado
        const filteredClients = clients
            .filter(client => {
                if (this.props.selectedPlace) {
                    console.log(this.props.selectedPlace, client.place, selectedPlace.includes(client.place));
                    return selectedPlace.includes(client.place);
                }
                if (this.props.selectedProfesionals) {
                    return selectedProfesionals.includes(client.profesional);
                }
                if (this.props.selectedPlans) {
                    return selectedPlans.includes(client.plan);
                }
            })

        if (
            !this.props.selectedPlace ||
            !this.props.selectedProfesionals ||
            !this.props.selectedPlans
        ) {
            // No se cumple algún filtro, devolver todos los clientes
            return client;
        }

        const clientCount = (
            <Grid item xs={12} key="count">
                <Typography variant="h6">Total de clientes: {filteredClients.length}</Typography>
            </Grid>
        );

        const clientItems = filteredClients.map((client, index) => (
            <Grid item xs={12} sm={6} key={index}>
                <Client
                    name={client.name}
                    profesional={client.profesional}
                    place={client.place}
                    plan={client.plan}
                    lastConsultDate={client.lastConsultDate}
                    hora={client.hora}
                />
            </Grid>
        ));


        return (
            <div className="center-column-basegrid-rectangle">
                <span className="hello-welcome">🍔Hola Juan!🍔</span>
                <div className="title-container">
                    <span className="section-title">Clientes</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <div className="search-bar-container">
                    <div className="search-bar">
                        <SearchBar value={searchTerm} onChange={this.handleSearch} />
                    </div>
                    <Button variant="outlined" color="primary" onClick={this.handleAddClient}>
                        Añadir Cliente
                    </Button>
                </div>
                <div>
                    <Dialog open={openDialog} onClose={this.handleDialogClose}>
                        <DialogTitle>Añadir Cliente</DialogTitle>
                        <DialogContent>
                            <TextField
                                label="Nombre"
                                name="name"
                                value={newClient.name}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Apellidos"
                                name="lastName"
                                value={newClient.lastName}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Fecha de Nacimiento"
                                name="birthDate"
                                value={newClient.birthDate}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Sexo"
                                name="gender"
                                value={newClient.gender}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Correo"
                                name="email"
                                value={newClient.email}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Teléfono"
                                name="phone"
                                value={newClient.phone}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Hogar"
                                name="address"
                                value={newClient.address}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                label="Tarifa"
                                name="plan"
                                value={newClient.plan}
                                onChange={this.handleInputChange}
                                fullWidth
                                margin="normal"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleDialogClose}>Cancelar</Button>
                            <Button onClick={this.handleAddNewClient} color="primary">Guardar</Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <Grid container spacing={2}>
                    {clientCount}
                    {clientItems}
                </Grid>
            </div>
        );
    }
}

class SearchBar extends Component {
    render() {
        const { value, onChange } = this.props;

        return (
            <div>
                <input
                    type="text"
                    placeholder="Buscar cliente..."
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    }
}

export default CenterClients;
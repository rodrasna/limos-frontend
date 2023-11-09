import React, { Component } from "react";
import Client from "./Client.jsx";
import "./ClientsBase.css";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import SearchBar from "./SearchBar.jsx";
import { API, graphqlOperation } from 'aws-amplify';
import { listClients } from '../../graphql/queries';

class CenterClients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
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
            },
            clients: []
        };
    }

    handleAddClient = () => {
        this.setState({ openDialog: true });
    };

    handleDialogClose = () => {
        this.setState({ openDialog: false });
    };

    handleAddNewClient = () => {
        const { newClient } = this.state;
        this.setState({ openDialog: false });
    };

    handleSearch = (searchTerm) => {
        this.setState({ searchTerm: searchTerm });
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState((prevState) => ({
            newClient: {
                ...prevState.newClient,
                [name]: value
            }
        }));
    };

    componentDidMount() {
        this.fetchClients();
    }

    fetchClients = async () => {
        try {
            const clientData = await API.graphql(graphqlOperation(listClients));
            const clientsWithPlans = clientData.data.listClients.items.map(client => ({
                ...client,
                planName: client.Plan ? client.Plan.name : 'Plan desconocido'
            }));
            this.setState({ clients: clientsWithPlans });
        } catch (error) {
            console.error('Error fetching clients', error);
        }
    };

    render() {
        const { searchTerm, openDialog, newClient, clients } = this.state;
        const { selectedProfesionals, selectedPlace, selectedPlans, selectedOrderBy } = this.props;

        const filteredClients = clients.filter(client => {
            if (selectedProfesionals && selectedProfesionals.length > 0) {
                if (!selectedProfesionals.includes(client.professional)) {
                    return false;
                }
            }
            if (selectedPlace && selectedPlace.length > 0) {
                if (!selectedPlace.includes(client.place)) {
                    return false;
                }
            }
            if (selectedPlans && selectedPlans.length > 0) {
                if (!selectedPlans.includes(client.planName)) {
                    return false;
                }
            }
            if (selectedOrderBy === "A-Z") {
                return true; // No se aplica filtro adicional, se mantiene en la lista
            } else if (selectedOrderBy === "Fecha de ultima consulta") {
                return true; // No se aplica filtro adicional, se mantiene en la lista
            }

            if (searchTerm && searchTerm.length > 0) {
                return client.name.toLowerCase().includes(searchTerm.toLowerCase());
            }

            return true; // Mostrar el cliente si cumple todos los filtros seleccionados
        });

        // Filtrar por orderBy
        if (selectedOrderBy && selectedOrderBy.includes("A-Z")) {
            filteredClients.sort((a, b) => a.firstName.localeCompare(b.firstName));
        }        
        if (selectedOrderBy && selectedOrderBy.includes("LastConsultDate")) {
            filteredClients.sort((a, b) => new Date(a.lastConsult) - new Date(b.lastConsult));
        }

        const clientCount = (
            <Grid item xs={12} key="count">
                <Typography variant="h6">Total de clientes: {filteredClients.length}</Typography>
            </Grid>
        );

        const clientItems = filteredClients.map((client, index) => (
            <Grid item xs={12} sm={6} key={index}>
                <Client
                    firstName={client.firstName}
                    lastName={client.lastName}
                    professional={client.professional}
                    place={client.place}
                    plan={client.planName}
                    lastConsult={client.lastConsult}
                    hora="22:00"
                    image={client.image}
                />
            </Grid>
        ));

        return (
            <div className="center-column-basegrid-rectangle">

                <div className="title-container">
                    <span className="section-title">Clientes</span>
                    <span className="view-all">Ver todo</span>
                </div>
                <div className="search-bar-container">
                    <div className="search-bar">
                        <SearchBar onSearch={this.handleSearch} />
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

export default CenterClients;

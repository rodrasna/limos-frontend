import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

class ClientProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            showProfile: false
        };
    }

    handleDropdownClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleDropdownClose = () => {
        this.setState({ anchorEl: null });
    };

    handleProfileClick = () => {
        this.setState({ showProfile: true });
    };

    handleCloseProfile = () => {
        this.setState({ showProfile: false });
    };

    render() {
        const { anchorEl, showProfile } = this.state;
        const { firstName, lastName, professional, place, plan, lastConsultDate, hora } = this.props;

        return (
            <div className="client-profile-rectangle">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <div className="client-profile-details">
                            <Typography variant="h6">{firstName} {lastName}</Typography>
                            <Typography variant="body1">Profesional: {professional}</Typography>
                            <Typography variant="body1">Lugar: {place}</Typography>
                            <Typography variant="body1">Plan: {plan}</Typography>
                            <Typography variant="body1">Última consulta: {lastConsultDate}</Typography>
                            <Typography variant="body1">Hora: {hora}</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className="client-profile-dropdown">
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={this.handleDropdownClick}
                                endIcon={<ArrowForwardIosIcon />}
                            >
                                Acciones
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleDropdownClose}
                                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            >
                                <MenuItem onClick={this.handleDropdownClose}>Enviar mensaje</MenuItem>
                                <MenuItem onClick={this.handleDropdownClose}>Eliminar cliente</MenuItem>
                                <MenuItem onClick={this.handleDropdownClose}>Congelar cliente</MenuItem>
                            </Menu>
                        </div>
                    </Grid>
                </Grid>
                <div className="client-profile-buttons">
                    <Button variant="outlined" color="primary">1. Información</Button>
                    <Button variant="outlined" color="primary">2. Registros</Button>
                    <Button variant="outlined" color="primary">3. Medidas</Button>
                    <Button variant="outlined" color="primary">4. Cálculos nut</Button>
                    <Button variant="outlined" color="primary">5. Crear Plan</Button>
                    <Button variant="outlined" color="primary">6. Recomendación Análisis</Button>
                </div>
                <Dialog open={showProfile} onClose={this.handleCloseProfile}>
                    <DialogTitle>Perfil del Cliente</DialogTitle>
                    <DialogContent>
                        <ClientProfile
                            firstName={firstName}
                            lastName={lastName}
                            professional={professional}
                            place={place}
                            plan={plan}
                            lastConsultDate={lastConsultDate}
                            hora={hora}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseProfile}>Cerrar</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default ClientProfile;

import * as React from "react";
import "../../App.css";
import Grid from '@mui/material/Grid';
import Right from "../right-components/Right";
import LeftSideBar from "../LeftSideBar.jsx";
import CenterClients from "./CenterClients";
import RightClients from "./RightClients";
import { Component } from 'react';

import rectangle2 from "../../assets/rectangle2.svg";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      openDialog: false,
      newClient: {
        name: "",
        lastName: "",
      }
    }
  }

  handleFilterChange = (selectedPlace, selectedOrderBy, selectedProfesionals, selectedPlans) => {
    this.setState({ selectedPlace, selectedOrderBy, selectedProfesionals, selectedPlans });
  };


  render() {
    return (
      <div className="dashboard">
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={1.5}>
            <LeftSideBar></LeftSideBar>
          </Grid>
          <div className="vertical-home-grid-divider">
            <img src={rectangle2}></img>
          </div>
          <Grid item xs={6}>
            <CenterClients
              selectedPlace={this.state.selectedPlace}
              selectedProfesionals={this.state.selectedProfesionals}
              selectedPlans={this.state.selectedPlans}
              selectedOrderBy={this.state.selectedOrderBy}
              onFilterChange={this.handleFilterChange} // Agrega esta línea para pasar la función de manejo de filtro
            />
          </Grid>
          <div className="vertical-home-grid-divider">
            <img src={rectangle2}></img>
          </div>
          <Grid item xs={3}>
            <RightClients onFilterChange={this.handleFilterChange} />
          </Grid>
        </Grid>
      </div >
    );
  }
};
export default Clients;

import * as React from "react";
import "./App.css";
import Grid from '@mui/material/Grid';
import Left from "./my-ui-components/left-components/Left";
import RightClients from "./my-ui-components/right-components/RightClients";
import CenterClients from "./my-ui-components/center-components/CenterClients";
import { Component } from 'react';

import rectangle2 from "./assets/rectangle2.svg";

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

  handleFilterChange = (selectedPlace) => {
    this.setState({ selectedPlace });
  };


  render() {
    return (
      <div className="dashboard">
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
          <Grid item xs={1.5}>
            <Left></Left>
          </Grid>
          <div className="vertical-home-grid-divider">
            <img src={rectangle2}></img>
          </div>
          <Grid item xs={6}>
            <CenterClients
              selectedPlace={this.state.selectedPlace}
              selectedProfesionals={this.state.selectedProfesionals}
              selectedPlans={this.state.selectedPlans}
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

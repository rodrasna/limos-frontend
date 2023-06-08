import * as React from "react";
import "../../App.css";
import Grid from '@mui/material/Grid';
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import CenterClients from "./CenterClients";
import RightClients from "./RightClients";
import { Component } from 'react';
import rectangle2 from "../../assets/rectangle2.svg";
import Banner from "../Banner/Banner";

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
          <><div className="vertical-home-grid-divider">
        <img src={rectangle2}></img>
      </div><Grid item xs={6}>
          <CenterClients
            selectedPlace={this.state.selectedPlace}
            selectedProfesionals={this.state.selectedProfesionals}
            selectedPlans={this.state.selectedPlans}
            selectedOrderBy={this.state.selectedOrderBy}
            onFilterChange={this.handleFilterChange} // Agrega esta línea para pasar la función de manejo de filtro
          />
        </Grid><div className="vertical-home-grid-divider">
          <img src={rectangle2}></img>
        </div><Grid item xs={3}>
          <RightClients onFilterChange={this.handleFilterChange} />
        </Grid></>
    );
  }
};
export default Clients;

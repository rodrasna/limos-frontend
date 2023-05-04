import * as React from "react";
import "./App.css";
import Grid from '@mui/material/Grid';
import Left from "./my-ui-components/left-components/Left";
import RightClients from "./my-ui-components/right-components/RightClients";
import CenterClients from "./my-ui-components/center-components/CenterClients";

import rectangle2 from "./assets/rectangle2.svg";


const Clients = () => {
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
          <CenterClients></CenterClients>
        </Grid>

        <div className="vertical-home-grid-divider">
          <img src={rectangle2}></img>
        </div>
        <Grid item xs={3}>
          <RightClients></RightClients>
        </Grid>
      </Grid>
    </div >
  );
};
export default Clients;

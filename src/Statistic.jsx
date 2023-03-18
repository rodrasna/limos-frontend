import * as React from "react";
import "./App.css";
import Grid from '@mui/material/Grid';
import Center from "./my-ui-components/center-components/Center";
import Right from "./my-ui-components/right-components/Right";
import Left from "./my-ui-components/left-components/Left";

import rectangle2 from "./assets/rectangle2.svg";


const Statistic = () => {
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
        Statistic
        </Grid>

        <div className="vertical-home-grid-divider">
          <img src={rectangle2}></img>
        </div>
        <Grid item xs={3}>
          <Right></Right>
        </Grid>
      </Grid>
    </div >
  );
};
export default Statistic;

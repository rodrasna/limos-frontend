import * as React from "react";
import "./App.css";
import Grid from '@mui/material/Grid';
import Center from "./my-ui-components/center-components/Center";
import Right from "./my-ui-components/right-components/Right";
import Left from "./my-ui-components/left-components/Left";

import rectangle2 from "./assets/rectangle2.svg";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



const App = () => {
  return (
    <div className="dashboard">
      <Grid item xs={4}>
        <Left></Left>
      </Grid>
      <Grid item xs={4}>
        <>
          <img src={rectangle2}></img><div className="flex-container-8"></div>
        </>
      </Grid>
      <Grid item xs={4}>
        <Center></Center>
      </Grid>
      <Grid item xs={4}>
        <>
          <img src={rectangle2}></img><div className="flex-container-8"></div>
        </>
      </Grid>
      <Grid item xs={4}>
        <Right></Right>
      </Grid>
    </div>
  );
};
export default App;

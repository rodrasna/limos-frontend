import * as React from "react";
import "./App.css";
import Grid from '@mui/material/Grid';
import LeftBar from "./my-ui-components/LeftBar.jsx";
import Center from "./my-ui-components/Center";
import Right from "./my-ui-components/Right";

import rectangle2 from "./assets/rectangle2.svg";


const App = () => {
  return (
    <div className="dashboard">
      <Grid item xs={4}>
        <LeftBar></LeftBar>
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

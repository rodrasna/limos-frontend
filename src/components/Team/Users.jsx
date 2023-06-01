import * as React from "react";
import "../../App.css";
import Grid from '@mui/material/Grid';
import Right from "../right-components/Right";
import LeftSideBar from "../LeftSideBar";
import CenterTeam from "./CenterTeam.jsx";

import rectangle2 from "../../assets/rectangle2.svg";


const Users = () => {
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
          <CenterTeam></CenterTeam>
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
export default Users;

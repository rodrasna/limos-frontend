import * as React from "react";
import "../../App.css";
import Grid from '@mui/material/Grid';
import Right from "../right-components/Right";
import LeftSideBar from "../LeftSideBar/LeftSideBar.jsx";
import rectangle2 from "../../assets/rectangle2.svg";
import Banner from "../Banner/Banner";

const Statistic = () => {
  return (
    <><div className="vertical-home-grid-divider">
      <img src={rectangle2}></img>
    </div><Grid item xs={6}>
        Statistic
      </Grid><div className="vertical-home-grid-divider">
        <img src={rectangle2}></img>
      </div><Grid item xs={3}>
        <Right></Right>
      </Grid></>
  );
};
export default Statistic;

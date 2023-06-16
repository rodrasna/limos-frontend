import * as React from "react";
import "../../App.css";
import "./AgendaBase.css";
import Grid from '@mui/material/Grid';
import LeftSideBar from "../LeftSideBar/LeftSideBar.jsx";
import RightAgenda from "./RightAgenda";
import CenterAgenda from "./CenterAgenda";
import rectangle2 from "../../assets/rectangle2.svg";
import { useState } from "react";


const Agenda = () => {

  const [expanded, setExpanded] = useState(true);

  const centerSize = expanded ? 10 : 7;
  const rightSize = expanded ? 2 : 3;

  return (
    <><div className="vertical-home-grid-divider">
      <img src={rectangle2}></img>
    </div>
      <Grid item xs={centerSize}>
        <CenterAgenda></CenterAgenda>
      </Grid>
      {/* <div className="vertical-home-grid-divider">
        <img src={rectangle2}></img>
      </div>
      <Grid item xs={rightSize}>
        <RightAgenda></RightAgenda>
      </Grid> */}
    </>
  );
};
export default Agenda;

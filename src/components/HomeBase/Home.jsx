import * as React from "react";
import "./HomeBase.css";
import Grid from "@mui/material/Grid";
import CenterHome from "../HomeBase/CenterHome";
import RightHome from "./RightHome";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import rectangle2 from "../../assets/rectangle2.svg";
import Banner from "../Banner/Banner";
import { useState } from "react";


const Home = () => {
    const [expanded, setExpanded] = useState(true);

    const centerSize = expanded ? 6 : 7;
    const rightSize = expanded ? 2 : 3;

    return (
        <>
            <div className="vertical-home-grid-divider">
                <img src={rectangle2} alt="Vertical divider" />
            </div>
            <Grid item xs={centerSize}>
                <CenterHome />
            </Grid>
            <div className="vertical-home-grid-divider">
                <img src={rectangle2} alt="Vertical divider" />
            </div>
            <Grid item xs={rightSize} md={3}>
                <RightHome />
            </Grid>
        </>
    );
};

export default Home;

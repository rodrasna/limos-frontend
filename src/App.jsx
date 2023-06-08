import * as React from "react";
import "./App.css";
import Grid from "@mui/material/Grid";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import Home from "./components/HomeBase/Home";
import Agenda from './components/AgendaBase/Agenda';
import Team from './components/TeamBase/Team.jsx';
import Clients from './components/ClientsBase/Clients';
import Library from './components/LibraryBase/Library';
import Pay from './components/PayBase/Pay';
import Statistic from './components/StatisticBase/Statistic';
import { useState } from "react";
import Banner from "./components/Banner/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const SidebarToggleButton = ({ onClick, sidebarVisible }) => (
  <button
    className={`toggle-button ${sidebarVisible ? "collapsed" : ""}`}
    onClick={onClick}
  >
    <div className="button-background">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </button>
);


const App = () => {
  const [expanded, setExpanded] = useState(true);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
    setSidebarVisible(!sidebarVisible);
  };

  const rowSpacing = 0;
  const columnSpacing = { xs: 1, sm: 1, md: 1 };
  const sidebarSize = expanded ? 1 : 0.2;

  return (
    <div className={`dashboard ${expanded ? "expanded" : "collapsed"}`}>
      <Grid container rowSpacing={rowSpacing} columnSpacing={columnSpacing}>
        <SidebarToggleButton onClick={toggleSidebar} sidebarVisible={sidebarVisible} />
        <Banner />
        <Grid item xs={sidebarSize}>
          <LeftSideBar expanded={expanded} />
        </Grid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="team" element={<Team />} />
          <Route path="clients" element={<Clients />} />
          <Route path="library" element={<Library />} />
          <Route path="pay" element={<Pay />} />
          <Route path="statistic" element={<Statistic />} />
        </Routes>
      </Grid>
    </div>
  );
};

export default App;

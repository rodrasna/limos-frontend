import React from "react";
import "./../style/LeftSideBar.css";
import iconlyLightOutlineS from "../assets/search.svg";
import iconlyLightOutlineF from "../assets/person.svg";
import limoslogo from "../assets/logo.png";
import iconlyLightOutlineC from "../assets/person-vcard.svg";
import iconlyLightOutlineC1 from "../assets/calendar.svg";
import pay from "../assets/credit-card.svg";
import statistic from "../assets/bar-chart-line.svg";
import home from "../assets/house.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const LeftSideBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="left" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="left-column-basegrid-rectangle">
        <div className="flex-container">
          <span className="limos">LIM</span>
          <span className="logo-container">
            <img className="limoslogo" src={limoslogo} alt="logo" />
          </span>
          <span className="limos">S</span>
        </div>

        <NavLink to="/" className="left-sidebar-link">
          <img className="iconly-light-outline-h" src={home} />
          <span className="overview">Inicio</span>
        </NavLink>
        <NavLink to="/agenda" className="left-sidebar-link">
          <img className="iconly-light-outline-c-1" src={iconlyLightOutlineC1} />
          <span className="course">Agenda</span>
        </NavLink>
        <NavLink to="/users" className="left-sidebar-link">
          <img className="iconly-light-outline-f" src={iconlyLightOutlineF} />
          <span className="resources">Equipo</span>
        </NavLink>
        <NavLink to="/clients" className="left-sidebar-link">
          <img className="iconly-light-outline-c" src={iconlyLightOutlineC} />
          <span className="message">Clientes</span>
        </NavLink>
        <NavLink to="/library" className="left-sidebar-link">
          <img className="iconly-light-outline-s" src={iconlyLightOutlineS} />
          <span className="setting">Biblioteca</span>
        </NavLink>
        <NavLink to="/pay" className="left-sidebar-link">
          <img className="iconly-light-outline-s" src={pay} />
          <span className="setting">Pagos</span>
        </NavLink>
        <NavLink to="/statistic" className="left-sidebar-link">
          <img className="iconly-light-outline-s" src={statistic} />
          <span className="setting">Estadisticas</span>
        </NavLink>
      </div>
    </div>
  );
}

export default LeftSideBar;

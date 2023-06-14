import React, { useState } from "react";
import "./LeftSideBar.css";
import iconlyLightOutlineS from "../../assets/search.svg";
import team from "../../assets/person.svg";
import clients from "../../assets/person-vcard.svg";
import calendar from "../../assets/calendar.svg";
import pay from "../../assets/credit-card.svg";
import statistic from "../../assets/bar-chart-line.svg";
import home from "../../assets/house.svg";
import { NavLink } from "react-router-dom";

const LeftSideBar = ({expanded}) => {
  return (
    <div className={`left-sidebar-container ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="left">
        <div className="left-column-basegrid-rectangle">
          <NavLink to="/" className="left-sidebar-link">
            <img className="iconly-light-outline-h" src={home} alt="Inicio" />
            {expanded && <span className="overview">Inicio</span>}
          </NavLink>
          <NavLink to="/agenda" className="left-sidebar-link">
            <img className="iconly-light-outline-c-1" src={calendar} alt="Agenda" />
            {expanded && <span className="course">Agenda</span>}
          </NavLink>
          <NavLink to="/team" className="left-sidebar-link">
            <img className="iconly-light-outline-f" src={team} alt="Equipo" />
            {expanded && <span className="resources">Equipo</span>}
          </NavLink>
          <NavLink to="/clients" className="left-sidebar-link">
            <img className="iconly-light-outline-c" src={clients} alt="Clientes" />
            {expanded && <span className="message">Clientes</span>}
          </NavLink>
          <NavLink to="/library" className="left-sidebar-link">
            <img className="iconly-light-outline-s" src={iconlyLightOutlineS} alt="Biblioteca" />
            {expanded && <span className="setting">Biblioteca</span>}
          </NavLink>
          <NavLink to="/pay" className="left-sidebar-link">
            <img className="iconly-light-outline-s" src={pay} alt="Pagos" />
            {expanded && <span className="setting">Pagos</span>}
          </NavLink>
          <NavLink to="/statistic" className="left-sidebar-link">
            <img className="iconly-light-outline-s" src={statistic} alt="Estadisticas" />
            {expanded && <span className="setting">Estadisticas</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;

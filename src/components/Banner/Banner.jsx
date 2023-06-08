import React, { useState } from "react";
import "./Banner.css";
import limoslogo from "../../assets/logo.png";
import Profile from "./Profile";

const LimosLogo = () => (
  <>
    <span className="LIM">LIM</span>
    <img className="limoslogo" src={limoslogo} alt="Limos logo" />
    <span className="S">S</span>
  </>
);

const Banner = ({ toggleSidebar, sidebarVisible }) => {
  return (
    <div className="banner">
      
      <div className="banner-content">
        <LimosLogo />
        <p className="banner-subtitle"></p>
      </div>
      <Profile></Profile>
    </div>
  );
};

export default Banner;

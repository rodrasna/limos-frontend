import React, { useState } from "react";
import "./TeamMember.css";
import moreVertical6 from "../../assets/moreVertical6.svg";
import { IconButton } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import { Button } from "@mui/material";

const TeamMember = (props) => {
  const { firstName, lastName, specialty, image } = props;
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  return (
    <div className="user-rectangle">
      <div className="left-side">
        <div className="user-data-container">
          <img className="user-image-rectangle" src={image} alt="user" />
          <span className="user-firstName">{firstName}</span>
          <span className="user-lastName">{lastName}</span>
          <div className="specialty-container">
            <GradeIcon className="grade-icon" alt="specialty" />
            <span className="specialty-label">{specialty}</span>
          </div>
          <div className="view-team-profile-button">
            <Button variant="contained" onClick={handleProfileClick}>
              Ver perfil
            </Button>
          </div>
        </div>
      </div>
      <div className="right-side">
      </div>
      {/* <IconButton>
        <img className="user-option" src={moreVertical6} alt="options" />
      </IconButton> */}
    </div >
  );
};

export default TeamMember;

import React, { useState } from "react";
import ClientProfile from "./ClientProfile";
import "./ClientsBase.css";
import Modal from "react-modal";
import WorkIcon from '@mui/icons-material/Work';
import RoomIcon from '@mui/icons-material/Room';
import EventIcon from '@mui/icons-material/Event';
import BoltIcon from '@mui/icons-material/Bolt';
import { Button } from "@mui/material";

// Establece la aplicación root como el elemento raíz para React Modal
Modal.setAppElement("#root");

const Client = (props) => {
  const { firstName,
    lastName,
    lastConsult,
    professional,
    email,
    phoneNumber,
    weight,
    place,
    plan,
    clientAssigne, image } = props;
  console.log(props);
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const closeProfileModal = () => {
    setShowProfile(false);
  };

  return (
    <div className="client-rectangle">
      <div className="left-side">
        <div className="client-data-container">
          <img className="client-image-rectangle" alt="client" src={image} />
          <span className="client-firstName">{firstName}</span>
          <span className="client-lastName">{lastName}</span>
          <Button className="view-profile-button" variant="contained" onClick={handleProfileClick}>
            Ver perfil
          </Button>
        </div>
      </div>
      <div className="right-side">
        <div className="item">
          <WorkIcon className="icon" />
          <span className="label">{professional}</span>
        </div>
        <div className="item">
          <RoomIcon className="icon" />
          <span className="label">{place}</span>
        </div>
        <div className="item">
          <BoltIcon className="icon" />
          <span className="label">{plan}</span>
        </div>
        <div className="item">
          <EventIcon className="icon" />
          <span className="label">{lastConsult}</span>
        </div>
      </div>

      <Modal
        isOpen={showProfile}
        onRequestClose={closeProfileModal}
        contentLabel="Client Profile"
        className="client-profile-modal"
        overlayClassName="client-profile-overlay"
      >
        <ClientProfile
          firstName={firstName}
          lastName={lastName}
          professional={professional}
          place={place}
          plan={plan}
          lastConsultDate={lastConsult}
          hora="{hora}"
          onClose={closeProfileModal}
        />
      </Modal>
    </div>
  );
};

export default Client;

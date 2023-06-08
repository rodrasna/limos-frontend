import * as React from "react";
import "./Profile.css";
import claritynotification from "../../assets/claritynotification.svg";
import chevronDown1 from "../../assets/chevronDown1.svg";
import rectangle4 from "../../assets/juanito.jpg";
import { Icon, IconButton } from "@mui/material";
import { useState,useRef, useEffect } from "react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import AddAlertRoundedIcon from '@mui/icons-material/AddAlertRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';

const Profile = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const handleDropdownClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });
    return (
        <div className="profile-container">
            <div className="profile-rectangle">
                <img className="profile-image" src={rectangle4} alt="profile" />
                <div className="vl" />
                <IconButton>
                    <img
                        className="profile-notification"
                        src={claritynotification}
                        alt="notification"
                    />
                </IconButton>
                <div className="vl" />
                <div className="profile-data-container">
                    <span className="profile-name">Juan</span>
                    <span className="profile-plan">Administrador</span>
                </div>
                <IconButton onClick={handleDropdownClick}>
                    <img
                        className="profile-dropdown-options"
                        src={chevronDown1}
                        alt="options"
                    />
                </IconButton>
                {/* Dropdown */}
                {dropdownVisible && (
                    <div
                        ref={dropdownRef}
                        className={`profile-dropdown-list ${dropdownVisible ? "show" : ""}`}
                    >
                        <li className="profile-dropdown-list-item">
                            <a href="#" className="profile-dropdown-header">
                                <span className="profile-dropdown-header-title-text">Lift Nutrition Program</span>
                                <span className="profile-dropdown-header-title-subtext">Juan</span>
                            </a>
                        </li>
                        <li className="profile-dropdown-list-item">
                            <a href="#" className="profile-dropdown-list-item-link">
                                <AccountCircleRoundedIcon className="profile-dropdown-list-item-icon">person</AccountCircleRoundedIcon>
                                <span className="profile-dropdown-list-item-text">Tu perfil</span>
                            </a>
                        </li>
                        <li className="profile-dropdown-list-item">
                            <a href="#" className="profile-dropdown-list-item-link">
                                <AddAlertRoundedIcon className="profile-dropdown-list-item-icon">lock</AddAlertRoundedIcon  >
                                <span className="profile-dropdown-list-item-text">Privacidad y notificaciones</span>
                            </a>
                        </li>
                        <li className="profile-dropdown-list-item">
                            <a href="#" className="profile-dropdown-list-item-link">
                                <SettingsRoundedIcon className="profile-dropdown-list-item-icon">settings</SettingsRoundedIcon>
                                <span className="profile-dropdown-list-item-text">Configuración y preferencias</span>
                            </a>
                        </li>
                        <li className="profile-dropdown-list-item">
                            <a href="https://www.liftnutritionprogram.com/" className="profile-dropdown-list-item-link">
                                <LanguageRoundedIcon className="profile-dropdown-list-item-icon">language</LanguageRoundedIcon>
                                <span className="profile-dropdown-list-item-text">Mi página web</span>
                            </a>
                        </li>
                        <li className="profile-dropdown-list-item">
                            <a href="#" className="profile-dropdown-list-item-link">
                                <PowerSettingsNewRoundedIcon className="profile-dropdown-list-item-icon">logout</PowerSettingsNewRoundedIcon>
                                <span className="profile-dropdown-list-item-text">Cerrar sesión</span>
                            </a>
                        </li>
                    </div>
                )}
                {/* End of Dropdown */}
            </div>
        </div >
    );
};

export default Profile;
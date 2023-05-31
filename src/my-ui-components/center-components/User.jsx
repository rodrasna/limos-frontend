import "../../style/User.css";
// import rectangle24 from "../../assets/user.png";
import moreVertical6 from "../../assets/moreVertical6.svg";
import { IconButton } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';

const User = (props) => {
    const { name, specialty, image } = props;
    return (
        <div className="user-rectangle">
            <img className="user-image-rectangle" src={image} alt="user" />
            <div className="left-side">
                <div className="user-data-container">
                    <span className="user-name">{name}</span>
                    <div className="item">
                        <GradeIcon className="icon" alt="specialty" />
                        <span className="label">{specialty}</span>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <button className="view-profile-button">Ver más</button>
            </div>
            <IconButton>
                <img className="user-option" src={moreVertical6} alt="options" />
            </IconButton>
        </div>
    );
};

export default User;

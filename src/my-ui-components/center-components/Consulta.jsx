import "../../App.css";
import intersect1 from "../../assets/intersect1.svg";
import group9 from "../../assets/group9.svg";
import intersect from "../../assets/intersect.svg";


import { Component } from 'react';

class Consulta extends Component {
    render() {
        return (
            <div className="group-1-1" >
                <img className="intersect-1" src={intersect1} />
                <img className="intersect" src={intersect} />
                <div className="rectangle-5" >
                    <div className="flex-container-10" >
                        <span className="french" > Rodri 1 </span>
                        <span className="num-35-lessons" > 35 lessons </span>
                        < img className="group-9" src={group9} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Consulta;
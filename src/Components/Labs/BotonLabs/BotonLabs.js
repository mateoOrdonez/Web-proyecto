import React from "react";
import Boton from "./Boton/Boton";
import './BotonLabs.css';


function BotonLabs ({text}) {
    return(
        <div className = "containerBl">
            <div className ="spaceText">
                <h3 className = "text ">{text}</h3>
            </div>
            
            <Boton />
        </div>
    );
}

export default BotonLabs;
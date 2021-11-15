import React from "react";
import Boton from "./Boton/Boton";
import './BotonLabs.css';


function BotonLabs () {
    return(
        <div className = "containerBl">
            <div className ="spaceText">
                <h3 className = "text ">Laboratorios Física 1</h3>
            </div>
            
            <Boton />
        </div>
    );
}

export default BotonLabs;
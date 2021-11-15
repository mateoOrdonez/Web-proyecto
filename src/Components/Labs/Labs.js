import React from "react";
import NextEvent from "../NextEvent/NextEvent";
import BotonLabs from "./BotonLabs/BotonLabs";
import './Labs.css';

function Labs () {
    return(
        <div className = "containerL">
            <div className = "spaceL">
                <h1>Laboratorios</h1>
                <BotonLabs/>
                <BotonLabs/>
                <BotonLabs/>
            </div>
            <div>
                <NextEvent/>
                <NextEvent/>
            </div>
            
        </div>
    );
}

export default Labs;
import React from "react";
import Calendario from "../Calendar/Calendario";
import NextEvent from "../NextEvent/NextEvent";
import BotonLabs from "./BotonLabs/BotonLabs";
import './Labs.css';

function Labs () {
    return(
        <div className = "containerL">
            <div className = "spaceL">
                <h1>Laboratorios</h1>
                <BotonLabs text="Laboratorios Física 1"/>
                <BotonLabs text="Laboratorios Física 2"/>
                <BotonLabs text="Laboratorios Física 3"/>
            </div>
            <div>
                <NextEvent/>
                <Calendario/>
            </div>
            
        </div>
    );
}

export default Labs;
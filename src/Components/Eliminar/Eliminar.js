import React, { useState } from "react";
import "./Eliminar.css";

const Eliminar = ({isOpenE, closeE}) =>{

    return(
    <div className={`ElContainer ${isOpenE && 'ElContainer-Open'}`}>
        <div className="El-Dialog">
            <h2 className="TituloEl">Eliminar Reserva</h2>
            <h3 className="SubTitEl">¿Desea eliminar la reserva?</h3>
            <div className="Buttons">
                <button>Si</button>
                <button onClick={closeE}>No</button>
            </div>
        </div>
    </div>
    );
}

export default Eliminar;
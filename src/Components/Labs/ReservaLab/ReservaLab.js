import React from "react";
import { useRef } from "react";
import "./ReservaLab.css";

const ReservaLab = ({isOpenE, closeE}) =>{

    const ref = useRef();

    return(
    <div className={`ReservaContainer ${isOpenE && 'ReservaContainer-Open'}`}>
        <div className="Reservar-Dialog">
            <h2 className="TituloReservar">Reserva Laboratorio</h2>
            <h3 className="SubTitReservar">Fecha de reserva</h3>
            <input className="InputReservar"
                type="date"
                placeholder="Fecha de reserva"
                min="2021-11-18" max="2022-06-01"
            />
            <h3 className="SubTitReservar">Hora de reserva</h3>
            <input className="InputReservar"
                type="time"
                placeholder="Hora"
                min="07:00" max="18:00" step="600"
            />
            <h3 className="SubTitReservar">Duración</h3>
            <input className="InputReservar"
                type="number"
                placeholder="Duración"
                min="0" max="4"
            />
            <div className="ButtonsReservar">
                <button>Reservar</button>
                <button onClick={closeE}>Cancelar</button>
            </div>
        </div>
    </div>
    );
}

export default ReservaLab;
import React from "react";
import { useRef } from "react";
import "./ReservaLab.css";

const ReservaLab = ({isOpenE, closeE}) =>{

    const ref = useRef();

    return(
    <div className={`ReservaContainer ${isOpenE && 'ReservaContainer-Open'}`}>
        <div className="Reservar-Dialog">
            <h2 className="TituloReservar">Reservar laboratorio Física 1</h2>
            <h3 className="SubTitReservar">Fecha de reserva</h3>
            <input
                type="text"
                placeholder="Fecha de reserva"
                ref={ref}
                onChange={(e) => console.log(e.target.value)}
                onFocus={() => (ref.current.type = "date")}
                onBlur={() => (ref.current.type = "text")}
            />
            <h3 className="SubTitReservar">Hora de reserva</h3>
            <input
                type="text"
                placeholder="Hora"
            />
            <h3 className="SubTitReservar">Duración</h3>
            <input
                type="text"
                placeholder="Duración"
            />
            <div className="ButtonsReservar">
                <button>Si</button>
                <button onClick={closeE}>No</button>
            </div>
        </div>
    </div>
    );
}

export default ReservaLab;
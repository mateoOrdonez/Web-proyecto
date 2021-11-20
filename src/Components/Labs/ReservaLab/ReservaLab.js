import React, { useState } from "react";
import "./ReservaLab.css";
import results from "../../../results";

class ReservaLab extends React.Component {
    state = {
        fecha: "",
        hora: "",
        descripcion: ""
    }

    postDataHandler = (e) => {
        e.preventDefault();
        const Data = {
            fecha: this.state.fecha,
            hora: this.state.hora,
            descripcion: this.state.descripcion,
            
        }
        results.post('/Labs.json', Data).then(response => {
            console.log(response);
        })
    }
    

    render() {

        return (
            <div className={`ReservaContainer ${this.props.isOpenE && 'ReservaContainer-Open'}`}>
                <div className="Reservar-Dialog">
                    <h2 className="TituloReservar">Reserva Laboratorio</h2>
                    <h3 className="SubTitReservar">Fecha de reserva</h3>
                    <input className="InputReservar"
                        type="date"
                        placeholder="Fecha de reserva"
                        min="2021-11-18" max="2022-06-01"
                        value= {this.state.fecha}
                        onChange={(e)=> this.setState({fecha:e.target.value})}
                    />
                    <h3 className="SubTitReservar">Hora de reserva</h3>
                    <input className="InputReservar"
                        type="time"
                        placeholder="Hora"
                        min="07:00" max="18:00" step="600"
                        value= {this.state.hora}
                        onChange={(e)=> this.setState({hora:e.target.value})}
                    />
                    <h3 className="SubTitReservar">Duración</h3>
                    <input className="InputReservar"
                        type="number"
                        placeholder="Duración"
                        min="0" max="4"
                        value= {this.state.descripcion}
                        onChange={(e)=> this.setState({descripcion:e.target.value})}
                    />
                    <form className="ButtonsReservar" onSubmit={this.postDataHandler}>
                        <button type="submit">Reservar</button>
                        <button onClick={this.props.closeE}>Cancelar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReservaLab;
import React from "react";
import BtnEl from "../BotonEL/BtnEl";
import "./Tabla.css";
import fb from "../../Utils/Firebase"

import { getDatabase, ref, onValue, get, child } from "firebase/database";
import 'firebase/database';
import axios from "axios";


class Tabla extends React.Component{

    constructor(props){
        super(props);
        this.state =({
            MisReservas:([]),
            id: 0
        })
    }

    componentDidMount() {
        this.peticionGet();
    }

    handleUpdate(Mr){
        this.setState({ MisReservas: Mr });
    }

    /*seleccionarReserva=async(id, caso)=>{
        await this.setState({id: id});

        (caso==="Editar")?this.setState():
        this.peticionDelete();
    }*/ 

    peticionGet(){
        const dbRef = ref(getDatabase());
            get(dbRef, "proyectofinalweb-2c536-default-rtdb/Reservas").then((snapshot) => {
            let MiReserva = ([]);
            if (snapshot.exists()) {
                console.log(snapshot.val());
                snapshot.forEach(snap => {
                    //MisReservas.push(snap.val())
                    MiReserva = snap.val();
                    this.handleUpdate(MiReserva);
                      
                });
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
      }
    
      handleSubmit = event => {
        
    
        axios.delete(`https://console.firebase.google.com/u/0/project/proyectofinalweb-2c536/database/proyectofinalweb-2c536-default-rtdb/data/Labs/-Mouuiw4zIA7uZ0AB38i${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    


    /*peticionDelete(){
        const db = getDatabase();
        const eliminar= remove(ref(db), `proyectofinalweb-2c536-default-rtdb/Reservas/${this.state.id}`);
        return eliminar
    }*/
    
    render() {
        const pDel =this.handleSubmit();
        return(
            <div className="TbContainer">
                    <table className="Tabla">
                        <tr className="TrHeader">
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Descripción</th>
                        </tr>
                        {Object.keys(this.state.MisReservas).map(data =>{
                                console.log(data);
                            return(
                                <tr className="TrBody" key={data}>
                                    <td>{this.state.MisReservas[data].fecha}</td>
                                    <td>{this.state.MisReservas[data].hora}</td>
                                    <td>{this.state.MisReservas[data].descripcion}</td>
                                </tr>
                                                                
                                );
                            })
                        }
                    </table> 
            </div>
        );
        
    }
}


export default Tabla;
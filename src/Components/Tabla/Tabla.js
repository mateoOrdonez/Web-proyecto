import React from "react";
import BtnEl from "../BotonEL/BtnEl";
import "./Tabla.css";
import fb from "../../Utils/Firebase"
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getDatabase, ref, onValue, get, child } from "firebase/database";

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';


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


    /*peticionDelete(){
        const db = getDatabase();
        const eliminar= remove(ref(db), `proyectofinalweb-2c536-default-rtdb/Reservas/${this.state.id}`);
        return eliminar
    }*/
    
    render() {
        {/*const pDel =this.peticionDelete();*/}
        return(
            <div className="TbContainer">
                    <table className="Tabla">
                        <tr className="TrHeader">
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Descripción</th>
                            <th>Opciones</th>
                        </tr>
                        {Object.keys(this.state.MisReservas).map(data =>{
                                console.log(data);
                            return(
                                <tr className="TrBody" key={data}>
                                    <td>{this.state.MisReservas[data].fecha}</td>
                                    <td>{this.state.MisReservas[data].hora}</td>
                                    <td>{this.state.MisReservas[data].descripcion}</td>
                                    <td>
                                        <BtnEl></BtnEl>
                                    </td>
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
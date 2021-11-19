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
            MisReservas:([])
        })
    }

    componentDidMount() {

        //const db = getDatabase();
        //const r = ref(db, 'proyectofinalweb-2c536-default-rtdb');

          const dbRef = ref(getDatabase());
            get(dbRef, "proyectofinalweb-2c536-default-rtdb").then((snapshot) => {
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

    handleUpdate(Mr){
        this.setState({ MisReservas: Mr });
    }

    /*constructor(){
        super();
        this.state ={
            isOpenE: false,
            setIsOpenE: false
        };
    }
    
    openE = () =>{

        this.setState ({
            isOpenE: true,
            setIsOpenE: true
        });

    }

    CloseE = () =>{

        this.setState ({
            isOpenE: false,
            setIsOpenE: false
        });
    }*/
    
    render() {
        {/*const{isOpenE} = this.state*/}
        return(
            <div className="TbContainer">
                    <table className="Tabla">
                        <tr className="TrHeader">
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Descripción</th>
                            <th>Opciones</th>
                        </tr>
                        {/*{this.state.MisReservas && this.state.MisReservas.map(data =>{
                                console.log(data);*/}
                            {/*return(*/}
                                <tr className="TrBody">
                                    <td>fecha</td>
                                    <td>hora</td>
                                    <td>descripcion</td>
                                    <td>
                                        <BtnEl></BtnEl>
                                    
                                    </td>
                                </tr>
                    </table> 
            </div>
        );
        
    }
}


export default Tabla;
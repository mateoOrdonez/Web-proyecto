import React, { useState } from "react";
import { Button, Icon } from 'semantic-ui-react'
import BtnEl from "../BotonEL/BtnEl";
import Eliminar from "../Eliminar/Eliminar";
import "./Tabla.css";

class Tabla extends React.Component{

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
                <tr className="TrBody">
                    <td>Soleado</td>
                    <td>Mayormente soleado</td>
                    <td>Parcialmente nublado</td>
                    <td>
                        <BtnEl></BtnEl>
                    {/*<Button color="green" animated='vertical'>
                        <Button.Content hidden>Editar</Button.Content>
                            <Button.Content visible>
                            <Icon name='pencil' />
                        </Button.Content>
                    </Button>

                    <Button color="red" animated='vertical' onClick={this.openE}>
                        <Button.Content hidden>Eliminar</Button.Content>
                            <Button.Content visible>
                            <Icon name='trash' />
                        </Button.Content>
                    </Button>
                    {isOpenE && <Eliminar 
                        isOpenE={isOpenE} 
                        closeE={this.CloseE}
                    />}*/}
                    </td>
                </tr>
            </table>
        </div>
        );
    }
}

export default Tabla;
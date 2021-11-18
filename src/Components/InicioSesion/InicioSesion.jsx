import React from 'react';
import Styles from './InicioSesion.module.css'
import Boton from './Boton/Boton';
import { Link } from 'react-router-dom'

function InicioSesion() {
    return (
        <div className={Styles.o_container}>
            <div className={Styles.o_imgback}>
            </div>
            <div className={Styles.o_inicio}>
                <h2>
                    Laboratorios UAO
                </h2>
                <input type="email" placeholder="Nombre de usuario" name="" id="" />
                <input type="password" placeholder="Contraseña" name="" id="" />
                <p>¿Has olvidado tu contraseña?</p>
                <Link to = "/Principal" className="Btn">
                    <Boton text="Acceder"/>
                </Link>
            </div>
        </div>
    );
}

export default InicioSesion;
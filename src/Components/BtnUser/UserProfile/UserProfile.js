import React, { useState } from "react";
import "./UserProfile.css";
import { Link } from 'react-router-dom'

const UserProfile = ({ isOpenU, closeU }) => {

    return (
            <div className={`UserContainer ${isOpenU && 'UserContainer-Open'}`}>
                <div className="User-Dialog">
                    <div className="ButtonsUs">
                        <a className="Btn" href="">Notificaciones</a>
                        <Link to = "/Reservas" className="Btn">
                            Mis reservas
                        </Link>
                        <Link to = "/" className="Btn">
                            Salir
                        </Link>
                    </div>
                </div>
            </div>
    );
}

export default UserProfile;
import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = ({isOpenU, closeU}) =>{

    return(
    <div className={`UserContainer ${isOpenU && 'UserContainer-Open'}`}>
        <div className="User-Dialog">
            <div className="ButtonsUs">
                <a className="Btn" href="">Notificaciones</a>
                <a className="Btn" href="">Mis reservas</a>
                <a className="Btn" href="">Salir</a>
            </div>
        </div>
    </div>
    );
}

export default UserProfile;
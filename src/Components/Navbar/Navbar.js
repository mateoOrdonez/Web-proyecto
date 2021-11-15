import React from "react";
import UserAccount from "../../Img/user-account.png"
import LogoUao from "../../Img/UAO-logo-acreditacion.png"
import BtnUser from "../BtnUser/BtnUser";
import "./Navbar.css";

const Navbar = function() {

    return(
    <div className="Nav">
        <div className="NavContainer">
            <div>
                <img src={LogoUao}/>
            </div>
            <div>
                <BtnUser ImgUs={UserAccount}></BtnUser>
            </div>
        </div>
    </div>
    );
}

export default Navbar;
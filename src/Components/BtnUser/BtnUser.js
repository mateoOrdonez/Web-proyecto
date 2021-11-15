import React, { useState } from "react";
import UserProfile from "./UserProfile/UserProfile";
import "./BtnUser.css";

const BtnUser = function({ImgUs}) {

    const [isOpenU, setIsOpenU] = useState(false);

    const openU = () =>{
        setIsOpenU(true);
    }

    const CloseU = () =>{
        setIsOpenU(false);
    }

    return(
    <div>
        <div className="BtnUserOp" onClick={openU}>
            <img className="BtnUserImg" src={ImgUs}/>
        </div>
        <div>
            {isOpenU && <UserProfile 
                isOpenU={isOpenU} 
                closeU={CloseU}
            />}
        </div>
    </div>
    );
}

export default BtnUser;
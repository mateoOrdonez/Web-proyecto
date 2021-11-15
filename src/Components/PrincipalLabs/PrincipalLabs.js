import React from "react";
import Labs from "../Labs/Labs";
import Navbar from "../Navbar/Navbar";
import './PrincipalLabs.css';

function PrincipalLabs () {
    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Labs/>
            </div>
            
        </div>
    );
}

export default PrincipalLabs;
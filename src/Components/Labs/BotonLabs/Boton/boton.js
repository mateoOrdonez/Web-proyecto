import React, { useState } from "react";
import { Button, Icon } from 'semantic-ui-react'
import Reserva from "../../ReservaLab/ReservaLab";
import './boton.css';


const Boton = function() {

    const [isOpenE, setIsOpenE] = useState(false);

    const openE = () =>{
        setIsOpenE(true);
    }

    const CloseE = () =>{
        setIsOpenE(false);
    }
    
        return(
            <div>
                <div>
                    <Button onClick={openE}>
                        <h3 className="BtnReserva"> Ir </h3>
                    </Button>
                </div>
                <div>
                    {isOpenE && <Reserva 
                        isOpenE={isOpenE} 
                        closeE={CloseE}
                    />}
                </div>
            </div>
        );
}

export default Boton;
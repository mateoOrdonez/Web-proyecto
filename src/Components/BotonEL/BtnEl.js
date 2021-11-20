import React, { useState } from "react";
import { Button, Icon } from 'semantic-ui-react'
import Eliminar from "../Eliminar/Eliminar";

const BtnEl = function({del, edit}) {

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
                    <Button color="green" animated='vertical'>
                        <Button.Content hidden>Editar</Button.Content>
                            <Button.Content visible>
                            <Icon name='pencil' />
                        </Button.Content>
                    </Button>

                    <Button color="red" animated='vertical' onClick={openE}>
                        <Button.Content hidden>Eliminar</Button.Content>
                            <Button.Content visible>
                            <Icon name='trash' />
                        </Button.Content>
                    </Button>
                </div>
                <div>
                    {isOpenE && <Eliminar 
                        isOpenE={isOpenE} 
                        closeE={CloseE}
                        Delete={del}
                    />}
                </div>
            </div>
        );
}

export default BtnEl;
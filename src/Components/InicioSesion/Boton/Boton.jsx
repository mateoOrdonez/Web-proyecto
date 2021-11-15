import React from 'react';
import Styles from './Boton.module.css'

function Boton({text}) {
    return (
        <button className={Styles.o_boton}>
            {text}
        </button>
    );
}

export default Boton;
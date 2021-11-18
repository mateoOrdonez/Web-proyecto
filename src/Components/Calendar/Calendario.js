import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendario.css';

function Calendario() {
    const [value, onChange] = useState(new Date());
    return (
        <div className="containerNE">
            <div className="textNE">
                <h2 >Calendario</h2>
            </div>
            <div >
                <div >
                    <Calendar
                        onChange={onChange}
                        showWeekNumbers
                        value={value}
                    />
                </div>
            </div>

        </div>
    );
}

export default Calendario;
import React, {useState} from 'react'
import "./contadorClicks.css"

export default function ClickCount() {
    const [clicks,setClicks] = useState(0);
    const [UltimoClick, setUltimoClick] = useState();

    function handleClick(){
        setClicks(clicks + 1) ;
        let horaClick = new Date().toLocaleTimeString();
        setUltimoClick(horaClick)
    }

return (
    <div onClick={handleClick} >
        <span>
            Hora: {UltimoClick}
        </span>
    </div>
)
}

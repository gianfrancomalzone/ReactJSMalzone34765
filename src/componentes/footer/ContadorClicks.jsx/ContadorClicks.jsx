import React, {useState} from 'react'

export default function ClickCount() {
    const [clicks,setClicks] = useState(0);
    const [UltimoClick, setUltimoClick] = useState();
    function handleClick(){
        console.log("Se hizo el click");
        setClicks(clicks + 1) ;
        let horaClick = new Date().toLocaleTimeString();
        setUltimoClick(horaClick)
    }
return (
    <>
    
    <div onClick={handleClick}>
        <span>
            Hora: {UltimoClick}
        </span>
    </div>
    </>
)
}
//1.40m
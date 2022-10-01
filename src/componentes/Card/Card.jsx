import "./card.css"
import Boton from "../Boton/Boton"

export default function Card(props) {
    console.log(props) ;

    return (
        <div className="card">
            <div className="cardImg">
                <img src={props.img} alt={props.altImg} />
            </div>
            <div className="cardDetalles">
                <h2>{props.title}</h2>
                <p>{props.details}</p>
                <h4>${props.price}</h4>
            </div>
            <Boton/>
        </div>
    );
}

import React from 'react'
import Card from "./Card/Card"

function ItemList(props) {
  return (
    <div> 
        { props.autoList.map((listaAutos) => {
        return <Card 
        key={listaAutos.id}
        titulo={listaAutos.titulo} 
        imgSrc={listaAutos.imgSrc} 
        marca={listaAutos.marca} 
        precio={listaAutos.precio} 
        stock={listaAutos.stock}/>;
      })} 
    </div>
  ) 
}

export default ItemList
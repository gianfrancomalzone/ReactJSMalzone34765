import React from 'react'
import Card from "./Card/Card"

function ItemList(props) {
  return (
    <div>
        { coursesList.map((listaAutos) => {
        return <Card 
        key={listaAutos.id}
        titulo={listaAutos.titulo} 
        imagen={listaAutos.imagen} 
        marca={listaAutos.marca} 
        precio={listaAutos.precio} 
        stock={listaAutos.stock}/>;
      })}
    </div>
  )
}

export default ItemList
import React from "react";
import Card from "./Card/Card";
import "./itemList.css";

function ItemList(props) {
  return (
    <>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        
        {props.autosList.map((listaAutos) => {
          return (
            <Card
              key={listaAutos.id}
              id={listaAutos.id}
              titulo={listaAutos.titulo}
              imgSrc={listaAutos.imgSrc}
              marca={listaAutos.marca}
              precio={listaAutos.precio}
              stock={listaAutos.stock}
            />
          );
        })}
      </div>
    </>
  );
}

export default ItemList;

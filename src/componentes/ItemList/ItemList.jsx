import React from "react";
import Card from "./Card/Card";
import "../../styles.scss";

function ItemList(props) {
  return (
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {props.productosList.map((listaproductos) => {
          return (
            <Card
              key={listaproductos.id}
              id={listaproductos.id}
              titulo={listaproductos.titulo}
              img={listaproductos.img}
              marca={listaproductos.marca}
              precio={listaproductos.precio}
              stock={listaproductos.stock}
            />
          );
        })}
      </div>
  );
}

export default ItemList;

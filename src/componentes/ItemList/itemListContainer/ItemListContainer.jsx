import React, { useEffect } from "react";
import { getAutos } from "../../../mockAPI/mockAPI";
import ItemList from "../ItemList";

function ItemListContainer() {
  const [autosList, setAutosList] = React.useState([])
  
  useEffect(() => {
    getAutos().then(data => {
      setAutosList(data)
    }).catch(error => {
      setAutosList([])
    }).catch(error => {
    })
  }, [autosList])

  return (
    <div>
      <ItemList autosList={autosList}/>
    </div>
  );
}

export default ItemListContainer;

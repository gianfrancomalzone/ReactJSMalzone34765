import React, { useEffect } from "react";
import { getAutos, getAutosCategoryId } from "../../../mockAPI/mockAPI";
import ItemList from "../ItemList";
import {useParams} from "react-router-dom"

function ItemListContainer() {
  const [autosList, setAutosList] = React.useState([])
  const params = useParams();
  const categoryId = params.categoryId;

  useEffect(() => {
    if (categoryId === undefined){
    getAutos().then(data => {
      setAutosList(data)
    }).catch(error => {
      setAutosList([])
    }).catch(error => {
    }) }
    else {
      getAutosCategoryId(categoryId).then((data) => {
        setAutosList(data)
      }).catch(error => {
        setAutosList([])
      }).catch(error => {
      })
    }
  }, [categoryId])

  return (
    <div>
      <ItemList autosList={autosList}/>
    </div>
  );
}

export default ItemListContainer;

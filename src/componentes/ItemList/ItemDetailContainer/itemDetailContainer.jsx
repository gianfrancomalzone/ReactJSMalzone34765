import React, { useState, useEffect } from "react";
import { getAutosDetail } from "../../../mockAPI/mockAPI";
import Card from "../Card/Card";
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [autosDetail, setAutosDetail] = React.useState([])
  const { id } = useParams();

  useEffect(() => {
    getAutosDetail(id).then(data => {
      setAutosDetail(data)
    }).catch(error => {
      setAutosDetail([])
    }).catch(error => {
    })
  }, [autosDetail]) ;

  return (
    <div>
      <Card 
        key={autosDetail.id}
        titulo={autosDetail.titulo} 
        imgSrc={autosDetail.imgSrc} 
        marca={autosDetail.marca} 
        precio={autosDetail.precio} 
        stock={autosDetail.stock}
        />
    </div>
  );
}

export default ItemDetailContainer;
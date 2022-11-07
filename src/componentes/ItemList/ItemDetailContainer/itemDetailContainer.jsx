import React, {useEffect } from "react";
import { getAutosDetail } from "../../../mockAPI/mockAPI";
import { useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";

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
      <CardDetail
        id={autosDetail.id}
        key={autosDetail.id}
        titulo={autosDetail.titulo}
        imgSrc={autosDetail.imgSrc}
        marca={autosDetail.marca}
        precio={autosDetail.precio}
        stock={autosDetail.stock}
        description={autosDetail.description}
        />
    </div>
  );
}

export default ItemDetailContainer;
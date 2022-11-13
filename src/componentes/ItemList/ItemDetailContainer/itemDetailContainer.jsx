import React, {useState, useEffect } from "react";
import { getAutosDetail } from "../../../mockAPI/mockAPI";
import { useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";

function ItemDetailContainer(props) {
  const [autosDetail, setAutosDetail] = useState([])
  const { id } = useParams();

  useEffect(() => {
    getAutosDetail(id).then(data => {
      setAutosDetail(data)
    })
  }, [id]) ;

  return (
    <div>
      <CardDetail
        autos={autosDetail} />
    </div>
  );
}

export default ItemDetailContainer;
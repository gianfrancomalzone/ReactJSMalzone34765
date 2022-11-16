import React, {useState, useEffect } from "react";
import { getProductosDetail } from "../../../services/firebase";
import { useParams } from "react-router-dom";
import CardDetail from "../CardDetail/CardDetail";

function ItemDetailContainer(props) {
  const [productosDetail, setproductosDetail] = useState({})
  const [feedbackMsg, setFeedbackMsg] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    getProductosDetail(id).then(data => {
      setproductosDetail(data)
    }).catch(error => {setFeedbackMsg(error.message)})
  }, [id]) ;

  return (
    <div>
      { feedbackMsg !== null ?
      <h1 className="text-center"> Error {feedbackMsg}</h1> : <CardDetail productos={productosDetail} /> }
    </div>
  );
}

export default ItemDetailContainer;
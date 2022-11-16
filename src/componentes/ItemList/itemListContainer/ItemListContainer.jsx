import { useEffect, useState } from "react";
import { getProductos, getProductosCategoriaId } from "../../../services/firebase";
import ItemList from "../ItemList";
import {useParams} from "react-router-dom"
import Loader from "../../loader/Loader";

  function ItemListContainer() {
    const [productosList, setProductosList] = useState([])
    const params = useParams();
    const categoriaId = params.categoriaId;
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      if (categoriaId === undefined){
      getProductos().then(data => {
        setProductosList(data)
        setIsLoading(false);
      })}
      else {
        getProductosCategoriaId(categoriaId).then((data) => {
          setProductosList(data)
          setIsLoading(false);
        })
      }
    }, [categoriaId])

  return (
    <div>
      {isLoading ? <Loader/> : <ItemList productosList={productosList}/>}
    </div>
  );
}

export default ItemListContainer;

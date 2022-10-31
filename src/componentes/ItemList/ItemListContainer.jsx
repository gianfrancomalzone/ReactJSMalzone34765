import React, {useState, useEffect } from "react";
import { getAutos } from "../mockAPI/mockAPI";

function ItemListContainer(props) {
  // eslint-disable-next-line
  const [autoList, setAutosList] = useState([]);

  useEffect(() => {
    getAutos().then((data) => { 
      setAutosList(data);      
    });  
  }, []); 


// props = titulo / imagen / marca / precio / stock

  return (
    <div className="row s row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      <ItemListContainer/>
    </div>
  );

}

export default ItemListContainer;

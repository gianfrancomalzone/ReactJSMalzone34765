import React, { useEffect, useState } from "react";
import "./Card/card.css";
import { getAutos } from "../mockAPI/mockAPI";

function ItemList(props) {
  const [coursesList, setAutosList] = useState([]);
  useEffect(() => {
    getAutos().then((data) => {
      setAutosList(data);
    });
  }, []);
// props = titulo / imagen / marca / precio / stock
  return (
    <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
      <ItemList/>
    </div>
  );
}

export default ItemList;

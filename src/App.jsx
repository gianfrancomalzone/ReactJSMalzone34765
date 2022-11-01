import React, {useState, useEffect } from "react";
import { getAutos } from "./componentes/mockAPI/mockAPI";
import './App.css';
import Footer from './componentes/footer/Footer';
import ItemList from './componentes/ItemList/ItemList';
import CollapsibleExample from './componentes/NavBar/Header/Header';

function App() {
  let estiloFondo = {backgroundColor: "#b398ff"};
  const [autoList, setAutoList] = React.useState([])
  
  // Aca llamar a la funcion cuando el componente se inicializa

  useEffect(() => {
    getAutos().then(data => {
      setAutoList(data) // Aca asignas los datos a la variable autoList
    }).catch(error => {
      setAutoList([]) // Aca igualas a un array vacio en caso de error
    }).catch(error => {
    })
  }, [autoList])

  return (
    <div style={estiloFondo} className="App">
      <CollapsibleExample/>
      <div className="">
      <ItemList className="row s row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4" autoList={autoList}/> {/* Aca pasas la propiedad al componente*/}
      </div>
      <Footer/>
    </div>
  );
}


export default App;

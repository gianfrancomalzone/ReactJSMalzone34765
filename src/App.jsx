import React from "react";
import "./App.css";
import Footer from "./componentes/footer/Footer";
import ItemListContainer from "./componentes/ItemList/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemList/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/NavBar/Header/Header";

function App() {
  let estiloFondo = { backgroundColor: "#D2D2D2" };

  return (
    <div style={estiloFondo} className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/autos/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1 style={estiloFondo}>Fuera del Route</h1>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;

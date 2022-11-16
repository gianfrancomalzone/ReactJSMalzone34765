import React from "react";
import Footer from "./componentes/footer/Footer";
import ItemListContainer from "./componentes/ItemList/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemList/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/NavBar/Header/Header";
import {CartContextProvider} from "./context/cartContext"
import CardView from "./componentes/ItemList/Card/CardView";
import "./styles.scss"

function App() {
  return (
    <CartContextProvider >
      <BrowserRouter className="App">
        <Header />
          <Routes >
            <Route path="/"                       element={<ItemListContainer />} />
            <Route path="/productos/:id"          element={<ItemDetailContainer />} />
            <Route path="*"                       element={<h1>Fuera del Route</h1>} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
            <Route path="/cart"                   element={<CardView/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;

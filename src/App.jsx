import React from "react";
import "./App.css";
import Footer from "./componentes/footer/Footer";
import ItemListContainer from "./componentes/ItemList/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemList/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/NavBar/Header/Header";
import {CartContextProvider} from "./context/cartContext"

function App() {
  return (
    <CartContextProvider className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/autos/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>Fuera del Route</h1>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<h1>Cart</h1>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;

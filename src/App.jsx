import React from "react";
import Footer from "./componentes/footer/Footer";
import ItemListContainer from "./componentes/ItemList/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemList/ItemDetailContainer/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/NavBar/Header/Header";
import { CartContextProvider } from "./context/cartContext"
import CardView from "./componentes/ItemList/Card/CardView";
import OffRoute from "./componentes/offRoute/offRoute";
import "./styles.scss"


// import {sendDataToFirebase} from "./services/firebase" 

function App() {
  return (
    <CartContextProvider >
      <BrowserRouter>
        <Header />
        {/* <button onClick={sendDataToFirebase}>Enviar Datos</button> */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/cart" element={<CardView />} />
          <Route path="*" element={<OffRoute />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;

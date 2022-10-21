import React from 'react'
import './App.css';
import Footer from './componentes/footer/Footer';
import ItemList from './componentes/ItemList/ItemListContainer';
import CollapsibleExample from './componentes/NavBar/Header/Header';

function App() {
  let estiloFondo = { backgroundColor: "#b398ff"} ;

  return (
    <div style={estiloFondo} className="App">
      <CollapsibleExample />
      <ItemList />
      <Footer />
    </div>
  );
}


export default App;

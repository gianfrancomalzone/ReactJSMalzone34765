import './App.css';
import ItemList from './componentes/ItemList/ItemList';
import NavBar from './componentes/NavBar/NavBar';

function App() {
  let estiloFondo = { backgroundColor: "#b398ff"} ;

  return (
    <div style={estiloFondo} className="App">
      <NavBar />
      <ItemList />
    </div>
  );
}


export default App;

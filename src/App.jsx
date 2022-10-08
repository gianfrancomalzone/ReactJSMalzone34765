import './App.css';
import ItemList from './componentes/ItemList/ItemList';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import CollapsibleExample from './componentes/NavBar/CollapsibleExample';

function App() {
  let estiloFondo = { backgroundColor: "#b398ff"} ;

  return (
    <div style={estiloFondo} className="App">
      <CollapsibleExample />
      <ItemListContainer greeting="Bienvenidos!"/>
      <ItemList />
    </div>
  );
}


export default App;

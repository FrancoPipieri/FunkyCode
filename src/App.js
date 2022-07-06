import ItemListConteiner from './components/ItemListConteiner.jsx';
import NavBar from './components/NavBar.jsx';
import ItemCount from './components/ItemCount.jsx';

function App() {
  return (
    <>
    <NavBar />
    <hr/>
    <ItemCount stock={6} initial={1}/>
    <ItemListConteiner />
    </>
  );
}

export default App;

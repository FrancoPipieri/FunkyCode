import ItemListConteiner from './components/Conteiner/ItemListConteiner.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemDetailConteiner from './components/Conteiner/ItemDetailConteiner.jsx';

function App() {
  return (
    <>
    <NavBar />
    <hr/>
    <ItemDetailConteiner/>
    <ItemListConteiner />
    </>
  );
}

export default App;

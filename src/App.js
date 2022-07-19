import ItemListConteiner from './components/Conteiner/ItemListConteiner.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemDetailConteiner from './components/Conteiner/ItemDetailConteiner.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar />
     <hr/>
      <Routes>
        <Route index element={<ItemListConteiner />}/>
        <Route path='/series/:serie' element={<ItemListConteiner />} />
        <Route path='/details/:id' element={<ItemDetailConteiner />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

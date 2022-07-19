import ItemListConteiner from './components/Containers/ItemListConteiner.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemDetailConteiner from './components/Containers/ItemDetailConteiner.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar />
     <hr/>
      <Routes>
        <Route index element={<ItemListConteiner />}/>
        <Route path='Category/:serie' element={<ItemListConteiner />} />
        <Route path='item/:id' element={<ItemDetailConteiner />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  );
}

export default App;

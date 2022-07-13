import {useState , useEffect} from 'react';  
import ItemList from '../Item/ItemList';

function ItemListConteiner(props) {
  useEffect(()=>{
    setTimeout(() => {
      fetch('/data.json')
        .then(response => response.json())
        .then(json => setFunkos(json));
    }, 2000);
  },[])

  const [funkos , setFunkos] = useState([]);

  return (
    <ItemList funkos={funkos}/>
  )
}

export default ItemListConteiner;

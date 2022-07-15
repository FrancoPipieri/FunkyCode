import {useState , useEffect} from 'react';  
import ItemList from '../Item/ItemList';
import Loader from '../Utils/Loader';

function ItemListConteiner(props) {
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);

      fetch('/data.json')
        .then(response => response.json())
        .then(json => setFunkos(json));
    }, 2000);
  },[])

  const [funkos , setFunkos] = useState([]);
  const[loading, setLoading] = useState(true)
  return (<>
    { loading ? <Loader/>
    : <ItemList funkos={funkos}/>}
    </>
  )
}

export default ItemListConteiner;

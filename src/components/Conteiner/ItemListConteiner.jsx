import {useState , useEffect} from 'react';  
import ItemList from '../Item/ItemList';
import Loader from '../Utils/Loader';
import {useParams} from 'react-router-dom';

function ItemListConteiner(props) {
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);

      fetch('/data.json')
        .then(response => response.json())
        .then(json => {
          if(serie){
            setFunkos(json.filter((product)=> product.series == serie))
          }else{
            setFunkos(json)
          }});

    }, 2000);
  },[])

  const {serie} = useParams();
  const [funkos , setFunkos] = useState([]);
  const [loading, setLoading] = useState(true)
  
  return (<>
    { loading ? <Loader/>
    : <ItemList funkos={funkos}/>}
    </>
  )
}

export default ItemListConteiner;

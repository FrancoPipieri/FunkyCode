import {useState , useEffect} from 'react';  
import ItemList from '../Item/ItemList';
import Loader from '../Utils/Loader';
import data from '../Utils/data.json';
import {useParams} from 'react-router-dom';

function ItemListConteiner(props) {
  const promise = new Promise((res) => {
    res(data)
  });
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
      promise.then((res) => {
        const products = res;
        if(serie){
          setFunkos(products.filter((product)=>product.series == serie))
        }else{
          setFunkos(products)
        }
      })
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

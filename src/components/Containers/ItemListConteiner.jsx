import {useState , useEffect} from 'react';  
import ItemList from '../Item/ItemList';
import Loader from '../Utils/Loader';
import data from '../Utils/data.json';
import {useParams} from 'react-router-dom';

function ItemListConteiner(props) {

  const {serie} = useParams();
  const [funkos , setFunkos] = useState([]);
  const [loading, setLoading] = useState(true)
  

  const promise = new Promise((res) => {
    res(data)
  });

  const getFunkos = async() => {

      promise.then((res) => {
        const products = res;
        if(serie){
          setFunkos(products.filter((product)=>product.series == serie))
        }else{
          setFunkos(products)
        }
      })
  }
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    getFunkos()},
     2000);
  },[serie])


  return (<>
    { loading ? <Loader/>
    : <ItemList funkos={funkos}/>}
    </>
  )
}

export default ItemListConteiner;

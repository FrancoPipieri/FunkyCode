import {useState , useEffect} from 'react';  
import ItemDetail from '../Detail/ItemDetail.jsx';
import Loader from '../Utils/Loader.jsx';
import { getItem } from '../Utils/AsyncMock.jsx'
import {useParams} from 'react-router-dom';

function ItemDetailConteiner(props) {
  const [product, setProduct] = useState([])
  const [loader, setLoading] = useState(false);
  const  {id}  = useParams();
  
  useEffect(() => {
    setLoading(true);
    getItem(id)
      .then((res) => setProduct({ ...res, id }))
      .finally(() => setLoading(false));
  }, []);


return(
  <>{loader ? <Loader/> : <ItemDetail {...product} />}</>
)

}
export default ItemDetailConteiner;

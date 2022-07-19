import {useState , useEffect} from 'react';  
import ItemDetail from '../Detail/ItemDetail.jsx';
import Loader from '../Utils/Loader.jsx';
import { getItem } from '../Utils/AsyncMock.jsx'

function ItemDetailConteiner(props) {
  const [product, setProduct] = useState()
  const [loader, setLoading] = useState(false);
  const id = 1;

  useEffect(() => {
    setLoading(true);
    getItem(id)
      .then((res) => setProduct({ ...res, id }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);


return(
  <>{loader ? <Loader/> : <ItemDetail {...product} />}</>
)

}
export default ItemDetailConteiner;

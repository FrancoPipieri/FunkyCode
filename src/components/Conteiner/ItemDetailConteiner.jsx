import {useState , useEffect} from 'react';  
import ItemDetail from '../Detail/ItemDetail.jsx';
import Loader from '../Utils/Loader.jsx';

function ItemDetailConteiner(props) {

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
          fetch('/data.json')
            .then(response => response.json())
            .then(json => setItem(json.find(data => data.id == 12)));
          }, 2000);
          },[]);

const [getItem, setItem] = useState([])
const [loader, setLoading] = useState(true)

return(
  <>{loader ? <Loader/> : <ItemDetail detail={getItem}/>}</>
)

}
export default ItemDetailConteiner;

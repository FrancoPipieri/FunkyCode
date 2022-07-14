import {useState , useEffect} from 'react';  
import ItemDetail from '../Detail/ItemDetail.jsx';

function ItemDetailConteiner(props) {
    useEffect(()=>{
        setTimeout(() => {
          fetch('/data.json')
            .then(response => response.json())
            .then(json => setDetail(json));
        }, 2000);
      },[])
    
    const [detail, setDetail] = useState([]);
    console.log(detail[0])
  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}
export default ItemDetailConteiner;

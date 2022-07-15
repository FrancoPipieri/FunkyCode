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
      
    if(detail.length == 0) return <h1>Loading...</h1>

  return (
    <div>
        <ItemDetail detail={detail[11]}/>
    </div>
  )
}
export default ItemDetailConteiner;

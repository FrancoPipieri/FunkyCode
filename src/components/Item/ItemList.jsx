import Item from './Item.jsx';
import '../main.css'

function ItemList(props){
    return(
    <div className="body">
    <div className="max-w-2xl mx-auto py-12 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
        {props.funkos.map((datos) => (
            <Item img={datos.filename} title={datos.title} price={datos.price} />
        ))}
      </div>
    </div>
  </div>
    )
}
export default ItemList;
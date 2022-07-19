import ItemCount from '../Item/ItemCount'

function ItemDetail(props) {
    console.log(props)
    const {title, price, filename, stock, series,} = props;

  return (
    <section className="body py-10">
        <div className="w-2/4 bg-neutral-300 m-auto rounded-md">
            <h2 className="font-bold text-2xl text-center p-4">{title}</h2>
            <div className="flex justify-around my-4">
                <img src={filename} alt={title} className="m-4 h-4/6 w-2/6"/>
                <div className="">
                    <span className="text-sky-500">Serie:</span>
                    <span className="text-gray-700">{series}</span>
                    <div>
                        <h3 className="text-gray-800 text-end text-xl">Precio: ${price}</h3>
                        <h4 className="text-gray-700">Hay disponible: {stock}</h4>
                        <p className="text-gray-700">- Figura Coleccionable <br />
                           - Su cabeza es Estilo Bobblehead <br />
                           - Altura : 16.5mm</p>
                        <ItemCount stock={stock} initial={1} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default ItemDetail;
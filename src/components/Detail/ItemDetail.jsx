function ItemDetail({detail}) {
    console.log(detail)
    const {title, price, filename, stock, series} = detail;
  return (
    <section className="body py-10">
        <div className="w-2/4 bg-neutral-500 m-auto">
            <h2 className="font-bold text-2xl text-center">{title}</h2>
            <div className="flex">
                <img src={filename} alt=""/>
                <div>
                    <span className="text-sky-300">Serie:</span>
                    <span className="text-gray-700">{series}</span>
                    <div>
                        <h3>{price}</h3>
                        <h4>{stock}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default ItemDetail;
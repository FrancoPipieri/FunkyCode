import {useState , useEffect} from 'react';

function ItemListConteiner(props) {
  useEffect(()=>{
    setTimeout(() => {
      fetch('/data.json')
        .then(response => response.json())
        .then(json => setFunkos(json));
    }, 1000);
  },[])

  const [funkos , setFunkos] = useState([]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {funkos.map((datos) => (
            <button className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={datos.filename}
                  alt={datos.title}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{datos.title}</h3>
              <h4 className="mt-4 text-sm text-gray-700">{datos.series}</h4>
              <p className="mt-1 text-lg font-medium text-gray-900">${datos.price}</p>
            </button>
          ))}
        </div>
      </div>
    </div>)
}

export default ItemListConteiner;

import {getFirestore, collection, getDocs, query, where, limit, documentId} from 'firebase/firestore';
import { useState } from 'react';

function Compras(){
    const [id, setId] = useState();
    const [lastBuy, setLastBuy] = useState();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const input = document.getElementById("compra");
        const data = input.value;
        setId(data)

        const db = getFirestore();
        const q = query(collection(db, "ordenes"),
                  where(documentId(), "==", id),
                  limit(1)
                  );
        getDocs(q).then(snapshot => snapshot.docs.map(doc => setLastBuy(doc.data())))
        console.log(lastBuy)
    }

    return ( 
        <>
        
        <div className='body'>
        <form className='flex flex-col items-center p-5' onSubmit={handleSubmit} >
            <label htmlFor="compra" className='m-2 '>Ingrese su ID de Compra</label>
            <input type="text" name="compra" id="compra" className='px-5 m-2 w-4/12 text-center'/>
            <button type='submit' className='button w-auto'>Buscar</button>
        </form>
        <div className='flex justify-center	'>
    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-3/4 m-5">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Compra Realizada</h3>
      </div>
      <div className="border-t border-gray-200">
        {lastBuy.compra.map((item)=>{
            return(
            <>
         <dl className='mb-3 border-double border-2'>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Articulo:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.item.title}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Series:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.item.series}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Precio:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${item.item.price}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Cantidad</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.quantity}</dd>
          </div>
          </dl>
          </>
          )
        })}

          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-double border-2">
            <dt className="text-sm font-medium text-gray-500">Total:</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${lastBuy.total}</dd>
          </div>

      </div>
    </div>
    </div>
    </div>
        </>
     );
}
 
export default Compras;
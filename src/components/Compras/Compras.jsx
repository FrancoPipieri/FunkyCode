import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  limit,
  documentId,
} from "firebase/firestore";
import { useState } from "react";

function Compras() {
  const [lastBuy, setLastBuy] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("compra");
    const data = input.value;

    const db = getFirestore();
    const orden = collection(db, "ordenes");
    const q = query(
      orden,
      where(documentId(), "==", data || input.value),
      limit(1)
    );
    getDocs(q).then((snapshot) =>
      snapshot.docs.map((doc) => setLastBuy(doc.data()))
    );
  };
  const borrar = () => {
    setLastBuy(undefined);
  };

  return (
    <>
      <div className="body">
        {lastBuy?.compra.length == undefined ? (
          <form
            className="flex flex-col items-center p-5"
            onSubmit={handleSubmit}
          >
            <label htmlFor="compra" className="m-2 ">
              Ingrese su ID de Compra
            </label>
            <input
              type="text"
              name="compra"
              id="compra"
              className="px-5 m-2 w-4/12 text-center"
            />
            <button type="submit" className="button mx-2.5 my-auto w-auto">
              Buscar
            </button>
          </form>
        ) : (
          <div className="flex justify-center	">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg w-3/4 m-5">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
                  Compra Realizada
                </h3>
              </div>
              <div className="border-t border-gray-200">
                {lastBuy?.compra.map((item) => {
                  return (
                    <>
                      <dl className="mb-3 border-double border-2">
                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Articulo:
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 ">
                            {item.item.title}
                          </dd>
                          <dd>
                            <img
                              src={item.item.filename}
                              alt=""
                              className="w-4/12 mx-auto"
                            />
                          </dd>
                        </div>
                        <div className="bg-slate-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-xs font-medium text-gray-500">
                            Series:
                          </dt>
                          <dd className="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                            {item.item.series}
                          </dd>
                        </div>
                        <div className="bg-gray-100 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-xs font-medium text-gray-500">
                            Precio:
                          </dt>
                          <dd className="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                            ${item.item.price}
                          </dd>
                        </div>
                        <div className="bg-slate-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-xs font-medium text-gray-500">
                            Cantidad
                          </dt>
                          <dd className="mt-1 text-xs text-gray-900 sm:mt-0 sm:col-span-2">
                            {item.quantity}
                          </dd>
                        </div>
                      </dl>
                    </>
                  );
                })}

                <div className="bg-white px-4 py-3 items-center	 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-double border-2">
                  <dt className="text-sm font-bold text-gray-900">Total:</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 font-bold sm:col-span">
                    ${lastBuy?.total}
                  </dd>
                  <button className="button" onClick={borrar}>
                    Limpiar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Compras;

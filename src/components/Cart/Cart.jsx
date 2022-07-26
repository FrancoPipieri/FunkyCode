import { useContext, useEffect} from "react";
import { CartContext } from '../context/CartContext.jsx';

const Cart = () => {

  const { cartItems, precioTotal , clear , remove } = useContext(CartContext);



  console.log(cartItems);
  return (
    <>
<div>
<div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden" id="chec-div">
    <div className="w-full z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
        <div className="flex md:flex-row flex-col justify-end" id="cart">
            <div className="w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
            <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Carrito</p>
                {cartItems.map((item) => (
                    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                    <div className="w-1/4">
                        <img src={item.item.filename} className="w-full h-full object-center object-cover rounded-md" />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">Id:{item.item.id}</p>
                        <div className="flex items-center justify-between w-full pt-1">
                            <p className="text-lg font-black leading-none text-gray-800">{item.item.title}</p>
                        </div>
                        <p className="text-sm leading-3 text-gray-600 pt-2 m-1">Altura : 16.5mm</p>
                        <p className="w-96 text-sm leading-3 text-gray-600 m-1">Estilo Bobblehead</p>
                        <p className="w-96 text-sm leading-3 text-gray-600 m-1">Cantidad: {item.quantity}</p>
                        <div className="flex items-center justify-between pt-5 pr-6">
                            <div className="flex itemms-center">
                                <button onClick={() => remove(item.item.id)} className="text-xs leading-3 underline text-red-500 cursor-pointer">Remove</button>
                            </div>
                            <p className="text-base font-black leading-none text-gray-800">${item.item.price}</p>
                        </div>
                        <p className="text-base font-gray leading-none my-3">SubTotal: ${item.quantity * Number(item.item.price)}</p>
                    </div>
                </div>
                ))}
                </div>
                <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100">
                        <div className="flex flex-col md:h-screen px-14 py-8 justify-between overflow-y-auto">
                            <div>
                                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                    <p className="text-2xl leading-normal text-gray-800">Total</p>
                                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">${precioTotal}</p>
                                </div>
                                <button onClick={clear} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
</div>
</div>
</>  );}

export default Cart;
 

import React, { createContext, useState , useEffect } from "react";

export const CartContext = createContext([]);

function CartProvider({children}){
  const [cartItems, setCartItems] = useState([]);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [itemCount , setItemCount] = useState(0);
  
  useEffect(()=>{
    let cantidadItems = 0
    let precio = 0
    let widgetCart = 0
    for(let itemCarrito of cartItems){
      cantidadItems += itemCarrito.quantity;
      precio += itemCarrito.quantity * itemCarrito.item.price;
      widgetCart+= 1;
    }
    setItemCount(cantidadItems);
    setPrecioTotal(precio)
  }, [cartItems]);

  const clear = () =>{
    setCartItems([]);
  };

  const remove = (itemId) =>{
    const update = cartItems.filter((i) => i.item.id !== itemId);
    setCartItems(update);
  };

  const agregarItem = (itemUpdate, cantidadUpdate) =>{
    let itemIndex = cartItems.findIndex((i) => i.item.id === itemUpdate.id );
    if(itemIndex === -1){
      setCartItems([...cartItems, {item: itemUpdate, quantity: cantidadUpdate}])
    }else{
      let carritoModified = [...cartItems];
      carritoModified[itemIndex].quantity += cantidadUpdate;
      setCartItems(carritoModified);
    };
  };
  return (
    <CartContext.Provider value={{cartItems, precioTotal, itemCount, clear, remove, agregarItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
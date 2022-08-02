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
  const remove = (itemId)=>{
    const cartUpdate = cartItems.filter((i) => i.item.id !== itemId)
    setCartItems(cartUpdate)
  }
  const removeUnity = ({item , quantity}) =>{
    if(quantity > 1){
      const update = cartItems.map(i => {
          if(i.item.id === item.id){
            return {...i, quantity: i.quantity - 1}
          }
          return i;
      })
      setCartItems(update);
    }else{
      setCartItems( cartItems.filter((i) => i.item.id !== item.id) );
    }
  };

  const addItem = (itemUpdate, cantidadUpdate) =>{
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
    <CartContext.Provider value={{cartItems, precioTotal, itemCount, remove, clear, removeUnity, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
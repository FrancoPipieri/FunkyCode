import React, { useState } from "react";

function ItemCount(props){
    const [count, setCount] = useState(props.initial);

    function suma(){
        if(count < props.stock){
        setCount(count + 1);
        }
    }
    function resta(){
        if(count > 1){
            setCount(count - 1);
        }
    }
    function agregar(){
        alert("Se agregaron "+ count +" articulos al carrito")
    }
    return(
        <div className="container text-center">
            <div className="flex flex-col items-center">
             <div>
                <div className="flex justify-between rounded border-black border-2">
                 <button className="m-2 w-8" onClick={resta}> -</button>
                 <span className="m-2 w-6">{count}</span>
                 <button className="m-2 w-8" onClick={suma}> +</button>
                </div>
                <div>
                    <button className="rounded border border-gray-500 m-2 p-0.5" onClick={agregar}> Agregar a Carrito</button>
                </div>
             </div>
            </div>
        </div>
    )
}

export default ItemCount;
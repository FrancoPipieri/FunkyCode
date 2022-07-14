import React, { useState } from "react";

function ItemCount(props){
    console.log(props)

    const [count, setCount] = useState(props.initial);

    console.log(count)

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
            <div className="flex flex-col items-center m-6">
             <div>
                <div className="flex justify-between rounded border-black border h-10">
                 <button className=" w-10 border border-gray-400" onClick={resta}> -</button>
                 <span className="w-8">{count}</span>
                 <button className="w-10 border border-gray-400" onClick={suma}> +</button>
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
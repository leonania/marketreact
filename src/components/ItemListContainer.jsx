import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import customFetch from "../utilidades/customFetch";
import ItemList from "./ItemList";
import products from "../utilidades/products"



const ItemListContainer = ({ greeting }) =>{
       const [datos, setDatos] = useState ([]);

       useEffect(() => { 
           customFetch(2000, products)
           .then(result => setDatos(result))
           .catch(err => console.log(err))
        }, []);

        const onAdd = (qty) =>{ 
            alert("Seleccionaste"+ qty + "Productos");
         }


    return(
        <>
        <h1>{ greeting }</h1>

        <ItemList items={datos}/>

        
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        
        </>
             


    );

}

export default ItemListContainer;


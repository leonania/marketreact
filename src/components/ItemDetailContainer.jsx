import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import customFetch from "../utilidades/customFetch";
import ItemList from "./ItemList";
import products from "../utilidades/products"
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () =>{
       const [dato, setDato] = useState ({});

       useEffect(() => { 
           customFetch(2000, products[3])
           .then(result => setDato(result))
           .catch(err => console.log(err))
        }, []);

  


    return(
        <>
      <ItemDetail item={dato}/>
        </>
             


    );

}

export default ItemDetailContainer;


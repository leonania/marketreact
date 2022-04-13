import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import customFetch from "../utilidades/customFetch";
import ItemList from "./ItemList";
import products from "../utilidades/products"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () =>{
       const [dato, setDato] = useState ({});
       const {id}= useParams();

       useEffect(() => { 
           customFetch(2000, products.find(item=> item.id === parseInt(id)))
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


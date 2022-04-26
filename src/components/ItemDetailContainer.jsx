import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import customFetch from "../utilidades/customFetch";
import ItemList from "./ItemList";
import products from "../utilidades/products"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {firestoreFetch} from "../utilidades/firestoreFetch"
import { firestoreFetchOne } from "../utilidades/firestoreFetch";


const ItemDetailContainer = () =>{
       const [dato, setDato] = useState ({});
       const {id}= useParams();

       useEffect(() => { 
             firestoreFetchOne(id)
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


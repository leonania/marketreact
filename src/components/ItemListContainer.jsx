import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import customFetch from "../utilidades/customFetch";
import ItemList from "./ItemList";
import products from "../utilidades/products"
import {useParams} from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import db from "../utilidades/firebaseConfig";
import {firestoreFetch} from "../utilidades/firestoreFetch";



const ItemListContainer = () =>{
       const [datos, setDatos] = useState ([]);

       const {categoryId} = useParams();
//componentDidUpdate
       useEffect(() => { 
        firestoreFetch(categoryId)
        .then(result => setDatos (result))
        .catch(err => console.log(err));
    
    }, [categoryId]);





        const onAdd = (qty) =>{ 
            alert("Seleccionaste"+ qty + "Productos");
         }


    return(
        <>
        

        <ItemList items={datos}/>

        
       
        
        </>
             


    );
    
}

export default ItemListContainer;


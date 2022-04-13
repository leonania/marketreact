import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import customFetch from "../utilidades/customFetch";
import ItemList from "./ItemList";
import products from "../utilidades/products"
import {useParams} from "react-router-dom"


const ItemListContainer = () =>{
       const [datos, setDatos] = useState ([]);

       const {categoryId} = useParams();

       useEffect(() => { 
        customFetch(2000, products.filter(item => {
            if (categoryId === undefined) return item;
            return item.categoryId === parseInt(categoryId)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);





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


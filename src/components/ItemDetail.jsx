import ItemCount from "./ItemCount";
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import Item from "./Item";
import GoToCart from "./GoToCart";
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Añadiste al carrito " + qty + " productos.");
        setItemCount(qty);
        test.addToCart(item, qty);

    }

    return (
        <>
        {
           item && item.image
            ? 
          
            <Card className="cardPrincipal" style={{ width: '48rem' }}>
            <Card.Img className="imagendeCard" variant="top" src={item.image}/>
            <Card.Body className="todomenosImagen">
            <Card.Title className="titleCard">{item.name}</Card.Title>
            <Card.Text className="textCard">{item.description}</Card.Text>
            <Card.Text className="precioo">$ {item.precio} </Card.Text>
            <Card.Text className="stock">{item.stock} Unidades. </Card.Text>

            {
                itemCount === 0
            ? <ItemCount className="itemcountt" stock={item.stock} initial={1} onAdd={onAdd} />
            
            : <GoToCart/>
            }
            </Card.Body>
            
            </Card>
            
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;
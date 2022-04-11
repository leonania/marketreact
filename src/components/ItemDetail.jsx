import ItemCount from "./ItemCount";
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Item from "./Item";

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>
        {
            item.image
            ? 
          
            <Card className="cardPrincipal" style={{ width: '48rem' }}>
            <Card.Img className="imagendeCard" variant="top" src={item.image}/>
            <Card.Body className="todomenosImagen">
            <Card.Title className="titleCard">{item.name}</Card.Title>
            <Card.Text className="textCard">{item.description}</Card.Text>
            <Card.Text className="precioo">$ {item.precio} </Card.Text>
            <Card.Text className="stock">{item.stock} Unidades. </Card.Text>
            <ItemCount className="itemcountt" stock={item.stock} initial={1} onAdd={onAdd} />
            </Card.Body>
            
            </Card>
            
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;
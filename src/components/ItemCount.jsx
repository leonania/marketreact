import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';
import producto1 from '../imagenes/producto1.jpeg';




const ItemCount = () => {
    const [ItemsCantidad, setItemsCantidad] = useState(0);
    return (
        <div>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={producto1} />
  <Card.Body>
    <Card.Title>Bombilla de acero</Card.Title>
    <Card.Text>
    Amigables con el medio ambiente, resistente, y gruesos. 
    </Card.Text>


   <Button variant="primary">-</Button><h1></h1> 
    <span>{ItemsCantidad}</span>
   <Button variant="primary">+</Button>


  </Card.Body>
</Card>
        </div>
    )
}

export default ItemCount;
import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import producto1 from '../imagenes/producto1.jpeg';




const ItemCount = ({stock = 0 ,initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);

  useEffect(()=>{
    setCount(initial);
  },[]);

  const increment = () =>{
    if (count < stock) {
      setCount(count + 1);
    }
  }

  const decrement = () =>{
    if (count > initial){
      setCount(count - 1);
    }
  }


    
    return (
        <div className="cardEntera">
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={producto1}/>
  <Card.Body>
    <Card.Title>Bombilla de acero</Card.Title>
    <Card.Text>
    Amigables con el medio ambiente, resistente, y gruesos. 
    </Card.Text>


    <Button variant="outline-info" className="buttonCard" onClick={increment}> - </Button> 
     <span style={{ fontSize: "1.5rem", color: "black"}} className="buttonCard">{count}</span> 
     <Button variant="outline-info" className="buttonCard"onClick={decrement}>+</Button> <br></br>


               {
            stock
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="contained" disabled>Add to Cart</Button>
                }


  </Card.Body>
</Card>
        </div>
    )
}

export default ItemCount;

/* 
<div >
    <Button onClick={()=> setItemsCantidad (ItemsCantidad - 1)} variant="outline-info" className="buttonCard"> - </Button> 
     <span style={{ fontSize: "1.5rem", color: "black"}} className="buttonCard">{ItemsCantidad}</span> 
     <Button onClick={()=> setItemsCantidad (ItemsCantidad + 1)} variant="outline-info" className="buttonCard">+</Button> <br></br>

</div>
    <Button variant="primary" className="addCart">Añadir al carrito</Button>
*/
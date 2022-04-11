import React, {useState, useEffect} from 'react';
import { Card, Button } from 'react-bootstrap';
import producto1 from '../imagenes/producto1.jpeg';




const ItemCount = ({stock,initial, onAdd}) => {
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
     
<>
<div className='itemcountt'>
    <Button variant="outline-info" className="buttonCard" onClick={decrement}> - </Button> 
     <span style={{ fontSize: "1.5rem", color: "black"}} className="buttonCard">{count}</span> 
     <Button variant="outline-info" className="buttonCard"onClick={increment}> + </Button> <br></br>


               {
            stock
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button variant="contained" disabled>Add to Cart</Button>
                }
</div>
</>
 
        
    )
}

export default ItemCount;


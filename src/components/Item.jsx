import { Card } from 'react-bootstrap';

const Item = ({imagen, titulo, descripcion, precio, stock  }) =>{ 

    return (
<div className="cardEntera">
   <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={imagen}/>
<Card.Body>
<Card.Title>{titulo}</Card.Title>
<Card.Text>{descripcion}</Card.Text>
<Card.Text>$ {precio} </Card.Text>
<Card.Text>{stock} Unidades. </Card.Text>
</Card.Body>
</Card>
</div>
    );
 }

 export default Item;


   
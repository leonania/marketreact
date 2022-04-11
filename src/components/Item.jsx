import { Card, Container, Row, Col } from 'react-bootstrap';


const Item = ({imagen, titulo, descripcion, precio, stock  }) =>{ 

    return (

        <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
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
 </Col>
    </Row>
    </Container>

           
    );
 }

 export default Item;


   
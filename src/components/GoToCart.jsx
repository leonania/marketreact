import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const GoToCart = () =>{

     return (
          <>

{
    
     <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
}
</>
     )
}

export default GoToCart;
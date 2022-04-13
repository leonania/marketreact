import React from 'react';
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link to='/'> <p className="navbar-brand textMarket" >CUIDA TU TIERRA</p></Link> 
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 itemsMarket">
      <li className="nav-item active">
      <Link to="/category/1"> <p className="nav-link" >CUIDADO PERSONAL<span className="sr-only"></span></p></Link> 
      </li>
      <li className="nav-item">
      <Link to="/category/2"> <p className="nav-link" >USO DIARIO <span className="sr-only"></span></p></Link> 
      </li>
      <li className="nav-item">
      <Link to="/category/3"><p className="nav-link" >OTROS <span className="sr-only"></span></p></Link> 
      </li>

      <li className="nav-item finNavbar ">
      <Link to="/category/4"> <p className="nav-link" >REGISTRATE <span className="sr-only"></span></p></Link> 
      </li>
      <li className="nav-item">
      <Link to="/category/5"> <p className="nav-link" >LOGIN <span className="sr-only"></span></p></Link> 
      </li>
      <li className="nav-item probandoCarrito">
      <CartWidget/>
      </li>

    </ul>
    
    
  </div>
</nav>
    );
}


export default NavBar;
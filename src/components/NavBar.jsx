import React from 'react';
import CartWidget from './CartWidget';

const barraNav = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand textMarket" href="#">MARKET</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0 itemsMarket">
      <li class="nav-item active">
        <a class="nav-link" href="#">INICIO <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">PRODUCTOS <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">CONTACTANOS <span class="sr-only"></span></a>
      </li>

      <li class="nav-item finNavbar ">
      <a class="nav-link" href="#">REGISTRATE <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">LOGIN <span class="sr-only"></span></a>
      </li>
      <li class="nav-item probandoCarrito">
      <CartWidget/>
      </li>

    </ul>
    
    
  </div>
</nav>
    );
}


export default barraNav;
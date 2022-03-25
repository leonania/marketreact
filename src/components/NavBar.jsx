import React from 'react';


const barraNav = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
      <a class="nav-link" href="#">NUESTROS PRODUCTOS <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">CONTACTANOS <span class="sr-only"></span></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0 buscarMarket">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
     
    </form>
  </div>
</nav>
    );
}


export default barraNav;
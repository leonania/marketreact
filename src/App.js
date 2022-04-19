import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";

function App() {
  return (
       <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>


          <Route path='/item/:id' element={<ItemDetailContainer/>}/>


          <Route path='/Cart' element={<Cart />} />

          <Route path='/category/:categoryId' element={<ItemListContainer/>}>


        
      

         
   
      
         
          
        


          </Route>
          </Routes>
          </BrowserRouter>
         
     
  );
}

export default App;

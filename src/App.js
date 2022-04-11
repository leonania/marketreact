import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
       <div>
      
          <NavBar/>
   
      
          {/* <ItemListContainer/> */}
          
          <ItemDetailContainer />

        
          
         
      </div>
  );
}

export default App;

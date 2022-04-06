import Item from './Item';


const ItemList = ({items}) =>{ 
    return (
        <>
        {  
        items.length > 0
        ? items.map(item => <Item stock={ item.stock} titulo={item.name} imagen={item.image} descripcion={item.description} precio={item.precio}/>)
        : <h1>ESPERA...</h1>
        
        }
        </>
    );
 }
 export default ItemList;
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';
import { Link } from 'react-router-dom';
import FormatNumber from "../utilidades/FormatNumber";
import db from "../utilidades/firebaseConfig";
import styled from "styled-components";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.span`
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-top: 50px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;




const Cart = () => {
    const test = useContext(CartContext);



const createOrder = () =>{
const itemsFordDB =test.cartList.map(item =>({
  id: item.idItem,
  title: item.nameItem,
  price: item.costItem,
  qty: item.qtyItem
 
}))

test.cartList.forEach(async (item)=>{
  const itemRef= doc(db,"products",item.idItem);
  await updateDoc(itemRef,{
    stock: increment(-item.qtyItem)
  });
});

  let order ={
    buyer:{
    name: "Leo Nania",
    email: "Leo.nania18@gmail.com",
    phone: "1140842058"

  },
  total: test.calcTotal(),
  date: serverTimestamp(),
  items: itemsFordDB,
  }
  console.log (order);

  const createOrderInFirestore = async () => {
    // Add a new document with a generated id
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);
    return newOrderRef;
  }

  createOrderInFirestore()
    .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
    .catch(err => console.log(err));

  test.removeList();
}
    return (
        <WrapperCart>
        <TitleCart>CARRITO</TitleCart>
        <Top>
            <Link to='/'><TopButton>CONTINUAR COMPRANDO</TopButton></Link>
            {
                (test.cartList.length > 0)
                ? <TopButton type="filled" onClick={test.removeList}>BORRAR PRODUCTOS</TopButton>
                : <TopText>El carro esta vacio</TopText>
            }
        </Top>
        <ContentCart>
                {
                    test.cartList.length > 0 &&
                    test.cartList.map(item => 
                    <Product key={item.idItem}>
                    <ProductDetail>
                        <ImageCart src={item.imgItem} />
                        <Details>
                        <span>
                            <b>Producto:</b> {item.nameItem}
                        </span>
                        <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>BORRAR</TopButton>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <ProductAmount>{item.qtyItem} Productos de...</ProductAmount>
                        
                        <ProductPrice>$ {item.costItem} </ProductPrice>
                        </ProductAmountContainer>
                        <ProductPrice>$ {test.calcTotalPerItem(item.idItem)} </ProductPrice>
                    </PriceDetail>
                    </Product>
                    )
                   
                }

                {
                    test.cartList.length > 0 &&
                    <Summary>
                        <SummaryTitle>ORDEN TOTAL</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>IVA</SummaryItemText>
                            <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>DESCUENTO IVA</SummaryItemText>
                            <SummaryItemPrice><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                        </SummaryItem>
                        <Button onClick={createOrder}>FINALIZAR COMPRA</Button>
                    </Summary>
                }
        </ContentCart>
    </WrapperCart>


    );
}

export default Cart;
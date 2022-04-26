import React from 'react';
import {Badge} from "@material-ui/core";
import { useContext } from 'react';
import { ShoppingCartOutlined} from "@material-ui/icons";
import { CartContext } from './CartContext';

const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <Badge badgeContent={test.calcItemsQty()} color="secondary">
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;
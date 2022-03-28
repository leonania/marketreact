import React from 'react';
import {Badge} from "@material-ui/core";
import { ShoppingCartOutlined} from "@material-ui/icons";

const ItemList = () =>{
    return(
<Badge badgeContent={2} color="secondary">
        
          <ShoppingCartOutlined/>

</Badge>
        
    );
}


export default ItemList;
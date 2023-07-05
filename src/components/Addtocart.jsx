import { CartProvider } from "react-use-cart";
import Cart from "./Cart";
import React from "react";

//add to cart with usecart hook 
//enclosed inside cartprovider
function AddToCart() {
    return (
        <div style={{ marginLeft: 200, marginRight: 200 }}>
            <CartProvider>
                <hr />
                <Cart />
            </CartProvider>
        </div>
    );
}




export default AddToCart;
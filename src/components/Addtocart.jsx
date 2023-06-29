import { CartProvider } from "react-use-cart";
import Cart from "./Cart";
import React from "react";


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
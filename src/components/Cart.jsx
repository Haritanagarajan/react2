import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const { items } = useCart(); // Get the items from the cart library

    return (
        <div>
            <h1>Cart</h1>
            {items.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <img src={item.image} alt={item.title} style={{ width: '100px' }} />
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Cart;

import React from 'react';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';


const Cart = () => {
    const { items } = useCart();

    const navigate = useNavigate();
    const {
        removeItem,
        isEmpty,
        updateItemQuantity,
        emptyCart,
        cartTotal
    } = useCart();



    const backtoschool = () => {
        navigate("/Schoolproducts/:sclname");
    }

    const totalprice = (item) => {
        return Number(item.price) * Number(item.quantity) + Number(item.Size);
    };


    if (isEmpty) return (
        <>
            <h1 className="ms-5" style={{ marginTop: 100 }}>Oops! &#128533; your cart is empty</h1>;
            <h1 className=" mt-1 offset-4" onClick={backtoschool} style={{ fontSize: '17px', color: 'green', marginBottom: '400px' }}>-Continue Shopping Click me !  &#128526;</h1>
        </>
    );

    return (
        <div className="row justify-content-center ">
            <div className="col-12 text-center mt-5">

                <div className="col-auto ms-auto">
                    <h1>Your Bag total is ₹{cartTotal}</h1>
                </div>
                <br />
                <table className="table" >
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ border: 'none' }}>
                                        <img src={item.image} style={{ height: "25rem" }} alt="" onClick={backtoschool} />
                                    </td>
                                    <td style={{ fontSize: '20px', fontWeight: '500', border: 'none' }}>{item.title}<h6 className='ms-n5' style={{ fontWeight: '600', fontSize: '13px' }}>Size:{item.Size}</h6></td>
                                    <button
                                        style={{ fontWeight: 'bold', fontSize: '20px', border: 'none' }}
                                        className=" ms-5" type='button'
                                        onClick={() =>
                                            updateItemQuantity(item.id, item.quantity - 1)
                                        }
                                    >
                                        –
                                    </button>
                                    <b>{item.Quantity}</b>
                                    <button
                                        style={{ fontWeight: 'bold', fontSize: '20px', border: 'none' }}
                                        className="" type='button'
                                        onClick={() =>
                                            updateItemQuantity(item.id, item.quantity + 1)
                                        }
                                    >
                                        +
                                    </button>
                                    <td style={{ fontWeight: '600', fontSize: '20px', border: 'none' }}>₹{totalprice(item)}</td>

                                    <button
                                        className="btn mt-3 ms-n3" style={{ color: 'red', fontSize: '11px', fontWeight: '600' }}
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="row offset-11 ">
                <h1 style={{ color: '#978F8F', fontSize: '20px' }} className='col-3 ps-5'>Sub Total </h1>
                <h1 style={{ color: '#978F8F', fontSize: '20px' }} className='col-7'>₹{cartTotal}</h1>
            </div>

            <div className="row  offset-11 pt-3" >
                <h1 style={{ color: 'black', fontSize: '30px' }} className='col-3 ps-5'>Total</h1>
                <h1 style={{ color: 'black', fontSize: '30px' }} className='col-7'>₹{cartTotal}</h1>

            </div>

            <div className="col offset-8">

                <button className="btn mt-5 mb-5" onClick={() => emptyCart()} style={{ color: 'white', backgroundColor: 'black', fontSize: '14px' }}>
                    Clear Cart
                </button>

                <button className="btn mt-5 mb-5" onClick={backtoschool} style={{ color: 'white', backgroundColor: 'black', fontSize: '14px' }}>Continue Shopping</button>
            </div>
        </div>
    );
};





export default Cart;

import React from 'react';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

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
        return Number(item.price) + Number(item.quantity) + Number(item.Size);
    };

    const { items } = useCart();

    if (isEmpty) return (<><h1 className="text-center" style={{ marginTop: 100 }}>Cart is Empty</h1>;
        <button className="btn btn-primary m-2" onClick={backtoschool}>Continue Shopping</button>
    </>);

    return (
        <div className="row justify-content-center" >
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
                                    <b>{item.quantity}</b>
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
            <div className="col-12-auto ms-auto">
                <h1 style={{ color: '#978F8F', fontSize: '20px' }} className='float-end ms-n5'>Sub Total ₹{cartTotal}</h1>
            </div>
            <div className="col-12-auto ms-auto" >
                <h1 style={{ color: 'black', fontSize: '30px' }} className='float-end ms-n5'>Total ₹{cartTotal}</h1>
            </div>

            <div className="col-auto ms-auto">
                <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
                    Clear Cart
                </button>
                <button className="btn btn-primary m-2" onClick={backtoschool}>Continue Shopping</button>
            </div>
        </div>
    );
};





export default Cart;

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
        totalItems,
        totalUniqueItems,
        cartTotal
    } = useCart();

    const backtoschool = () => {
        navigate("/Schoolproducts/:sclname");
    }

    const totalprice = (item) => {
        return item.price * item.quantity + item.Size;
    };

    const { items } = useCart();

    if (isEmpty) return <h1 className="text-center" style={{ marginTop: 100 }}>Cart is Empty</h1>;

    return (
        <div>
            {/* {items.map((item) => (
                <div key={item.id}>
                    <h3 onClick={backtoschool}>{item.title}</h3>
                    <button type="button" className='btn' onClick={backtoschool}><img src={item.image} alt={item.title} style={{ width: '100px' }} />   </button>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.Quantity}</p>
                    <p>Size: {item.Size}</p>
                    <p>Total price: {totalprice(item)}</p>
                    <button type="button" className='btn' onClick={() => removeItem(item.id)}>remove</button>
                </div>
            ))}
            
             */}

            <div className="row justify-content-center">
                <div className="col-12 text-center mt-5">

                    <div className="col-auto ms-auto">
                        <h1>Your Bag total is ₹{cartTotal}</h1>
                    </div>
                    <hr />
                    <br />
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            <tr>
                                <td style={{ padding: "0px 100px 0px 10px" }}> </td>
                                <td style={{ padding: "0px 100px 0px 10px" }}> </td>
                                <td style={{ padding: "0px 50px 0px 0px" }}></td>
                                <td style={{ padding: "0px 50px 0px 0px" }}></td>
                            </tr>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.image} style={{ height: "6rem" }} alt="" />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price *item.quantity}</td>
                                        <td> {item.quantity}</td>
                                        <td>
                                            <button
                                                style={{ border: "2px solid red" }}
                                                className="btn btn-light ms-2"
                                                onClick={() =>
                                                    updateItemQuantity(item.id, item.quantity - 1)
                                                }
                                            >
                                                –
                                            </button>
                                            <button
                                                style={{ border: "2px solid #fcba03" }}
                                                className="btn btn-light ms-2"
                                                onClick={() =>
                                                    updateItemQuantity(item.id, item.quantity + 1)
                                                }
                                            >
                                                +
                                            </button>
                                            <button
                                                className="btn btn-dark ms-2"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                Remove Item
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <hr />
                <br />

                <div className="col-auto ms-auto">
                    <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
                        Clear Cart
                    </button>
                    <button className="btn btn-primary m-2" onClick={backtoschool}>Continue Shopping</button>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};


{/* <h5>
  Cart ({totalUniqueItems}) total Items: ({totalItems})
                    </h5> */}



export default Cart;

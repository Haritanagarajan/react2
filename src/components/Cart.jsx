import React from 'react';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
    const { items } = useCart();

    const navigate = useNavigate();
    const {
        removeItem,
        isEmpty,
        cartTotal
    } = useCart();


    let paymentHandler = "";

    function makePayment() {
        invokeStripe();
        paymentHandler = window.StripeCheckout.configure({
            key: "pk_test_51Kb7TuSGj6LZeNumr4WWZQlyT0VAdXUwQ0zPIJAmGbnt9MAwXkJ5aIfQOZsCPraDu1L2BxAyRb8jLSF5tB6fL8mO00Yw0HiRYf",
            locale: "auto",
            token: function (stripeToken) {
                console.log(stripeToken);
                //alert('Stripe token generated!');
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });

                Toast.fire({
                    icon: "success",
                    title: "Order Placed Successfully",
                });
            },
        });
        paymentHandler.open({
            name: "Course",
            description: "Order Details",
            //amount: amount,
        });
    }

    function invokeStripe() {
        if (!window.document.getElementById("stripe-script")) {
            const script = window.document.createElement("script");
            script.id = "stripe-script";
            script.type = "text/javascript";
            script.src = "https://checkout.stripe.com/checkout.js";
            script.onClick = () => {
                paymentHandler = window.StripeCheckout.configure({
                    key: "pk_test_51NQPO0SDCKNqNo6Fp5eD7aGOywAMkmSvP08MDLV63HLgiBgEybJLBzhwhPMkxPnfiEtBSWwlxE0WESuFhTIdad7800rQJ5erID",
                    locale: "auto",
                    token: function (stripeToken) {
                        console.log(stripeToken);
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                        });

                        Toast.fire({
                            icon: "error",
                            title: "Error in generating Stripe Payment Gateway",
                        });
                    },
                });
            };
            window.document.body.appendChild(script);
        }
    }

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
                                    <b>{item.Quantity}</b>
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

                <button className="btn mt-5 mb-5" onClick={backtoschool} style={{ color: 'white', backgroundColor: 'black', fontSize: '14px' }}>
                    Continue Shopping                </button>

                <button className="btn mt-5 mb-5" onClick={makePayment} style={{ color: 'white', backgroundColor: 'black', fontSize: '14px' }}>Pay Now</button>
            </div>
        </div>
    );
};





export default Cart;

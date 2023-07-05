import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/Sclproductdisplay.css';
import Sizechart from '../Asserts/Images/Sizechart.png';
import { useCart, CartProvider } from "react-use-cart";
import Carousel from 'react-bootstrap/Carousel';



const Sclproductdisplay = () => {
    const { addItem } = useCart();
    const { id } = useParams();
    const navigate = useNavigate();
    const [sclproduct, setsclproduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [amount, setAmount] = useState('0');
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        fetch('https://acecraftjsondeploy.vercel.app/sclproducts')
            .then((response) => response.json())
            .then((data) => setRelatedProducts(data));
    }, []);



    useEffect(() => {
        fetch(`https://acecraftjsondeploy.vercel.app/sclproducts/${id}`)
            .then((response) => response.json())
            .then((data) => setsclproduct(data));
    }, [id]);

    useEffect(() => {
        if (selectedSize && sclproduct) {
            const newAmount = Number(selectedSize) + Number(sclproduct.dprice) * Number(selectedQuantity);
            setAmount(newAmount);
            console.log(newAmount);
        }
    }, [selectedSize, sclproduct, selectedQuantity]);



    if (!sclproduct) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate('/Schoolproducts/Schoolname');
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleQuantitySelect = (quantity) => {
        setSelectedQuantity(quantity);
    };

    const handleAddToCart = () => {
        const item = {
            image: sclproduct.sclproductimg,
            id: sclproduct.id,
            title: sclproduct.prodname,
            price: sclproduct.dprice,
            totalprice: amount,
            Quantity: selectedQuantity,
            Size: selectedSize
        };
        addItem(item);
        console.log('Item added to cart:', item);


        //create cart items 

        fetch('https://acecraftjsondeploy.vercel.app/Cartstorage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Item added to cart:', data);
            })
            .catch(error => {
                console.error('Error adding item to cart:', error);
            });
    };

    fetch(`https://acecraftjsondeploy.vercel.app/Cartstorage/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            image: sclproduct.sclproductimg,
            title: sclproduct.prodname,
            price: sclproduct.dprice,
            totalprice: sclproduct.dprice,
            Quantity: selectedQuantity,
            Size: selectedSize

        })
    })
        .then(response => response.json())
        .then(data => {

            console.log('Item edited:', data);
        })
        .catch(error => {
            console.error('Error editing item:', error);

        });




        

    return (
        <div style={{ paddingBottom: '500px' }} className='container-fluid'>

            <div className='row mt-5'>
                <div className='col-6 mt-5'>
                    <img
                        className='mt-5 ps-5 ms-5'
                        src={sclproduct.sclproductimg}
                        alt='sclimg'
                        height={550}
                        width={600}
                        onClick={handleGoBack}
                    />
                </div>

                <div className='col-6 mt-5'>
                    <h5
                        className='mt-5'
                        style={{
                            color: 'black',
                            fontSize: '40px',
                            fontWeight: '450',
                        }}
                    >
                        {sclproduct.prodname}
                    </h5>
                    <h5
                        className='pt-3'
                        style={{ color: 'black', fontSize: '14px' }}
                    >
                        Product Code: {sclproduct.prodcode}
                    </h5>
                    <h5 style={{ color: 'black', fontSize: '14px' }}>
                        Brand: {sclproduct.brand}
                    </h5>
                    <h5 style={{ color: 'black', fontSize: '14px' }}>
                        Sold by: {sclproduct.soldby}
                    </h5>
                    <h5
                        className='pt-3'
                        style={{
                            color: 'black',
                            fontSize: '40px',
                            fontWeight: '450',
                        }}
                    >
                        {sclproduct.dprice}
                    </h5>
                    <h5
                        className='ms-5 ps-4 mt-n2'
                        style={{
                            color: 'black',
                            fontSize: '18px',
                            fontWeight: '500',
                        }}
                    >
                        <del>{sclproduct.oprice}</del>
                    </h5>
                    <h5
                        className='text-center justify-content-center pt-1'
                        style={{
                            color: 'black',
                            fontSize: '16px',
                            backgroundColor: 'black',
                            color: 'white',
                            width: '69px',
                            height: '30px',
                            fontWeight: '400',
                        }}
                    >
                        {sclproduct.discount}
                    </h5>

                    <button
                        type='button'
                        className='btn  mt-3 ms-n1'
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        style={{
                            color: 'black',
                            fontSize: '14px',
                            backgroundColor: 'black',
                            color: 'white',
                            width: '120px',
                            height: '34px',
                            fontWeight: '400',
                        }}
                    >
                        SIZE GUIDE
                    </button>
                    <br />

                    <div className='btn-group mt-5 ms-n3'>
                        <button
                            className='btn btn-sm'
                            type='button'
                            style={{
                                color: 'black',
                                fontSize: '14px',
                                backgroundColor: 'black',
                                color: 'white',
                                width: '100px',
                                height: '34px',
                                fontWeight: '400',
                            }}
                            onClick={() => handleSizeSelect(selectedSize)}
                        >
                            Size: {selectedSize}
                        </button>
                        <button
                            type='button'
                            className='btn btn-sm dropdown-toggle dropdown-toggle-split'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                            style={{ width: '150px', color: 'black', fontSize: '15px' }}
                        >
                            <span className='visually-hidden'>
                                {selectedSize}
                            </span>
                            {selectedSize && (
                                <span style={{ marginLeft: '5px' }}>
                                    {selectedSize}
                                </span>
                            )}
                        </button>
                        <ul className='dropdown-menu mt-5 pt-5'>
                            <h5
                                style={{
                                    color: 'black',
                                    fontWeight: '500',
                                    fontSize: '15px',
                                }}
                            >
                                Please Select
                            </h5>
                            <li onClick={() => handleSizeSelect('20')}>20</li>
                            <li onClick={() => handleSizeSelect('22')}>22</li>
                            <li onClick={() => handleSizeSelect('24')}>24</li>
                            <li onClick={() => handleSizeSelect('26')}>26</li>
                            <li onClick={() => handleSizeSelect('28')}>28</li>
                            <li onClick={() => handleSizeSelect('30')}>30</li>
                            <li onClick={() => handleSizeSelect('32')}>32</li>
                            <li onClick={() => handleSizeSelect('34')}>34</li>
                            <li onClick={() => handleSizeSelect('36')}>36</li>
                            <li onClick={() => handleSizeSelect('38')}>38</li>
                            <li onClick={() => handleSizeSelect('40')}>40</li>
                        </ul>
                    </div>
                    <br />

                    <div className='mt-5'>
                        <label htmlFor='quantity' style={{ color: 'black', fontWeight: '500', fontSize: '15px' }}>
                            Quantity:
                        </label>
                        <input
                            type='number'
                            id='quantity'
                            className='form-control'
                            style={{
                                color: 'black',
                                fontSize: '14px',
                                backgroundColor: 'black',
                                color: 'white',
                                width: '100px',
                                height: '34px',
                                fontWeight: '400',
                            }}
                            min='1'
                            value={selectedQuantity}
                            onChange={(e) => handleQuantitySelect(e.target.value)}
                        />
                    </div>

                    <div className='mt-3'>
                        <label htmlFor='amount' style={{ color: 'black', fontWeight: '700', fontSize: '25px' }}>
                            Total Amount: {amount}
                        </label>
                    </div>

                    <CartProvider>
                        <button type='button' data-bs-toggle="modal" onClick={handleAddToCart}
                            data-bs-target="#example2Modal" className='btn mt-5 ms-n2' style={{ backgroundColor: 'black', color: 'white', fontSize: '15px' }}>
                            ADD TO CART
                        </button>
                    </CartProvider>

                    <button type='button' className='btn mt-5' style={{ backgroundColor: 'black', color: 'white', fontSize: '15px' }}>
                        BUY NOW
                    </button>
                </div>
                <Description />

                <Carousel>
                    {relatedProducts.map((scl) => (
                        <Carousel.Item key={scl.id}>
                            <div className='row d-flex justify-content-center '>
                                <div className="col-lg-2 col-sm-2 col-md-2 col-xl-2">
                                    <img
                                        className="col-lg-12 col-sm-12 col-md-12 col-xl-12"
                                        src={scl.sclproductimg}
                                        alt="Carousel item"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>


            {/* modal for size chart */}

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content" style={{ width: '800px' }}>
                        <div className="modal-header">
                            <h3 className="modal-title text-center justify-content-center" id="exampleModalLabel" style={{ color: 'black' }}>SIZE GUIDE</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={{ width: '800px' }}>
                            <h3 className="text-center" style={{ color: 'black', fontSize: '35px' }}>a c e c r a f t</h3>
                            <img src={Sizechart} alt="" />
                            <img src={sclproduct.sclproductimg} alt="srcimg" width='250px' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" data-bs-dismiss="modal" style={{ backgroundColor: 'black', color: 'white' }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>



            {/* // modal for add to cart */}

            <div className="modal fade" id="example2Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog" >
                    <div className="modal-content" style={{ width: '800px', backgroundColor: 'LightGreen' }}>
                        <div className="modal-header">
                            <h6 className='text-center' style={{ color: 'green', fontWeight: '600' }}>Yahoo! :) Your product added Succeesfully.....</h6>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};



function Description() {
    return (
        <div className='mt-5 pt-5 ms-5 '>
            <h6 style={{ color: 'black', fontWeight: '500' }}>Description of product</h6>
            <h5 style={{ color: 'black', fontWeight: '600' }}> NO RETURNS & NO EXCHANGE.</h5>
            <h6 style={{ color: 'black', fontWeight: '400' }}> Made from Poly-cotton. Henley neckline. Short sleeves.</h6>
            <h6 style={{ color: 'black', fontWeight: '500' }} className='mt-5'>Related products</h6>
        </div>
    )
}

export default Sclproductdisplay;

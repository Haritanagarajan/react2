import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Styles/Sclproductdisplay.css';



const Sclproductdisplay = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [sclproduct, setsclproduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/sclproducts/${id}`)
            .then((response) => response.json())
            .then((data) => setsclproduct(data));
    }, [id]);

    if (!sclproduct) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate('/Schoolproducts/Schoolname');
    };


    return (

        <div style={{}} className='container-fluid ms-5'>

            <div className='row mt-5 ms-5'>

                <div className='col-6 mt-5'>

                    <img className="mt-5 ps-5 ms-5" src={sclproduct.sclproductimg} alt="sclimg" height={450} width={450} onClick={handleGoBack} />

                </div>

                <div className='col-6'>
                    <h5 style={{ color: 'black', fontSize: '35px' }}>{sclproduct.prodname}</h5>
                    <h5 style={{ color: 'black', fontSize: '25px' }}>{sclproduct.prodcode}</h5>
                    <h5 style={{ color: 'black', fontSize: '25px' }}>{sclproduct.brand}</h5>
                    <h5 style={{ color: 'black', fontSize: '25px' }}>{sclproduct.soldby}</h5>
                    <h5 style={{ color: 'black', fontSize: '25px' }}>{sclproduct.dprice}</h5>
                    <h5 style={{ color: 'black', fontSize: '25px' }}>{sclproduct.oprice}</h5>
                    <h5 style={{ color: 'black', fontSize: '25px' }}>{sclproduct.discount}</h5>

                    <button type="button" className="btn btn-success">BUY NOW</button>
                    <button type="button" className="btn btn-success ms-5">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};




// const Buynow = () => {
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You wanted to buy it!",
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             Swal.fire(
//                 'order placed!',
//                 'Your order will be deleivered.',
//                 'success'
//             )
//         }
//     })
// }

export default Sclproductdisplay;
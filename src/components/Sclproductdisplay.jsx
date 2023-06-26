import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';



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
        navigate('/Schoolproducts');
    };


    return (

        <div style={{ paddingLeft: 300, paddingBottom: 60 }}>
            <div style={{ marginTop: -90 }} >
                <h2 style={{ color: 'black', paddingLeft: 10, fontWeight: '200' }}>Product Details</h2>
                <img className="mt-5 pt-5" src={sclproduct.sclproductimg} alt="sclimg" height={300} width={300} onClick={handleGoBack} />
                <button type="button" className="btn btn-success">BUY NOW</button>
                <button type="button" className="btn btn-success ms-5">ADD TO CART</button>

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
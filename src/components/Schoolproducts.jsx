import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pimgback from '../Asserts/Images/Pimgback.jpg';

const Schoolproducts = () => {
    const [sclproduct, setsclproduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/sclproducts')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setsclproduct(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    console.log(sclproduct);

    if (!sclproduct || sclproduct.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Img />

            <button type="button" className="btn" style={{ fontSize: '27px', color: 'black' }}>SCHOOL<span className="badge" style={{ color: 'grey', textTransform: 'lowercase', fontSize: '19px', fontWeight: '500' }}>-44 items</span ></button>

            <div key={sclproduct.id}>
                {sclproduct.map((scl) => (
                    <Link key={sclproduct.id} to={`/Sclproductdisplay/${scl.id}`} style={{ textDecoration: 'none' }}>
                        <div style={{ marginLeft: 10, display: 'inline-flex', flexDirection: 'col' }}>
                            <img src={scl.sclproductimg} height={400} width={400} alt={scl.id} />
                            <span style={{ marginTop: '400px', display: 'block', marginLeft: -130, marginRight: 20, padding: 6 }}>VIEW DETAILS</span>
                        </div>
                    </Link>
                ))}
            </div>

        </>
    );
};




function Img() {
    return (
        <div>
            <Quotes />
            <img src={Pimgback} alt="backgroundimg" width='100%' />
        </div>
    );
}

function Quotes() {
    return (
        <p className="text-center offset-3 pt-5" style={{ position: 'absolute', marginTop: '200px' }}><h3 className="pt-5 mt-5" style={{ color: '#978F8F', fontWeight: '100' }}>Decode</h3><br />
            <h1 style={{ color: '#978F8F', fontWeight: '400' }}>your kind of designer uniforms.</h1></p>
    );

}

function Hoverdisplay() {
    <>

    </>
}
export default Schoolproducts;
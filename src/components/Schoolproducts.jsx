import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pimgback from '../Asserts/Images/Pimgback.jpg';
import { useParams, useNavigate } from "react-router-dom";

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
            <Schoolname />
            <button type="button" className="btn" style={{ fontSize: '27px', color: 'black' }}>SCHOOL<span className="badge" style={{ color: 'grey', textTransform: 'lowercase', fontSize: '19px', fontWeight: '500' }}>-44 items</span ></button>

            <div className='container mb-3'>

                <div className='row' >
                    {sclproduct.map((scl) => (
                        <div className="col-md-4" key={sclproduct.id}>
                            <div className="cardss">
                                <div className='text-center '>
                                    <Link key={sclproduct.id} to={`/Sclproductdisplay/${scl.id}`} style={{ textDecoration: 'none' }}>
                                        <img src={scl.sclproductimg} height={300} width={300} alt={scl.id} className="mt-5 sclimg" />
                                        <h5 style={{ color: 'black', fontSize: '13px', fontWeight: '650' }} className="mt-2">{scl.prodname}</h5>

                                    </Link>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

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


//for scl logos

const Schoolname = () => {
    const { sclname } = useParams();
    const navigate = useNavigate();
    const [sclLogo, setsclLogo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/school/${sclname}`)
            .then((response) => response.json())
            .then((data) => setsclLogo(data));
    }, [sclname]);

    if (!sclLogo) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate('/School');
    };


    return (

        <div style={{}} key={sclLogo.sclname}>
            <button className="btn" onClick={handleGoBack} style={{ color: 'black' }}>{sclLogo.sclname}hello</button>
        </div>
    );
};



export default Schoolproducts;
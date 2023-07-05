import React, { useState, useEffect } from 'react';
import '../Styles/School.css'
import { Link } from 'react-router-dom';

export default function School() {
    return (
        <div className='imagefixed'>
            <Logo />
            <Text />
            <Secondscroll />
            <Thirdscroll />
            <Fourthscroll />
            <Fifthscroll />
        </div>
    );
}


function Logo() {
    const [sclLogo, setsclLogo] = useState([]);

    const fetchData = () => {
        fetch('https://acecraftjsondeploy.vercel.app/school')
            .then((response) => response.json())
            .then((data) => {
                setsclLogo(data);
            })
            .catch((error) => {
                console.error('Error fetching school data:', error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div className="container-fluid d-flex justify-content-center" id="bg1">
            {sclLogo.map((logos) => (
                <div key={sclLogo.id} className="logo-item text-center">

                    <Link to={`/Schoolproducts/${logos.id}`}>

                        <img
                            src={logos.sclimg}
                            alt={logos.sclname}
                            className="logo-img ps-4" />
                    </Link>

                    <p className="school-name" style={{ color: 'black', fontWeight: '500' }}>{logos.sclname}</p>
                    <p className="mt-n3" style={{ color: 'black', fontWeight: '500' }}>{logos.sclname2}</p>

                </div>
            ))}
        </div>
    );
}

function Text() {
    return (
        <div className='container-fluid'>
            <h1 className="workwear">Designer Uniforms for the doers</h1>
            <h1><i className="fas fa-chevron-down down1" style={{}}></i></h1>
        </div>
    )
}

function Secondscroll() {
    return (
        <div className="section2" style={{ color: '#978F8F' }}>
            <section className="bg-black">
                <div class="container-fluid">
                    <div id="text1">
                        <div class="fs-1 text-center">
                            <p>Aesthetically advanced,</p>
                            <p> our designer uniforms are<b> a cut above the rest,</b></p>
                            <p><b>in every sense of the word.</b>
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    )
}

function Thirdscroll() {
    return (
        <section className="main2">
            <div className="designer1 text-black">
                <div className="row bg-transprent justify-content-center">
                    <div className="col-12 text-center">
                        <h6 className="ms-4 fw-normal fs-1" style={{ marginTop: '500px' }}>
                            Perfection. Now<b> delivering to your doorstep.</b>
                            <br />
                            <i className="fas fa-chevron-down down2"></i>
                        </h6>
                    </div>
                </div>
            </div>
            <div className="designer1 text-black">
                <div className="row bg-transprent justify-content-center">
                    <div className="col-12 text-center">
                        <p
                            className="ms-4 fw-normal fs-2"
                            style={{ marginTop: '270px', paddingBottom: '250px' }}
                        >
                            Less<b> hassle.</b> More<b> hustle.</b>
                            <br /> Our end-to-end e-commerce facility with
                            <br />
                            <b>superior technology enables us to</b>
                            <br />
                            deliver your order right to your doorstep.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Fourthscroll() {
    return (
        <section className="bg-black" style={{ color: '#978F8F' }}>
            <div className="container">
                <div id="text2">
                    <div className="text-end">
                        <p className="fs-1 m-0">
                            <b>Be at ease.</b>
                        </p>
                        <p className="fs-1 m-0">
                            <b>Everyday.</b>
                        </p>
                        <p className="fs-4 fw-lighter">
                            Our uniforms keep your children looking great
                            <br />
                            from the first day of school until the end-of-the-year picnic.
                        </p>
                    </div>
                    <img src={"https://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/BK,.jpg"} alt='img' className="img-responsive" width="100%" />
                </div>
            </div>
        </section>
    );
}

function Fifthscroll() {
    return (
        <section className="main3" style={{ color: '#978F8F', backgroundColor: 'black' }}>
            <div className="col-md-12 pt-5 content text-center">
                <div className="text-center pt-5 ms-mb-x">
                    <p className="ms-m-0">Designer Uniforms</p>
                    <div className="text-center horizontal-line signature">
                        <span>by</span>
                    </div>
                    <p className="fs-2 fw-lighter" style={{ fontFamily: 'Courier New, monospace' }}>
                        acecraft
                    </p>
                </div>

                <div className="fs-4 fw-lighter">
                    Establish a <b className="fw-bold">signature look</b> for your school.
                </div>

                <div className="fs-4 fw-lighter mt-5">
                    Looking to change your supplier?
                    <br />
                    <button className="btn  mt-5 text-white" type="button" data-bs-toggle="modal" data-bs-target=".example5Modal" data-bs-whatever="@mdo" style={{ border: '1px solid white' }}>Get In Touch</button>
                </div>

                <div className="modal fade example5Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ width: '550px', height: '600px' }}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ color: '#000000', fontSize: '10px' }}></button>
                            <h5 className="modal-title exampleModalLabel text-center mt-5" style={{ fontSize: '30px', fontWeight: '640' }}>Get your Uniforms designed and<br /> styled by Us!</h5>
                            <div className="container-fluid icons">
                                <form>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="input-group">

                                                <input type="text" className="form-control" placeholder="First Name" style={{ fontWeight: '650' }} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="input-group">

                                                <input type="text" className="form-control" placeholder="Last Name" style={{ fontWeight: '650' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Professional Email" style={{ fontWeight: '650' }} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="input-group">

                                            <input type="text" className="form-control" placeholder="Organisation" style={{ fontWeight: '650' }} />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="input-group">

                                            <input type="text" className="form-control" placeholder="Phone No." style={{ fontWeight: '650' }} />
                                        </div>
                                    </div>
                                    <p className="quan mt-3" style={{ color: 'grey', fontWeight: '650',fontSize:'15px' }}>Quantity required</p>
                                    <div className="choice" style={{ color: 'grey', fontWeight: '600',fontSize:'15px'  }}>
                                        <input type="radio" className="quantity1" name="age" value="50" />
                                        <label htmlFor="age1" className="ps-1 ">10 - 50 Sets</label>
                                        <input type="radio" className="quantity2 ms-5 " name="age" value="100" />
                                        <label htmlFor="age2" className="ps-1">51 - 100 Sets</label>
                                        <input type="radio" className="quantity3 ms-5" name="age" value="100+" />
                                        <label htmlFor="age3" className="ps-1">100+ Sets</label>
                                    </div>
                                    <button type="button" className="btn2 btn btn-secondary mt-3" data-bs-dismiss="modal" style={{ width: '100%', color: 'white', backgroundColor: 'grey', borderRadius: '30px' }}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
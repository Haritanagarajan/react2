import React from "react";
import Carousel1 from '../Asserts/Images/Carousel1.png';
import Carousel2 from '../Asserts/Images/Carousel2.png';
import Carousel3 from '../Asserts/Images/Carousel3.png';
import College3 from '../Asserts/Images/College3.jpg';
import College11 from '../Asserts/Images/College11.jpg';
import College21 from '../Asserts/Images/College21.jpg';
import Cotton from '../Asserts/Images/Cotton.png';
import Wool from '../Asserts/Images/Wool.png';
import Woolenball from '../Asserts/Images/Woolenball.jpg';
import Viscose from '../Asserts/Images/Viscose.png';
import '../Styles/College.css';


export default function College() {
    return (
        //react fragments
        <>
            <div className="" style={{ position: 'relative', backgroundColor: 'black' }}>
                <img src={College11} alt="college1img" className="img-responsive img-fluid" style={{ backgroundColor: 'black' }} />
                <div className="container">
                    <div className="row">
                        <div className="col offset-7 pe-5" style={{ position: 'absolute', marginTop: '-400px', color: '#978F8F' }}>
                            <h1>The acecraft Collection.</h1>
                            <p>Simple. Sharp.<br />
                                Detailed perfection that makes you<br />
                                look good and feel great. Put it on. It's like magic.</p>
                            <p style={{ letterSpacing: '1px' }}><h4>Classic    &nbsp;  |    &nbsp;  Absolute   &nbsp;   |  &nbsp;    Signature</h4></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* items in woolenbal wool */}

            <div className="container-fluid itemsdiv">
                <div className="row">
                    <div className="col offset-4 ">
                        <img src={Woolenball} alt="Woolenball" className="woolenball" width='390px' />
                        <h1 className="" style={{ color: '#978F8F' }}>Naturally Cutting-Edge.</h1>
                        <h6 style={{ color: 'black', fontWeight: '400' }}>The ‘best of both worlds’ has a new definition. Every fabric in<br /> the acecraft line-up is made from a blend of two fibres to<br /> give you the best range. No tech involved - it’s just the touch<br /> of nature.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col offset-2 mt-n5">
                        <img src={Wool} alt="Wool" width='250px' className="mt-5 pt-5" />
                        <h1 className="offset-6 mt-n5" style={{ color: '#978F8F' }}>The Blended Wool</h1>
                        <h6 style={{ color: 'black', fontWeight: '400' }} className="offset-6">The Blended Wool is a class apart - with a mix of polyester <br /> for its wrinkle/crease-resistance and wool for warmth and absorbency,<br />  end your day looking the same as how you<br /> began it.</h6>
                    </div>
                </div>


                <div className="row">
                    <div className="col  mt-n5">
                        <img src={Cotton} alt="Cotton" width='230px' className="mt-5 offset-8 pt-5" />
                        <h1 className="mt-n5 offset-2" style={{ color: '#978F8F' }}>The Blended Cotton</h1>
                        <h6 style={{ color: 'black', fontWeight: '400' }} className="offset-2">The Blended Cotton is extremely strong and breathable.<br /> Easy to iron, this variant shrinks lesser than pure cotton and <br />retains its colour, which makes it a favourite choice for your<br /> everyday college wear.</h6>
                    </div>
                </div>


                <div className="row">
                    <div className="col offset-2 mt-n5">
                        <img src={Viscose} alt="Cotton" width='230px' className="mt-5" />
                        <h1 className="offset-6 mt-n5" style={{ color: '#978F8F' }}>The Blended Viscose</h1>
                        <h6 style={{ color: 'black', fontWeight: '400' }} className="offset-6">The Blended Viscose addition combines two ends of the<br /> spectrum - durability and a sense of softness. While the<br /> polyester contributes to resilience and shape retention, the<br /> viscose adds on to the overall absorbency, both sharpening <br />and softening your look at the same time.</h6>
                    </div>
                </div>
            </div>

            <img src={College21} alt='college' className="" />

            <div className="container" style={{ position: 'absolute', marginTop: '-150px', color: '#978F8F' }}>
                <div className="row mt-n5">
                    <div className="col mt-n5">
                        <h6 className="mt-n5 offset-7">THE ACECRAFT FIT</h6>
                        <h2 className=" ps-4 offset-7 ">Comfy.</h2>
                        <h1 className="offset-6 ps-5">Very comfy.</h1>
                        <p className="offset-6">It’s not just the fabric - it’s also the fit.<br />
                            The shoulders and sleeves fit right while the body feels <br />relaxed, making it undoubtedly the best.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: 'black', height: '500px' }}>
                {/* items in carousel */}
                <Black />
            </div>

            {/* img * with get in touch modal*/}
            <div className="" style={{ backgroundColor: "black" }}>
                <Fifthscroll />
                <img src={College3} alt="college3img" className="" style={{ borderColor: 'black' }} />
            </div>
        </>


    );
}

{/* items in carousel */ }
export function Black() {
    return (
        <div id='bg1' className="row w-100" style={{ color: '#978F8F', backgroundColor: 'black' }}>
            <div className="col mt-5">
                <h2 style={{ fontSize: 40, paddingTop: 90, paddingLeft: 90 }}> Your pretrial.</h2>
                <h2 style={{ fontSize: 40, paddingLeft: 90, lineHeight: 0.4 }}>Powered by our AI.
                </h2>
                <p className="mt-5 offset-1 ps-5" style={{ fontSize: '18px' }}>The acecraft Measurement Process is one <br></br> among the world's most accurate methods.<br></br> We set up a pre-trial event in your campus <br></br> and make each one try on the right fit. No<br></br> more guessing the right size business.</p>
            </div>
            <div className="col mt-5" >
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="1000">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Carousel1} class="d-block w-100" alt="..." height={400} width={500}></img>
                        </div>

                        <div class="carousel-item">
                            <img src={Carousel2} class="d-block w-100" alt="..." height={400} width={500}></img>
                        </div>
                        <div class="carousel-item">
                            <img src={Carousel3} class="d-block w-100" alt="..." height={400} width={500}></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

{/* img * with get in touch modal*/ }
function Fifthscroll() {
    return (
        <section className="offset-5 mt-5 pt-5" style={{ color: '#978F8F', background: 'none', position: 'absolute' }}>
            <div className="col-md-12 pt-5 content text-center">
                <div className="text-center pt-5 ms-mb-x">
                    <p className="ms-m-0" style={{ fontSize: '28px', fontWeight: '400' }}>Designer Uniforms</p>
                    <div className="text-center horizontal-line signature">
                        <span>by</span>
                    </div>
                    <p className="fs-2 fw-lighter" style={{ fontFamily: 'Courier New, monospace' }}>
                        acecraft
                    </p>
                </div>
                <div>
                    <button className="btn  mt-5 text-white" type="button" data-bs-toggle="modal" data-bs-target=".example4Modal" data-bs-whatever="@mdo" style={{ border: '1px solid white' }}>Get In Touch</button>
                </div>
                <div className="modal fade example4Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{ width: '550px', height: '560px' }}>
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
                                    <p className="quan mt-3" style={{ color: 'grey', fontWeight: '650' }}>Quantity required</p>
                                    <div className="choice" style={{ color: 'grey', fontWeight: '600' }}>
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










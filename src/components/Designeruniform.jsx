import React from "react";
import '../Styles/Designeruniform.css';

export default function Designeruniform() {
    return (
        <>
            <div className="card designcard justify-content-center">
                <h6 className="designeruniform text-center pt-2">Designer Uniforms</h6>
                <div className="text-center horizontal-line">
                    <span>by</span>
                </div>
                <h6 className="acecraft text-center">acecraft</h6>
                <button className="getintouch text-center" type="button" data-bs-toggle="modal" data-bs-target=".example3Modal" data-bs-whatever="@mdo">GET IN TOUCH</button>
            </div>

            <div className="modal fade example3Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
        </>
    );
}

import React from 'react';
import setting from './setting.png';
import cart from './cart.png';

export default function Navbar() {
    return (
        <div className='navbarfull col-lg-12 col-md-12 col-sm-12 col-xl-12' >
            <h2 className='titlename'>acecraft</h2>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className='nav-link' aria-current="page" href="#">SCHOOL</a>
                            <a className='nav-link' href="#">COLLEGE</a>
                            <a className='nav-link' href="#">ENTERPRISE</a>
                            <a className='nav-link notes' href="#">NOTES</a>
                            <a className='nav-link' id='areamask' href="#">ARIEN MASK</a>
                            
                            <div className='setting'>
                                <li class="companymenuli"><a class="alisting"><img src={setting} width='20px' /><b class="caret"></b></a>
                                    <ul class="ul">
                                        <li>Sign In &nbsp; |</li>
                                        <li>Register  &nbsp; |</li>
                                        <li>Order Status &nbsp; |</li>
                                        <li>Contact  &nbsp; |</li>

                                    </ul>
                                </li>



                            </div>

                            <div>
                                <button class="btn"><img src={cart} width='25px' /><span class="badge">0</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >

        </div>
    );
}


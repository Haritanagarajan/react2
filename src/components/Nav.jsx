import React from 'react';
import setting from './setting.png';
import cart from './cart.png';
import { Link } from "react-router-dom";
import '../Styles/Nav.css';

export default function Navbar() {
    return (
        <div className='navbarfull col-lg-12 col-md-12 col-sm-12 col-xl-12 fixed-top' >
            <Link className='titlename' to="#">acecraft</Link>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" to="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className='nav-link' aria-current="page" to="#">SCHOOL</Link>
                            <Link className='nav-link' to="#">COLLEGE</Link>
                            <Link className='nav-link' to="#">ENTERPRISE</Link>
                            <Link className='nav-link notes' to="#">NOTES</Link>
                            <Link className='nav-link' id='areamask' to="#">ARIEN MASK</Link>

                            <div className='setting'>
                                <li class="companymenuli"><Link class="alisting"><img src={setting} width='20px' /><b class="caret"></b></Link>
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


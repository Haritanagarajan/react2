import React from 'react';
import setting from '../Asserts/Images/setting.png';
import cart from '../Asserts/Images/cart.png';
import { Link } from "react-router-dom";
import '../Styles/Nav.css';
import Orderstatus from '../Asserts/Images/Orderstatus.png'

export default function Navbar() {
    return (
        <div className='navbarfull sticky-top' >

            <Link className='titlename text-center sm-none' to="/">acecraft</Link>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className='nav-link' aria-current="page" to="School">SCHOOL</Link>
                            <Link className='nav-link' to="College">COLLEGE</Link>
                            <Link className='nav-link' to="Enterprice">ENTERPRISE</Link>
                            <Link className='nav-link notes' to="Notes">NOTES</Link>
                            <Link className='nav-link' id='areamask' to="Arienmask">ARIEN MASK</Link>

                            <div className='setting'>
                                <li class="companymenuli"><Link class="alisting"><img src={setting} width='20px' alt="settings" /><b class="caret"></b></Link>
                                    <ul class="ul">
                                        <li>Sign In &nbsp; | <i class="fa-solid fa-right-to-bracket"></i></li>
                                        <li>Register  &nbsp; | <i class="fa-solid fa-user-plus"></i> </li>
                                        <li>Order Status &nbsp;| <img src={Orderstatus} alt="orderstatus" width='20' style={{color:'grey'}}/></li>
                                        <li>Contact  &nbsp; | <i class="fas fa-comments"></i></li>

                                    </ul>
                                </li>



                            </div>

                            <div>
                                <button class="btn"><img src={cart} width='25px' alt="carts" /><span class="badge">1</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >

        </div>
    );
}


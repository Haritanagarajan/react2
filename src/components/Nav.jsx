import React from 'react';
import setting from '../Asserts/Images/setting.png';
import cart from '../Asserts/Images/cart.png';
import { Link } from "react-router-dom";
import '../Styles/Nav.css';
import Orderstatus from '../Asserts/Images/Orderstatus.png'
import { useCart } from "react-use-cart";



   

export default function Navbar() {
    const {
        totalUniqueItems
      } = useCart();
    return (
        <div className='navbarfull sticky-top' >

            <Link className='titlename  sm-none text' to="/Acecraft">acecraft</Link>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#"></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-center">
                            <Link className='nav-link' aria-current="page" to="/School">SCHOOL</Link>
                            <Link className='nav-link' to="/College">COLLEGE</Link>
                            <Link className='nav-link' to="/Enterprice">ENTERPRISE</Link>
                            <Link className='nav-link notes' to="/Notes">NOTES</Link>
                            <Link className='nav-link' id='areamask' to="/Arienmask">ARIEN MASK</Link>

                            <div className='setting'>
                                <li className='companymenuli'><Link class="alisting"><img src={setting} width='20px' alt="settings" /><b class="caret"></b></Link>
                                    <ul className='ullist'>
                                        <Link style={{color:'#978F8F',textDecoration:'none'}} to="Signin"><li id="sign-in">Sign In &nbsp; | <i class="fa-solid fa-right-to-bracket"></i></li></Link>
                                        <Link  style={{color:'#978F8F',textDecoration:'none'}} to="Register"><li id="register">Register  &nbsp; | <i class="fa-solid fa-user-plus"></i> </li></Link>
                                        <Link  style={{color:'#978F8F',textDecoration:'none'}}><li id="order-status">Order Status &nbsp;| <img src={Orderstatus} alt="orderstatus" width='20' style={{ color: 'grey' }} /></li></Link>
                                        <Link  style={{color:'#978F8F',textDecoration:'none'}}><li id="contact">Contact  &nbsp; | <i class="fas fa-comments"></i></li></Link>
                                    </ul>
                                </li>
                            </div>

                            <div>
                               <Link to="cart"><button class="btn"><img src={cart} width='25px' alt="carts" /><span class="badge">{totalUniqueItems}</span></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >

        </div>
    );

}

// document.addEventListener("DOMContentLoaded", function () {
//     var parentLi = document.getElementsByClassName('companymenuli');
//     var childUl = parentLi.getElementsByClassName('ullist');

//     parentLi.addEventListener("mouseenter", function () {
//         childUl.style.display = "block";
//     });

//     parentLi.addEventListener("mouseleave", function () {
//         childUl.style.display = "none";
//     });

 
// });



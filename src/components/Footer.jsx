import React from "react";

import { Link } from 'react-router-dom';

import '../Styles/Footer.css';

import Facebook from './Facebook.png';

import Instagram from './Instagram.png';

import Linkedin from './Linkedin.png';


export default function Footer() {

    return (
        <div className="footerstart">


            <section className="footer" >

                <div className="container">

                    <div className="row justify-content-center pb-4 mt-n5">

                        <div className="d-flex justify-content-center icons">


                            <img src={Facebook} alt="#" style={{ width: '40px', height: '40px',padding:'2px',marginLeft:'70px' }} />
                            <img src={Instagram}  alt="#" style={{ width: '32px', height: '32px',padding:'2px',marginTop:'5px',marginLeft:'10px',backgroundColor:'white',borderRadius:'25px' }} />
                            <img src={Linkedin} alt="#" style={{ width: '40px', height: '40px', padding:'2px',marginLeft:'10px'}} />

                        </div>

                    </div>

                    <div className="row" style={{marginLeft:'65px'}} >

                        <div className="col-2 ">

                            <Link to="#">ABOUT</Link>
                        </div>

                        <div className="col-2" mx-3>
                            <Link to="#">CARE</Link></div>

                        <div className="col-2 "><Link to="#">RETURNS</Link></div>

                        <div className="col-2">
                            <Link to="#">PRODUCTION</Link>
                        </div>

                        <div className="col-2">
                            <Link to="#">TERMS</Link>
                        </div>

                        <div className="col-2 border-0 ">
                            <Link to="#" >GET HELP</Link>
                        </div>

                    </div>

                </div>

            </section>




        </div>
    );

}
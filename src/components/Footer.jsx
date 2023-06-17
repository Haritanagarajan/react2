import React from "react";

import { Link } from 'react-router-dom';

import '../Styles/Footer.css';


export default function Footer() {

    return (
        <div className="footerstart">


            <section className="footer" >

                <div className="container">

                    <div className="row justify-content-center pb-4 mt-n5">

                        <div className="d-flex justify-content-center">
                            <i className="fa-brands fa-facebook me-2" style={{ color: '#ffffff' }}></i>
                            <i className="fa-brands fa-instagram me-2" style={{ color: '#ffffff' }}></i>
                            <i className="fa-brands fa-linkedin-in me-2" style={{ color: '#ffffff' }}></i>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-2">

                            <Link to="#">ABOUT</Link>
                        </div>

                        <div className="col-2">
                            <Link to="#">CARE</Link></div>

                        <div className="col-2"><Link to="#">RETURNS</Link></div>

                        <div className="col-2">
                            <Link to="#">PRODUCTION</Link>
                        </div>

                        <div className="col-2">
                            <Link to="#">TERMS</Link>
                        </div>

                        <div className="col-2 border-0">
                            <Link to="#" >GET HELP</Link>
                        </div>

                    </div>

                </div>

            </section>




        </div>
    );

}
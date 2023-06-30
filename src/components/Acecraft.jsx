import React from "react";
import "primereact/resources/primereact.min.css";
import Home1 from '../Asserts/Images/Home1.jpg';
import '../Styles/Acecraft.css';
import Home2 from '../Asserts/Images/Home2.jpg';
import Home3 from '../Asserts/Images/Home3.jpg';
import { Link } from 'react-router-dom';





export default function Acecraft() {
    return (

        <div style={{ backgroundColor: 'black' }} className="container-fluid" >

            <img src={Home1} className="threemens img-responsive  img-fluid " alt="images" />

            <div className="borderforchooseclass">
                <p className="chooseclasscontent1">Choose Class </p>
                <p className="chooseclasscontent2">over the common.</p>
                <Link to="/College" className="acecraftforcolleges">ACECRAFT FOR COLLEGES</Link>
                <i className="arrowright" class="fas fa-chevron-right "></i>
            </div>

            <Acecraft1 />
            <Acecraft2 />



        </div>
    )
}


export function Acecraft1() {
    return (

        <div className="container-fluid">


            <img src={Home2} className="threemens1 img-responsive  img-fluid" alt="images" />

            <div className="borderforchooseclass1">
                <p className="chooseclasscontent11">A grade </p>
                <p className="chooseclasscontent21">of Greatness.</p>
                <Link to="/School" className="acecraftforcolleges1">ACECRAFT FOR SCHOOLS</Link>
                <i className="arrowright" class="fas fa-chevron-right "></i>
            </div>

        </div>
    );
}

export function Acecraft2() {
    return (
        <div className="container-fluid">

            <img src={Home3} className="threemens2 img-responsive  img-fluid" alt="images" />

            <div className="borderforchooseclass2">
                <p className="chooseclasscontent12">workwear </p>
                <p className="chooseclasscontent22">Redefined.</p>
                <Link to="/Enterprice" className="acecraftforcolleges2">ACECRAFT FOR ENTERPRISES</Link>
                <i className="arrowright" class="fas fa-chevron-right "></i>
            </div>
        </div>
    );
}



import React from "react";
import '../Styles/Enterprice.css';
import Hondaimg from './Honda.png';
import { useState, useEffect } from 'react';




export default function Enterprice() {
    return (
        <div className="imagefixed">

            <Honda />




        </div>
    );
}


function Honda() {

    const [mensindex, setmensindex] = useState([]);


    const fetchData = () => {
        fetch('http://localhost:4000/mens')
            .then((response) => response.json())
            .then((data) => {
                setmensindex(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="" style={{ backgroundColor: 'white', height: '90px' }}>
            <img src={Hondaimg} alt="Honda" className="Hondaimg mt-3" />

            <h6 className="Hondatext text-center mt-3">HONDA CAR'S DEALER MANPOWER UNIFORM</h6>

            <h1 className="workwear">Workwear that Works</h1>
            <h1><i className="fas fa-chevron-down "></i></h1>

            <div className="menapi">

                <h1 className="workrelaxed text-center pt-5">Work Relaxed.</h1>
                <h6 className="whenwe text-center pt-3">When we designed our uniforms, we wore them to work every day.</h6>
                <h6 className="westill text-center pt-2">We still do. They’re comfy, relaxed and designed to suit your workplace.</h6>


                {mensindex.map((mens) => (
                    <div>

                        <div className="card menscards">
                            <h3>{mens.img}</h3>
                        </div>

                    </div>

                ))}


            </div>

        </div>
    );
}



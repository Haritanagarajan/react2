import React from "react";
import '../Styles/Enterprice.css';
import Hondaimg from '../Asserts/Images/Honda.png';
import { useState, useEffect } from 'react';
import Designeruniform from './Designeruniform';





export default function Enterprice() {
    return (
        <div className="imagefixed">

            <Honda />
            <Steps />
            <Fourimgblock />
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

                <div className="row">

                    {mensindex.map((mens) => (

                        <div className="mensid col-md-4" key={mens.id}>

                            <div className="menscards">


                                <div className="menscardbody">

                                    <img src={mens.img} alt="enterprisesimg" width='590px' />
                                    <h4 className="imgcontent1 ps-5 ms-5 text-center">{mens.imgcontent1}</h4>
                                    <h1 className="imgcontent2   ps-5 pt-3 text-center">{mens.imgcontent2}</h1>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}

function Steps() {
    const [stepsindex, setstepsindex] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:4000/steps')
            .then((response) => response.json())
            .then((data) => {
                setstepsindex(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="container-fluid stepsbackground">


            <div className="row">

                <h1 className="text-center  thisishow"> This is how we do it.</h1>


                <div class="timeline">
                    <div class="point">1</div>
                    <div class="point">2</div>
                    <div class="point">3</div>
                    <div class="point">4</div>
                    <div class="point">5</div>
                    <div class="point1">6</div>
                </div>



                {stepsindex.map((steps) => (
                    <div className="col-md-2" key={steps.stepsid}>
                        <div className="">
                            <img src={steps.stepsimg} alt="stepsimg" width='120px' className="stepsimg" />
                            <h1 className="stepscontent1 ms-5">{steps.stepscontent1}</h1>
                            <h1 className="stepscontent2 ms-5">{steps.stepscontent2}</h1>
                        </div>

                    </div>

                ))}

            </div>


        </div>



    );
}



function Fourimgblock() {
    const [fourimgindex, setfourimgindex] = useState([]);
    const fetchData = () => {
        fetch('http://localhost:4000/fourimgblock')
            .then((response) => response.json())
            .then((data) => {
                setfourimgindex(data);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container-fluid fourimgback">

            <div className="row">

                {fourimgindex.map((four) => (
                    <div className="col-md-12" key={four.fourid}>
                        <div className="">
                            <img src={four.fourimg} alt="fourimg" className="fourimg" />
                        </div>
                    </div>

                ))}



            </div>

            <div className="design row">

                <div className="offset-lg-5 mt-n5">

                <Designeruniform />

                </div>

            </div>


        </div>

    );
}




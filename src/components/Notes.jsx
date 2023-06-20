import React from "react";

// import { Link } from "react-router-dom";

import '../Styles/Notes.css'

import Blogs from '../Data/Notes.json';

import { useState } from 'react';


export default function Notes()

 {

    const [details, setDetails] = useState(0);

    function handleNextClick() {
        setDetails(details + 1);
    }


    let Notesdetails = Blogs[details];

   

    return (
        
        <div class="card" style={{ color: 'black' }}>

            <i>{Notesdetails.title}</i>

            <button

                onClick={handleNextClick}
                className="btn btn-warning"
                style={{ borderRadius: 70 }}>

            </button>
        </div>

    );


}







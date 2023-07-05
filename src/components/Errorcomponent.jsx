import React from "react";

//error component designpage -error page if routing problem occurs

export default function Errorcomponent() {
    return (
        <div>
            <h1 className="ms-5 mt-4" style={{ color: '#978F8F', font: 'proxima', fontWeight: '400' }}>Error (404)</h1>
            <p className="ms-5 mt-4" style={{ color: '#978F8F', font: 'proxima', fontSize: '25px', fontWeight: '600' }}>Page you are requesting does not exist.</p>
            <p className="ms-5 " style={{ color: 'white', font: 'proxima', fontSize: '10' }}>Go to Home</p>
        </div>
    );
}
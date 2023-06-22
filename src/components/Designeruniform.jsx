import React from "react";
import '../Styles/Designeruniform.css'

export default function Designeruniform() {
    return (
        <>


            <div className="card designcard  justify-content-center ">
                <h6 className="designeruniform text-center pt-2">Designer Uniforms</h6>
                <div className="text-center horizontal-line">
                    <span>by</span>
                </div>

                <h6 className="acecraft text-center">acecraft</h6>
                <button type="button" className="getintouch text-center" onClick={Getintouch} >Get In Touch</button>
            </div>

        </>
    );
}


function Getintouch() {

}
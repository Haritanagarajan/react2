import React from "react";
import '../Styles/Arienmask.css';
import Errorcomponent from "./Errorcomponent";

//error component-error page if routing problem occurs
export default function Arienmask() {
    return (
        <div className="ariencontainer" style={{ paddingBottom: '500px', backgroundColor: 'black' }}>
            <Errorcomponent />
        </div>
    );
}



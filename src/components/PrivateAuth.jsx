import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Auth } from "./Auth";

//destructure children child components nested inside privateauth
const PrivateAuth = ({ children }) => {
    let location = useLocation();
    return Auth.isAuthenticated ? (
        children
    ) : (
        <Navigate to="/Signin" state={{ from: location }} />
    );
};

export default PrivateAuth;
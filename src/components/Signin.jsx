import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/Signin.css';
import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false); // Track login status
    const navigate = useNavigate();


    const OnSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/Register")
            .then((response) => response.json())
            .then((data) => {
                const registeruser = data.find(
                    (user) => user.fname === username && user.pword === password
                );

                if (registeruser) {
                    console.log("Login success");
                    setLoggedIn(true); // Update login status
                    navigate("/Acecraft");

                } else {
                    console.log("Login failed");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    if (loggedIn) {
        const signin = document.getElementById('cont');
        signin.style.display = "none";
    }

    return (
        <div className="container" id="cont" >
            <div className="row">
                <div className="col-12 py-5 shadow mb-5 my-custom-shadow">
                    <h2 className="ms-5 mb-3" style={{ color: '#978F8F', fontSize: '27px' }}>Login with ACECRAFT</h2>
                    <form className="login-form" onSubmit={OnSubmit}>
                        <div className="form-group">
                            <input
                                className="w-100"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                            />
                        </div>

                        <div className="form-group ms-1 pt-3">
                            <input
                                className="w-100"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                            />

                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <button className="bg-black text-white btn-size" type="submit">
                                Login
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-2">
                            <p className="mt-3 text-center" style={{ fontSize: '13px', color: '#978F8F' }}>
                                Doen't have an account?{" "}
                                <Link to="/Register" className="text-black w-25">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
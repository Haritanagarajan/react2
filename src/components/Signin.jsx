import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Signin.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Auth } from "./Auth";

const SignIn = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();


    //when login btn is clicked path from and location is displayed and when btn is clicked signin  auth component login func is implemented
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(from);

    let login = () => {
        Auth.login(() => {
            //navigate to where we gave privateauth in route
            navigate(from);
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:4000/Register")
            .then((response) => response.json())
            .then((data) => {
                const registeruser = data.find(
                    (user) => user.fname === username && user.pword === password
                );

                if (registeruser) {
                    console.log("Login success");
                    const id = registeruser.id;

                    fetch(`http://localhost:4000/Register/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            ...registeruser,
                            login: 1,
                        }),
                    })
                        .then(() => {
                            navigate("/Acecraft");
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                        });
                } else {
                    console.log("Login failed");

                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="container" id="cont">
            <p className="text-center" style={{ color: "#0d7a00", fontSize: 30, fontWeight: '600', fontStyle: 'italic', fontFamily: 'monospace' }}>
                Oops Login ! 	&#128517;
            </p>
            <div className="row">
                <div className="col-12 py-5 shadow mb-5 my-custom-shadow">
                    <h2
                        className="ms-5 mb-3"
                        style={{ color: "#978F8F", fontSize: "27px" }}
                    >
                        Login with ACECRAFT
                    </h2>
                    <form className="login-form" onSubmit={onSubmit}>
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
                            <button className="bg-black text-white btn-size" type="submit" onClick={login}>
                                Login
                            </button>
                        </div>

                        <div className="d-flex justify-content-center mt-2">
                            <p
                                className="mt-3 text-center"
                                style={{ fontSize: "13px", color: "#978F8F" }}
                            >
                                Don't have an account?{" "}
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

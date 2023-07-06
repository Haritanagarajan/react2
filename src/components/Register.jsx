import React, { useState } from "react";
import "../Styles/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [pword, setpword] = useState("");
    const [cpword, setcpword] = useState("");
    const [utype, setutype] = useState("");
    const [dname, setdname] = useState("");
    const [dcode, setdcode] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [gstnum, setgstnum] = useState("");
    const [errors, seterrors] = useState({});
    const [login, setlogin] = useState();

    const handleRegister = (e) => {
        e.preventDefault();

        // Reset errors
        seterrors({});

        // Perform validation
        const validationErrors = {};

        if (fname.trim() === "") {
            validationErrors.fname = "Required Field";
        } else if (!isValidName(fname)) {
            validationErrors.fname = "First name should only contain alphabets";
        }

        if (lname.trim() === "") {
            validationErrors.lname = "Required Field";
        } else if (!isValidName(lname)) {
            validationErrors.lname = "Last name should only contain alphabets";
        }

        if (email.trim() === "") {
            validationErrors.email = "Required Field";
        } else if (!isValidEmail(email)) {
            validationErrors.email = "Enter a valid email";
        }

        if (pword === "") {
            validationErrors.pword = "Required Field";
        } else if (!isValidPassword(pword)) {
            validationErrors.pword =
                "Must contain minimum 1 Lowercase,Uppercase and digit";
        }

        if (cpword === "") {
            validationErrors.cpword = "Required Field";
        } else if (pword !== cpword) {
            validationErrors.cpword = "Passwords do not match";
        }

        if (utype === "") {
            validationErrors.utype = "Required Field";
        }

        if (dname.trim() === "") {
            validationErrors.dname = "Required Field";
        } else if (!isValidName(dname)) {
            validationErrors.dname =
                "Dealership name should only contain alphabets";
        }

        if (dcode.trim() === "") {
            validationErrors.dcode = "Required Field";
        } else if (!isValidDealerCode(dcode)) {
            validationErrors.dcode =
                "Dealership number should only contain numbers ";
        }

        if (city.trim() === "") {
            validationErrors.city = "Required Field";
        } else if (!isValidName(city)) {
            validationErrors.city = "Only contain alphabets ";
        }

        if (state === "") {
            validationErrors.state = "Required Field";
        }

        if (gstnum.trim() === "") {
            validationErrors.gstnum = "Required Field";
        } else if (!isValidGSTNumber(gstnum)) {
            validationErrors.gstnum = " Only can contain numbers";
        }

        if (Object.keys(validationErrors).length === 0) {
            const newUser = {
                id: Math.random(),
                fname,
                lname,
                email,
                pword,
                utype,
                dname,
                dcode,
                city,
                state,
                gstnum,
                login
            };

            //creating user details when register btn is invoked

            fetch("https://reactjsonrender.onrender.com/Register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then((response) => {
                    if (response.ok) {

                        setfname("");
                        setlname("");
                        setemail("");
                        setpword("");
                        setcpword("");
                        setutype("");
                        setdname("");
                        setdcode("");
                        setcity("");
                        setstate("");
                        setgstnum("");
                        setlogin("");
                        console.log("Registration Successful");
                    } else {
                        throw new Error("Registration failed");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        } else {
            seterrors(validationErrors);
        }
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (pword) => {
        return (
            pword.length >= 8 &&
            /[a-z]/.test(pword) &&
            /[A-Z]/.test(pword) &&
            /\d/.test(pword) &&
            /[!@#$%^&*]/.test(pword)
        );
    };

    const isValidName = (name) => {
        const nameRegex = /^[A-Za-z]{1,30}$/;
        return nameRegex.test(name);
    };

    const isValidDealerCode = (dcode) => {
        const dealerCodeRegex = /^\d{1,15}$/;
        return dealerCodeRegex.test(dcode);
    };

    const isValidGSTNumber = (gstnum) => {
        const gstNumberRegex = /^\d{1,25}$/;
        return gstNumberRegex.test(gstnum);
    };

    return (
        <div className="container2" id="cont" style={{ marginBottom: '250px' }}>
            <div className="row">
                <div className="col-12 py-1 shadow  mt-5">
                    <h3 className="ms-4 pb-3" style={{ color: '#978F8F' }}>Sign Up with Acecraft</h3>
                    <form className="registration-form" onSubmit={handleRegister} style={{ color: '#978F8F' }}>
                        <div className="form-group" >
                            <input
                                type="text"
                                id="fname"
                                className={`form-control ${errors.fname ? "is-invalid" : ""
                                    }`}
                                placeholder="First name"
                                value={fname}
                                onChange={(e) => setfname(e.target.value)}
                            />
                            {errors.fname && (
                                <div className="invalid-feedback">{errors.fname}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="lname"
                                className={`form-control ${errors.lname ? "is-invalid" : ""
                                    }`}
                                placeholder="Last name"
                                value={lname}
                                onChange={(e) => setlname(e.target.value)}
                            />
                            {errors.lname && (
                                <div className="invalid-feedback">{errors.lname}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                id="password"
                                className={`form-control ${errors.pword ? "is-invalid" : ""
                                    }`}
                                placeholder="Password"
                                value={pword}
                                onChange={(e) => setpword(e.target.value)}
                            />
                            {errors.password && (
                                <div className="invalid-feedback">{errors.pword}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                id="confirmPassword"
                                className={`form-control ${errors.cpword ? "is-invalid" : ""
                                    }`}
                                placeholder="Confirm password"
                                value={cpword}
                                onChange={(e) => setcpword(e.target.value)}
                            />
                            {errors.confirmPassword && (
                                <div className="invalid-feedback">{errors.cpword}</div>
                            )}
                        </div>

                        <div>
                            <label className="text-center ms-5 ps-5 ">
                                <input style={{ paddingTop: '10px' }}
                                    type="radio"
                                    value="school"
                                    checked={utype === "school"}
                                    onChange={(e) => setutype(e.target.value)}
                                />
                                School
                            </label>
                            <label className="text-center me-5 pe-5" style={{ display: 'horizontal', marginTop: '-52px' }}>
                                <input
                                    type="radio"
                                    value="enterprise"
                                    checked={utype === "enterprise"}
                                    onChange={(e) => setutype(e.target.value)}
                                />
                                Enterprise
                            </label>
                        </div>
                        {errors.userType && (
                            <div className="invalid-feedback">{errors.utype}</div>
                        )}

                        <div className="form-group">
                            <input
                                type="text"
                                id="dealershipName"
                                className={`form-control ${errors.dname ? "is-invalid" : ""
                                    }`}
                                placeholder="Dealership Name"
                                value={dname}
                                onChange={(e) => setdname(e.target.value)}
                            />
                            {errors.dealershipName && (
                                <div className="invalid-feedback">{errors.dname}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="dealershipCode"
                                className={`form-control ${errors.dcode ? "is-invalid" : ""
                                    }`}
                                placeholder="dealership Number/Code"
                                value={dcode}
                                onChange={(e) => setdcode(e.target.value)}
                            />
                            {errors.dcode && (
                                <div className="invalid-feedback">{errors.dcode}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="city"
                                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                                placeholder="City"
                                value={city}
                                onChange={(e) => setcity(e.target.value)}
                            />
                            {errors.city && (
                                <div className="invalid-feedback">{errors.city}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <select
                                id="state"
                                className={`form-control ${errors.state ? "is-invalid" : ""}`}
                                value={state}
                                onChange={(e) => setstate(e.target.value)}
                            >
                                <option value="">Select state</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                            {errors.state && (
                                <div className="invalid-feedback">{errors.state}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="gstNumber"
                                className={`form-control ${errors.gstnum ? "is-invalid" : ""
                                    }`}
                                placeholder="GST Number"
                                value={gstnum}
                                onChange={(e) => setgstnum(e.target.value)}
                            />
                            {errors.gstNumber && (
                                <div className="invalid-feedback">{errors.gstnum}</div>
                            )}
                        </div>

                        <button className="bg-black text-white" type="submit">
                            Register
                        </button>
                        <p className="mt-3 text-center" style={{ fontSize: '13px', color: '#978F8F' }}>
                            Already have an account?{" "}
                            <Link to="/Signin" className="text-black w-25">
                                Sign in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/Schoolproducts.css';
import Pimgback from '../Asserts/Images/Pimgback.jpg';



const Schoolproducts = () => {
    const [sclproduct, setSclproduct] = useState([]);
    const [sortType, setSortType] = useState("items");
    useEffect(() => {
        fetch("https://acecraftjsondeploy.vercel.app/sclproducts")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setSclproduct(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleSortChange = (e) => {
        setSortType(e.target.value);
        sortArray(e.target.value);
    };

    const sortArray = (type) => {
        const sortedArray = [...sclproduct];
        switch (type) {
            case "Low to High":
                sortedArray.sort((a, b) => a.dprice - b.dprice);
                break;
            case "High to Low":
                sortedArray.sort((a, b) => b.dprice - a.dprice);
                break;
            case "Name Ascending - Descending":
                sortedArray.sort((a, b) => a.prodname.localeCompare(b.prodname));
                break;
            case "Name  Descending -  Ascending":
                sortedArray.sort((a, b) => b.prodname.localeCompare(a.prodname));
                break;
            default:
                break;
        }
        setSclproduct(sortedArray);
    };


    if (!sclproduct || sclproduct.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Imgg />
            <div className="container sclcontainer mb-3">
                <div className="row">
                    <div className="col">
                        <button
                            type="button"
                            className="btn"
                            style={{ fontSize: "20px", color: "black", background: 'none' }}
                        >
                            SCHOOL
                            <span
                                className="badge"
                                style={{
                                    color: "grey",
                                    textTransform: "lowercase",
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                            >
                                -{sclproduct.length} items
                            </span>
                        </button>


                    </div>

                    <div className="col-md-3" >
                        <div className="dropdown">
                            <select style={{ fontSize: '13px', boxShadow: '10px 10px 10px 2px grey', border: 'none', fontWeight: '600' }}
                                className="form-control"
                                onChange={handleSortChange}
                                value={sortType}
                            >
                                <option value="Low to High">sort by:Low to High</option>
                                <option value="High to Low">sort by:High to Low</option>
                                <option value="Name Ascending - Descending">Name: Ascending - Descending</option>
                                <option value="name-desc">Name:  Descending -  Ascending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {sclproduct.map((scl) => (
                        <div className="col-md-4" key={scl.id}>
                            <div className="cardss">
                                <div className="text-center">
                                    <Link
                                        key={scl.id}
                                        to={`/Sclproductdisplay/${scl.id}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <div className="position-relative">
                                            <img
                                                src={scl.sclproductimg}
                                                height={300}
                                                width={300}
                                                alt={scl.dprice}
                                                className="mt-5 crd-img uniform-item-image"
                                            />
                                            <div className="quick-view-overlay">
                                                <button className="quick-view-button">Quick View</button>
                                            </div>
                                        </div>
                                        <h5
                                            style={{
                                                color: "black",
                                                fontSize: "13px",
                                                fontWeight: "650",
                                            }}
                                            className="mt-2"
                                        >
                                            {scl.prodname}
                                        </h5>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

function Imgg() {
    return (
        <div>
            <Quotes />
            <img src={Pimgback} alt="backgroundimg" width="100%" />
        </div>
    );
}

function Quotes() {
    return (
        <p
            className="text-center offset-3 pt-5"
            style={{ position: "absolute", marginTop: "200px" }}
        >
            <h3 className="pt-5 mt-5" style={{ color: "#978F8F", fontWeight: "100" }}>
                Decode
            </h3>
            <br />
            <h1 style={{ color: "#978F8F", fontWeight: "400" }}>
                your kind of designer uniforms.
            </h1>
        </p>
    );
}



export default Schoolproducts;

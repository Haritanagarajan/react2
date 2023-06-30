// import React from "react";
// // import { useState } from "react";
// import axios from "axios";



// const [sclproduct, setSclproduct] = useState([]);
// useEffect(() => {
//     fetch("http://localhost:4000/sclproducts")
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             setSclproduct(data);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }, []);


// export default class Cartstorage extends React.Component {
//     state = {
//         sclproduct: [],
//     };

//     componentDidMount() {
//         axios.post(`http://localhost:4000/Cartstorage`).then((res) => {
//             const sclproduct = res.data;
//             this.setState({ sclproduct });
//             console.log(res.data);
//         });
//     }


// }
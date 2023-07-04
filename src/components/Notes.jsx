import React, { useEffect, useState } from 'react';
import '../Styles/Notes.css'
import { Link } from 'react-router-dom';

const Notes = () => {
    const [notesindex, setnotesindex] = useState([]);


    const fetchData = () => {
        fetch('http://localhost:4000/Notes')
            .then((response) => response.json())
            .then((data) => {
                setnotesindex(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='container mb-3'>
            <h1 className='blogs text-center '>Blogs</h1>
            <div className='row' >
                {notesindex.map((notes) => (
                    <div className="col-md-6" key={notes.id}>
                        <Link to={`/Notesdisplay/${notes.id}`} style={{ textDecoration: 'none' }}>
                            <div className="cards">
                                <div className='card-body  text-center '>
                                    {notes.title}
                                </div>
                            </div>
                        </Link >
                    </div>
                ))}
            </div>
        </div>
    );
};




export default Notes;
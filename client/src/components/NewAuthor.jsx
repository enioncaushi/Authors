import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const NewAuthor = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const createAuthor = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', { name })
            .then(response => {
                history.push('/authors');
            })
            .catch(error => {
                const errorResponse = error.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <div>
            <h1>Favourite Authors</h1>
            <Link to="/authors">Home</Link>
            <p>Add a new author:</p>
            {errors.map((error, index) => (
                <p key={index}>{error}</p>
            ))}
            <form onSubmit={createAuthor}>
                <label>Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
                <Link to="/authors">Cancel</Link>
            </form>
        </div>
    );
};

export default NewAuthor;

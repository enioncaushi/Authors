import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllAuthors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => setAuthors(authors.filter(author => author._id !== authorId)))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Favourite Authors</h1>
            <Link to="/authors/new">Add an author</Link>
            <p>We have quotes by:</p>
            {authors.map(author => (
                <div key={author._id}>
                    <Link to={"/authors/" + author._id + "/edit"}>{author.name}</Link>
                    <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default AllAuthors;

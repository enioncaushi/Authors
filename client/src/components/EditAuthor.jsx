import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

const EditAuthor = (props) => {
    const [author, setAuthor] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + props.id)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err));
    }, [props.id]);

    const updateAuthor = updatedAuthor => {
        axios.put('http://localhost:8000/api/authors/' + props.id, updatedAuthor)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>Favourite Authors</h1>
            {author && <AuthorForm initialName={author.name} onSubmitProp={updateAuthor} />}
        </div>
    );
}

export default EditAuthor;

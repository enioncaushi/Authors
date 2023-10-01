import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const AuthorForm = ({ initialName, onSubmitProp }) => {
    const [name, setName] = useState(initialName);
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name });
    };

    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <label>Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AuthorForm;

import React from 'react';
import { Router, Link } from '@reach/router';
import AllAuthors from './views/AllAuthors';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';

const Main = () => {
    return (
        <div>
          
            <Link to="/authors">Home</Link>
            <Router>
                <AllAuthors path="/authors" />
                <NewAuthor path="/authors/new" />
                <EditAuthor path="/authors/:id/edit" />
            </Router>
        </div>
    );
}

export default Main;

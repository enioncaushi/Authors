import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/authors" component={Main} />
        <Route exact path="/authors/new" component={NewAuthor} />
        <Route exact path="/authors/:id/edit" component={EditAuthor} />
      </Switch>
    </Router>
  );
}

export default App;

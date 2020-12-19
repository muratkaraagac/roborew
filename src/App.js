import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {
    ProjectDetail, Login, AddProject
} from './pages'


const App = () => (
    <Router>
        <Switch>
            <Route exact path="/add-project">
                <AddProject/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/">
                <ProjectDetail/>
            </Route>
        </Switch>
    </Router>
);

export default App;

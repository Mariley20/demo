import React from 'react';
import { connect } from "redux-zero/react";
import {
    Redirect,
    Route,
    Switch,
    BrowserRouter} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Work} from './Work';
import {Habilities} from './Habilities';
import {Contact} from './Contact';
const App = ({biografy, workObj, selected}) => {
return (
     <div className="container-fluid">
        <BrowserRouter>
            <Switch>
                    <Route path="/" render={() => <Home About={About} Work={Work} workObj={workObj} Habilities={Habilities} Contact={Contact}/>}/>
                    <Route path='/demo' render={() => <Redirect to="/"/>}/>
            </Switch>
        </BrowserRouter>
    </div>
)
}
const mapToProps = ({biografy, workObj, selected}) => ({biografy, workObj, selected});

export default connect(mapToProps)(App);
import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    HashRouter,
    Redirect,
    NavLink,
    Route,
    Switch,
    BrowserRouter} from 'react-router-dom';
// import './styles/App.css';
import {Home, NavBar, ParticlesBackground} from './Home';
import {About} from './About';
import {Work} from './Work';
// import {Habilities} from './Habilities';
import {Contact} from './Contact';
// import {ViewWork} from './ViewWork';
// import {Resume} from './Resume';
const App = ({biografy, work, selected}) => {
return (
     <div className="container-fluid">
        <HashRouter>
            <Switch>
                    <Route path="/home" render={() => <Home  />}/>
                     <Route path="/about" render={() => <About NavBar={NavBar} ParticlesBackground={ParticlesBackground}   />}/>
                    <Route path="/work"  render={() => <Work NavBar={NavBar} ParticlesBackground={ParticlesBackground} work={work}/>}/>
                    {/*<Route path="/viewWork"  render={() => <ViewWork work={work} selected={selected} />}/>
                    <Route path="/habilities"  render={() => <Habilities NavBar={NavBar} Information={Information} />}/>*/}
                    <Route path = "/contact" render = { () => <Contact NavBar={NavBar} ParticlesBackground={ParticlesBackground}/>} /> 
                    <Route path='/demo' render={() => <Redirect to="/home"/>}/>
                    <Route exact path="/" render={() => <Home />}/>
                    {/* <Route path="/resume"  render={() => <Resume biografy={biografy} selected={selected} />}/> */}
            </Switch>
        </HashRouter>
    </div>
)
}
const mapToProps = ({biografy, work, selected}) => ({biografy, work, selected});

export default connect(mapToProps)(App);
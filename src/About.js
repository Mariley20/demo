import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import {NavBar} from './Home';
export const About = ({NavBar, ParticlesBackground}) => {
    return (
        <div className='row'>
            <div className='col-xs-12 col-md-5 col-sm-4 col-lg-4'>
            <ParticlesBackground />
                <NavBar />
            </div>
            <div className='col-xs-12 col-md-7 col-sm-8 col-lg-8'>
            <h2>De mi...</h2>
            </div>
        </div>
    )
}
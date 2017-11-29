import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {NavBar} from './Home';
export const About = () => {
    return (
        <div className='row'>
            <div className='col-sm-4'>
                <NavBar />
            </div>
            <div className='col-sm-8'>
            <h2>De mi...</h2>
            </div>
        </div>
    )
}
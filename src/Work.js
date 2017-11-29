import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import {NavBar} from './Home';
export const Work = ({NavBar, ParticlesBackground}) => {
    return (
        <div className='row about-page'>
            <div className='col-xs-12 col-md-5 col-sm-4 col-lg-4'>
                <ParticlesBackground />
                <p className='title'>My Work...</p>
                <NavBar />
            </div>
            <div className='col-xs-12 col-md-7 col-sm-8 col-lg-8 aboutme row'>
                <Cards />
            </div>
        </div>
    )
}
export const Cards = () => {
    return (
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div class="hovereffect">
        <img class="img-responsive" src="http://placehold.it/350x200" alt=""/>
            <div class="overlay">
                <h2>Effect 11</h2>
				<p>
					<a href="#">LINK HERE</a>
				</p>
            </div>
    </div>          
            </div>
    )
}
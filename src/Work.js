import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import {NavBar} from './Home';
export const Work = ({NavBar, work}) => {
    return (
        <div className='row about-page'>
            <div className='col-xs-12 col-md-5 col-sm-4 col-lg-4'>
                {/* <ParticlesBackground /> */}
                <p className='title'>My Work...</p>
                <NavBar />
            </div>
            <div className='col-xs-12 col-md-7 col-sm-8 col-lg-8 cardwork'>
                <Cards work={work}/>
            </div>
        </div>
    )
}
export const Cards = ({work}) => {
    return (
        <div className='row container-flexbox'>
        {work.map((item, index) => {
        return (<div key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="hovereffect">
        <img className="img-responsive" src={item.img} alt=""/>
            <div className="overlay">
                <h2>Effect 11</h2>
				<p>
					<a href="#">LINK HERE</a>
				</p>
            </div>
    </div>          
            </div>)})}
            </div>
    )
}
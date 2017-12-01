import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './css/App.css';

export const Habilities = ({NavBar, ParticlesBackground}) => {
    return (
        <div className='row about-page'>
            <div className='col-xs-12 col-md-5 col-sm-4 col-lg-4'>
                <ParticlesBackground />
                <p className='title'>Contact me...</p>
                <NavBar />
            </div>
            <div className='col-xs-12 col-md-7 col-sm-8 col-lg-8 aboutme'>
                <Skills />
            </div>
        </div>
    )

}

export const Skills = () => {
    return(<div>
        <h1>Mad Skills</h1>
<ul class="skills">
  <li class="skill" aria-label="advanced">Bow Staff</li>
  <li class="skill" aria-label="novice">Computer Hacking</li>
  <li class="skill" aria-label="pro">Masculinity</li>
  <li class="skill" aria-label="average">Attractiveness</li>
  <li class="skill" aria-label="l33tasuar">Making skills bars with SASS</li>
</ul>
</div>
    )
}
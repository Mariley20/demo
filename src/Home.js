import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Particles from 'react-particles-js'
import {myFunction} from './actions';
import './css/App.css';
import particle from './particlesjs-config.json';
// import {Work} from './Work';
// import {About} from './About';
// import { evaluateAddCard, addCard } from './actions';
export const Home = ({About, Work, work, Habilities, Contact}) => {
    console.log('work', work);
    return (
        <div>
        <div className="home-page text-center">
            {/* <div id="particles-js"></div> */}
            <ParticlesBackground />
                <NavBar />
                <Information/>
        </div>
            <About NavBar={NavBar} ParticlesBackground={ParticlesBackground} />
            <Work NavBar={NavBar} ParticlesBackground={ParticlesBackground} work={work} />
            <Habilities NavBar={NavBar} ParticlesBackground={ParticlesBackground} />
            <Contact NavBar={NavBar} ParticlesBackground={ParticlesBackground} />

        </div>
    )
}
export const ParticlesBackground = () => {
    return (
        <Particles 
                params={particle}
                className='particles-js'
                width={'100%'} />
    )
}
export const Information = () => {
    return (
        <div className='firts_Information'>
            <h3 className='welcome'>Soy</h3>
            <h1 className='title text-rigth'>Mariley Erika</h1>
            <h2 className='title'>Condori Calla</h2>
            <h3 className='welcome'>Gracias por encontrarme</h3>
        </div>
    )
}
export const NavBar = () => {
    return (
        <div className='navbar-menu'>
        <nav className="menu">
  <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
  <label className="menu-open-button" htmlFor="menu-open">
    <span className="hamburger hamburger-1"></span>
    <span className="hamburger hamburger-2"></span>
    <span className="hamburger hamburger-3"></span>
  </label>
  {/* <NavLink></NavLink> */}
  <NavLink to="/home" className="menu-item">
                    
                        <i className="fa fa-home" aria-hidden="true"></i>
                    
                </NavLink>
                <NavLink to="/about" className="menu-item" data-toggle="tooltip" title="Hooray!">
                    
                        <i className="glyphicon glyphicon-user" aria-hidden="true"></i>
                    
                </NavLink>
                <NavLink to="/work" className="menu-item">
                    
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                    
                </NavLink>
                <NavLink to="/habilities" className="menu-item">
                     
                        <i className="fa fa-magic " aria-hidden="true"></i>
                    
                </NavLink>
                <NavLink to="/contact" className="menu-item">
                      
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    
                </NavLink>

</nav>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="shadowed-goo">
          
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
          <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
          <feOffset in="shadow" dx="1" dy="1" result="shadow" />
          <feBlend in2="shadow" in="goo" result="goo" />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
      </filter>
      <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
      </filter>
    </defs>
</svg>
</div>
    )
}
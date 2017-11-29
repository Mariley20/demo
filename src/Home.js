import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Particles from 'react-particles-js'
import {myFunction} from './actions';
import './css/App.css';
import particle from './particlesjs-config.json'
// import { evaluateAddCard, addCard } from './actions';
export const Home = () => {
    return (
        <div className="home-page text-center">
            {/* <div id="particles-js"></div> */}
            <Particles 
                params={particle}
                className='particles-js'
                width={'100%'} />
                <NavBar />
                <Information/>
        </div>
    )
}
export const Information = () => {
    return (
        <div className='firts_Information'>
            <h3 className='welcome text-left'>¡Hola! </h3>
            <h3 className='welcome'>Soy</h3>
            <h1 className='title text-rigth'>Mariley Erika</h1>
            <h2 className='title'>Condori Calla</h2>
            <h3 className='welcome'>Gracias por encontrarme</h3>
        </div>
    )
}
export const NavBar = () => {
    return (
        <div>
        <nav className="menu">
  <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
  <label className="menu-open-button" htmlFor="menu-open">
    <span className="hamburger hamburger-1"></span>
    <span className="hamburger hamburger-2"></span>
    <span className="hamburger hamburger-3"></span>
  </label>
  
  <a href="#" className="menu-item"> <i className="fa fa-bar-chart"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-plus"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-heart"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-envelope"></i> </a>
  <a href="#" className="menu-item"> <i className="fa fa-cog"></i> </a>

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
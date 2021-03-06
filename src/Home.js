import React from 'react';
import './css/App.css';
import AOS from 'aos';

export const Home = ({About, Work, workObj, Habilities, Contact}) => {
    return (
        <div >
        <section id='home'  className="home-page text-center">
                <NavBar />
                <Information/>
                <Icons />
        </section>
            <About NavBar={NavBar}  />
            <Work NavBar={NavBar}  workObj={workObj} />
            <Habilities NavBar={NavBar}  />
            <Contact NavBar={NavBar}  />

        </div>
    )
}
export const Information = () => {
    return (
        <div className='firts_Information'>
            <h1 className='subtitle'>Hola, <br />Soy Mariley</h1>
            <h3 className='welcome'>FrontEnd Developer <br/>Ingeniería de sistemas </h3>
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
        <a href="#" className="menu-item">
            <i className="fa fa-home" aria-hidden="true"></i>
        </a>
        <a href='#about'  className="menu-item" data-toggle="tooltip" title="Hooray!">
            <i className="glyphicon glyphicon-user" aria-hidden="true"></i>
        </a>
        <a href='#work' className="menu-item">
            <i className="fa fa-briefcase" aria-hidden="true"></i>
        </a>
        <a href='#habilities'  className="menu-item">
            <i className="fa fa-magic " aria-hidden="true"></i>
        </a>
        <a  href='#contact' className="menu-item">
            <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>

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
const Icons = () => {
    return (
        <div className='social'>
    <ul className="social-icons">
  <li className="tab">
    <a target='_blank' href="https://github.com/Mariley20">
      <i className="fa fa-github circle"></i>
    </a>
  </li>
  <li className="tab">
    <a target='_blank' href="http://bit.ly/2nMhQvM">
      <i className="fa fa-file-pdf-o circle"></i>
    </a>
  </li>
  <li className="tab">
    <a target='_blank' href="https://www.linkedin.com/in/marileye/">
      <i className="fa fa-linkedin circle"></i>
    </a>
  </li>
</ul></div>)
}
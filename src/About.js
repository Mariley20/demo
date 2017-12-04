import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import {NavBar} from './Home';
export const About = ({NavBar}) => {
    return (
        <section id='about'>
        <div className='row  full-page'>
            <div className='col-xs-12 col-md-5 col-sm-4 col-lg-4 background-white'>
                <p className='title'>About me...</p>
                {/* <NavBar /> */}
            </div>
            <div className='col-xs-12 col-md-7 col-sm-8 col-lg-8 aboutme'>
            <p className='subtitle'>
                Soy Desarrolladora FronEnd Jr, e Ingenieria de Sistemas.
            </p>
            <p className='paragraph' >
                Me apasiona lo digital y tecnológico en todas sus formas, conjuro mis habilidades 
                de programar y creatividad para crear sitios web limpios, profesionales y funcionales
                de calidad que sean escalables y accesibles.
            </p>
            <p className='paragraph'>     
                Soy especialista en la integración de tecnologías web como HTML, CSS, JavaScript, 
                React Redux, diferentes API’s, frameworks y librerias etc.
                Enfocada en el desarrollo de single-page application, Responsive Web Design y 
                UX (user experience), estoy constantemente aprendiendo tecnologías web y otros 
                temas relacionados con tecnologías BackEnd y DataBase.
            </p>
            <p className='paragraph'>
                Me agrada el trabajo en equipo con la metodología ágil, como individualmente, manteniendo la calma 
                ante situaciones bajo presión y manejo del estrés.
            </p>
            </div>
        </div>
        </section>
    )
}
import React from 'react';
import AOS from 'aos';
import { Accordion, Panel } from "react-bootstrap";

export const About = ({NavBar}) => {
    AOS.init();
    return (
        <section data-aos="fade-down-left" id='about'>
        <div className='row match-my-cols full-page'>
            <div className='col-xs-12 col-md-5 col-sm-12 col-lg-4 background-white'>
                <p className='title'>Sobre mi...</p>
                {/* <NavBar /> */}
            </div>
            <div className='col-xs-12 col-md-7 col-sm-12 col-lg-8 aboutme'>
            <p className='subtitle'>
                Soy Desarrolladora FronEnd Jr, e Ingenieria de Sistemas.
            </p>
                <Collapses />
                <div className='flex-box'>
                <img className='img-responsive' src='img/me1.jpg'/>
                <img className='img-responsive' src='img/me2.jpg'/>
                <img className='img-responsive' src='img/me3.png'/>
                </div>
            </div>
        </div>
        </section>
    )
}
const Collapses = () => {
    return (
        <Accordion defaultActiveKey="1" className='paragraph'>
    <Panel header="Soy Mariley" eventKey="1" expanded >
                Me apasiona lo digital y tecnológico en todas sus formas, conjuro mis habilidades 
                de programar y creatividad para crear sitios web, profesionales, funcionales y accesibles.
            <br/>
                Me agrada el trabajo en equipo, asi mismo trabajar individualmente es todo un reto, manteniendo la calma 
                ante situaciones bajo presión y manejo del estrés.
            
    </Panel>
    <Panel header="Mis Reconocimientos" eventKey="2">
            <div className='row'>
                <div className='col-sm-4 text-center'>
                    <p>Las 5 Mejores</p>
                    <img src='img/top_5.png' />
                </div>
                <div className='col-sm-4 text-center'>
                    <p>La mejor Compañera</p>
                    <img src='img/team-player.png' />
                </div>
                <div className='col-sm-4 text-center'>
                    <p>Trabajo en Equipo</p>
                    <img src='img/best_squad.png' />
                </div>
            </div>
    </Panel>
    <Panel header="Mis Interesés" eventKey="3">
      <div className='flex-box'>
          <div className='text-center'>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-code fa-stack-1x fa-inverse"></i>
            </span><br />
            Codigo
          </div>
          <div className='text-center'>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-plane fa-stack-1x fa-inverse"></i>
            </span><br />
            Viajar
          </div>
          <div className='text-center'>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
            </span><br />
            Viajar
          </div>
          <div className='text-center'>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-gamepad fa-stack-1x fa-inverse"></i>
            </span><br />
            videojuegos
          </div>
      </div>
    </Panel>
  </Accordion>
    )
}
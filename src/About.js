import React from 'react';
import AOS from 'aos';
import { Accordion, Panel } from "react-bootstrap";
import { Collapse } from './C:/Users/Mariley/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-bootstrap/lib/Navbar';

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
                <Collapse />
            </div>
        </div>
        </section>
    )
}
const Collapse = () => {
    return (
        <Accordion>
    <Panel header="Collapsible Group Item #1" eventKey="1">
        <p className='paragraph' >
                Me apasiona lo digital y tecnológico en todas sus formas, conjuro mis habilidades 
                de programar y creatividad para crear sitios web, profesionales, funcionales y accesibles.
            </p>
            <p className='paragraph'>
                Me agrada el trabajo en equipo, asi mismo trabajar individualmente es todo un reto, manteniendo la calma 
                ante situaciones bajo presión y manejo del estrés.
            </p>
    </Panel>
    <Panel header="Collapsible Group Item #2" eventKey="2">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
    <Panel header="Collapsible Group Item #3" eventKey="3">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    </Panel>
  </Accordion>
    )
}
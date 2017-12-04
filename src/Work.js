import React from 'react';
import {Carousel} from 'react-bootstrap';
export const Work = ({NavBar, workObj}) => {
    return (
        <section id='work'>
        <div className='row match-my-cols full-page '>
            <div className='col-xs-12 col-md-5 col-sm-4 col-lg-4 background-blue' >
                    <p className='title'>Mis Proyectos</p>
            </div>
            <div className = 'col-xs-12 col-md-7 col-sm-8 col-lg-8 cardwork' >
                <Cards workObj={workObj}/>
            </div>
        </div>
        </section>
    )
}

const Cards = ({workObj}) => {
    return (
        <Carousel>
            {
                workObj.map((item, index) => {
                index = index++;
                return (
                    <Carousel.Item key={index}>
                        <div className="hovereffect">
                            <img className="img-responsive" src={item.img} alt=""/>
                            <div className="overlay">
                                <h2>Effect 11</h2>
                                <p>
                                    <a href="#">LINK HERE</a>
                                </p>
                            </div>
                        </div>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}
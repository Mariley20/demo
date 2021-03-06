import React from 'react';
import {Carousel} from 'react-bootstrap';
export const Work = ({NavBar, workObj}) => {
    return (
        <section id='work'>
        <div className='row match-my-cols full-page '>
            <div className='col-xs-12 col-md-5 col-sm-12 col-lg-4 background-blue' >
                    <p className='title'>Mis Proyectos</p>
            </div>
            <div className = 'col-xs-12 col-md-7 col-sm-12 col-lg-8 cardwork' >
                <Cards2 workObj={workObj}/>
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
const Cards2 = ({workObj}) => {
      return (
          <div className='row container-flexbox'>
         {workObj.map((item, index) => {
         return (<div key={index} className="col-xs-12 col-sm-4 col-md-6 col-lg-4">
                     <div className="hovereffect">
         <img className="img-responsive" src={item.img} alt=""/>
            <div className="overlay">
                <h2>{item.name}</h2>
 				<p>
 					<a  className='btn btn-primary' target='_blank' href={item.website}>Demo</a>
                     <a className='btn btn-success'  target='_blank' href={item.github}>Github</a>
 				</p>
            </div>
    </div>          
            </div>)})}
            </div>
      )}
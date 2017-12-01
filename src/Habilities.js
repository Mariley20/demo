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
            <div className='col-xs-12 col-md-7 col-sm-8 col-lg-8 '>
                <Skills />
            </div>
        </div>
    )

}

export const Skills = () => {
    return(
                <center>
<div id="SkillBox">
        <img src="/URL gambar" alt="Skill Bar Progress" />
  <div className="SkillBar">
    <div id="Skill-HTML">
      <span className="Skill-Area ">HTML</span>
    </div>
  </div>
   
  <div className="SkillBar">
    <div id="Skill-CSS">
      <span className="Skill-Area ">CSS/CSS3</span>
    </div>
  </div>
 
  <div className="SkillBar">
    <div id="Skill-jQuery">
      <span className="Skill-Area ">jQuery</span>
    </div>
  </div>
   
  <div className="SkillBar">
    <div id="Skill-JS">
      <span className="Skill-Area ">Javascript</span>
    </div>
  </div>
    
    <div className="SkillBar">
    <div id="Skill-JAVA">
      <span className="Skill-Area ">Firebase </span>
    </div>
  </div>
   
    <div className="SkillBar">
    <div id="Skill-PHP">
      <span className="Skill-Area ">ReactJS </span>
    </div>
  </div>
    
</div>
</center> 
    )
}
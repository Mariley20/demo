import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './css/App.css';

export const Habilities = ({NavBar}) => {
    return (
      <section id='habilities'>
        <div  className='row match-my-cols full-page'>
            <div className='col-xs-12 col-md-5 col-sm-4 col-lg-4 background-white'>
                <p className='title'>Mis Habilidades</p>
            </div>
            <div className='col-xs-12 col-md-7 col-sm-8 col-lg-8 '>
                <Skills />
            </div>
        </div>
        </section>
    )

}

export const Skills = () => {
    return(
                <center>
<div id="SkillBox">
  <div className="SkillBar">
    <div id="Skill-HTML">
      <span className="Skill-Area ">HTML</span>
    </div>
  </div>
   <div className="SkillBar">
    <div id="Skill-JS">
      <span className="Skill-Area ">Javascript</span>
    </div>
  </div>
  <div className="SkillBar">
    <div id="Skill-CSS">
      <span className="Skill-Area ">CSS SASS</span>
    </div>
  </div>
  <div className="SkillBar">
    <div id="Skill-jQuery">
      <span className="Skill-Area ">jQuery</span>
    </div>
  </div>
  <div className='SkillBar'>
  <div id="Skill-Reactjs">
    <span className="Skill-Area ">ReactJS Router</span>
  </div>
  </div>
  <div className='SkillBar'>
  <div id="Skill-Reactjs">
    <span className="Skill-Area ">Redux</span>
  </div>
  </div>
  <div className="SkillBar">
    <div id="Skill-Firebase">
      <span className="Skill-Area ">Firebase </span>
    </div>
  </div> 
</div>
</center> 
    )
}
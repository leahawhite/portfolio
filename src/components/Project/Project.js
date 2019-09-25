import React from 'react';
import './Project.css';

export default function Project(props) {
  return (
    <article className="project">
      <div className="image">
        <img 
          src={props.imageSrc}
          alt={props.imageAlt}>
        </img>
      </div>
      <div className="content">
        <h2>{props.projectTitle}</h2>
        <h3>{props.projectSubtitle}</h3>
        <hr></hr>
        <p>{props.projectDesc}</p>
        <div className="project-link-container">
          <a target="_blank" rel="noopener noreferrer" href={props.ghLink1}>GitHub </a>|
          <a target="_blank" rel="noopener noreferrer" href={props.demoLink}> Demo</a>
        </div>
      </div>
    </article>           
  )
}
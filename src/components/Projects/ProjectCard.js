import React from "react";
import "./ProjectCard.scss";
import { Launch, GitHub } from "@material-ui/icons";

export default function Projects(props) {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {props.projects.map((project) => {
          return (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.alt}></img>
              <h3>{project.title}</h3>
              <div className="button-wrapper">
                <a href={project.repo} target="_blank">
                  <GitHub className="github-icon" />
                </a>
                <a href={project.demo} target="_blank">
                  <Launch className="launch-icon" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

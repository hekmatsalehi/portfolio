import React from "react";
import {
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb, SiJquery } from "react-icons/si";
import { CgChevronDoubleUpO } from "react-icons/cg";
import MyResume from '../../images/HekmatullahSalehi_Resume.pdf';
import "./Resume.scss";

export default function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="resume-container">
        <h2>My Skills</h2>
        <div className="skill-icons">
          <FaHtml5 className="icon" id="html-icon" />
          <FaCss3Alt className="icon" id="css-icon" />
          <FaBootstrap className="icon" id="bootstrap-icon" />
          <SiJavascript className="icon" id="javascript-icon" />
          <SiJquery className="icon" id="jquery-icon" />
          <FaReact className="icon" id="react-icon" />
          <FaNode className="icon" id="node-icon" />
          <SiMysql className="icon" id="mysql-icon" />
          <SiMongodb className="icon" id="mongodb-icon" />
        </div>
        <a href={MyResume} download>
          <button className="download-btn">Download My Resume</button>
        </a>
        <a href="#about-me" className="anchor-arrow-up">
          <CgChevronDoubleUpO className="arrow-up-icon" />
        </a>
      </div>
    </div>
  );
}

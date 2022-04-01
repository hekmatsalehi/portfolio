import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import { KeyboardArrowDown } from "@material-ui/icons";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import "./About.scss";
import MyPicture from '../../images/MyPicture.png'

export default function About() {
  const roleRef = useRef();

  useEffect(() => {
    init(roleRef.current, {
      showCursor: false,
      strings: ["Full Stack Developer"],
    });
  }, []);

  return (
    <div className="about-me" id="about-me">
      <div className="left-side">
        <div className="photo-container">
          <img src={MyPicture} id="photo"></img>
        </div>
      </div>

      <div className="right-side">
        <div className="right-side-wrapper">
          <h2>Hi, I am</h2>
          <h1>Hekmatullah Salehi</h1>
          <h3>
            Aspiring <span ref={roleRef}></span>
          </h3>
          <p>
            Acquired skills in HTML, CSS, JavaScript, Node.js, Express.js,
            React, MySQL, MongoDB, and Git Workflow. Problem-solving ability,
            fast learner, detail-oriented with the ability to work in stressful
            situations. Passionate to develop real-world projects from
            conception.
          </p>
        </div>
        <a href="#projects">
          <BsFillArrowDownCircleFill className="arrow-down-icon" />
        </a>
      </div>
    </div>
  );
}

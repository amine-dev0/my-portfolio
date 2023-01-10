import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
              Welcome to my portfolio! My name is Mohamed Amine Elghazoui, and I'm currently a student 
              studying Computer Science. I'm passionate about front-end development 
              and have experience building dynamic, user-friendly web applications using React and Angular. My goal is to become a professional front-end
               developer and use my skills to create innovative and engaging user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

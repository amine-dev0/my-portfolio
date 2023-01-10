import React, { useState } from "react";
import "./Nav.css";
import Home from "../assets/img/home.png";
import About from "../assets/img/about.png";
import Contact from "../assets/img/contact.png";
import Education from "../assets/img/education.png";
import Services from "../assets/img/services.png";
import Jsprojects from "../assets/img/jsprojects.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div id="navigation">
        <ul>
          <Link to="/myportfolio">
            <li data-aos="zoom-in">
              <img src={Home} alt="home" />
            </li>
          </Link>
          <Link to="/about">
            <li data-aos="zoom-in">
              <img src={About} alt="about" />
            </li>
          </Link>
          <a href="services">
            <li data-aos="zoom-in">
              <img src={Services} alt="services" />
            
            </li>
          </a>
          <Link to="/education">
            <li data-aos="zoom-in">
              <img src={Education} alt="education" />
            </li>
          </Link>
          <Link to="/projects">
            <li data-aos="zoom-in">
              <img src={Jsprojects} alt="jsprojects" />
            </li>
          </Link>
          
          <Link to="/contact">
            <li data-aos="zoom-in">
              <img src={Contact} alt="contact" />
            </li>
          </Link>
        </ul>
      </div>

      <div id="navigation-mob">
        <h1 data-aos="fade-in">
          <Link to="/myportfolio">Amine</Link>
        </h1>
        <i
          data-aos="fade-in"
          className={visible ? "fa fa-close" : "fa fa-bars"}
          onClick={() => setVisible(!visible)}
        ></i>
        {visible ? (
          <ul
            className="list-unstyled"
            data-aos="slide-down"
            data-aos-duration="700"
          >
            <a href="myportfolio">
            <button
                data-aos="fade-up"
                type="submit"
                className="btn btn-primary"
              >
                Home
              </button>
            </a>
            <a href="about">
            <button
                data-aos="fade-up"
                type="submit"
                className="btn btn-primary"
              >
                About me
              </button>
            </a>
            <a href="services">
              <button
                data-aos="fade-up"
                type="submit"
                className="btn btn-primary"
              >
                SKILLS
              </button>
            </a>
            <a href="education">
            <button
                data-aos="fade-up"
                type="submit"
                className="btn btn-primary"
              >
                Education
              </button>
            </a>
            <a href="projects">
            <button
                data-aos="fade-up"
                type="submit"
                className="btn btn-primary"
              >
                Projects
              </button>
            </a>
            
            <a href="contact">
            <button
                data-aos="fade-up"
                type="submit"
                className="btn btn-primary"
              >
                Contact
              </button>
            </a>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;

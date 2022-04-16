import React from "react";
import "./About.css";
import ME from "../../assets/profile-1.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="About Imge" />
          </div>
        </div>
        <div className="about_conent">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experince</h5>
              <small> 200+ Wordwide </small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Experince</h5>
              <small> 80+ completed </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Experince</h5>
              <small> 3+ Working </small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
            delectus, eveniet debitis similique ullam laudantium tempore quaerat
            vero sint, nulla distinctio consequatur quae atque impedit
            dignissimos minima porro? Inventore, aliquam.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;

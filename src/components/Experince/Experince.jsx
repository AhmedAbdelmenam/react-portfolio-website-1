import React from "react";
import "./Experince.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experince = () => {
  return (
    <section id="experince">
      <h5>What Skils I Have</h5>
      <h2>My Experines</h2>
      <div className="container experiance_container">
        <div className="experiance_frontend">
          <h3>Frontend Developer</h3>
          <div className="experiance_content">
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>HTML</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>CSS</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>Tailwind</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>React</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiance_backend">
          <h3>Backend Developer</h3>
          <div className="experiance_content">
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>Node Js</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>PHP</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
            <article className="experiance_details">
              <BsPatchCheckFill className="experiance_details_icons" />
              <div>
                <h4>Python</h4>
                <small className="text_light ">Experines</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experince;

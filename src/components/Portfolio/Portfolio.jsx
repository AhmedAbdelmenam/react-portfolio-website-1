import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/1 port.png";
import IMG2 from "../../assets/2 port.png";
import IMG3 from "../../assets/3 port.png";
import IMG4 from "../../assets/4 port.png";
import IMG5 from "../../assets/5 port.png";
import IMG6 from "../../assets/6 port.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "This is a Portfolio Items Tittle",
    github: "https://github.com",
    demo: "https://dribbble.com/abdelmenam"
  },
  {
    id: 2,
    image: IMG2,
    title: "This is a Portfolio Items Tittle",
    github: "https://github.com",
    demo: "https://dribbble.com/abdelmenam"
  },
  {
    id: 3,
    image: IMG3,
    title: "This is a Portfolio Items Tittle",
    github: "https://github.com",
    demo: "https://dribbble.com/abdelmenam"
  },
  {
    id: 4,
    image: IMG4,
    title: "This is a Portfolio Items Tittle",
    github: "https://github.com",
    demo: "https://dribbble.com/abdelmenam"
  },
  {
    id: 5,
    image: IMG5,
    title: "This is a Portfolio Items Tittle",
    github: "https://github.com",
    demo: "https://dribbble.com/abdelmenam"
  },
  {
    id: 6,
    image: IMG6,
    title: "This is a Portfolio Items Tittle",
    github: "https://github.com",
    demo: "https://dribbble.com/abdelmenam"
  }
];

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5> My Recent Work </h5>
      <h2>Portfolio</h2>
      <div className="container Portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="Portfolio_items">
              <div className="Portfolio_items_imgs">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="Portfolio_items_cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";


// about to parse the json data
const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, odio.",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3863142/file/original-c9b1364e699332422ef5d41d47220b27.png?compress=1&resize=1504x1128",
  },
  {
    id: 2,
    image: IMG2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, odio.",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3863142/file/original-c9b1364e699332422ef5d41d47220b27.png?compress=1&resize=1504x1128",
  },
  {
    id: 3,
    image: IMG3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, odio.",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3863142/file/original-c9b1364e699332422ef5d41d47220b27.png?compress=1&resize=1504x1128",
  },
  {
    id: 4,
    image: IMG4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, odio.",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3863142/file/original-c9b1364e699332422ef5d41d47220b27.png?compress=1&resize=1504x1128",
  },
  {
    id: 5,
    image: IMG5,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, odio.",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3863142/file/original-c9b1364e699332422ef5d41d47220b27.png?compress=1&resize=1504x1128",
  },
  {
    id: 6,
    image: IMG6,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, odio.",
    github: "https://github.com",
    demo: "https://cdn.dribbble.com/userupload/3863142/file/original-c9b1364e699332422ef5d41d47220b27.png?compress=1&resize=1504x1128",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {}
      </div>
    </section>
  );
};

export default Portfolio;

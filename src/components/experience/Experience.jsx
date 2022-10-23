import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Tailwind</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Kotlin</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Go</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Postgress</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Mongo DB</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Node.js</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

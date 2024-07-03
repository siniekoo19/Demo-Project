/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/working-woman.jpg";

const imageAltText = "Woman with laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Male Female Voice Identification App",
    description:
      "A male-female voice identification system using deep learning.",
    url: "https://github.com/siniekoo19/Male-Female-Voice-Identification",
  },
  {
    title: "Movie Recommendation System",
    description:
      "A Recommendation System web application utilizing Cosine Similarity and Streamlit library.",
    url: "https://github.com/siniekoo19/Movie-Recommandation-System",
  },
  {
    title: "Digital Resume",
    description:
      "A digital Resume, deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://siniekoo19.github.io/Digital-Resume-Using-HTML-CSS-BOOSTRAP/",
  },
  {
    title: "Currency Converter",
    description:
      "A dynamic Currency Converter application with HTML, CSS, and JavaScript, leveraging an external API to facilitate real-time currency conversions between countries.",
    url: "https://siniekoo19.github.io/Currency-Converter/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

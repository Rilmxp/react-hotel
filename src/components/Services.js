import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info: "Cocktail ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod nostrum est minus velit",
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info: "Hiking ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod nostrum est minus velit.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Shuttle ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod nostrum est minus velit.",
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info: "Beer ipsum dolor sit amet consectetur adipisicing elit. Repellendus quod nostrum est minus velit.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

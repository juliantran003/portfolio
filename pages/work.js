// Packages
import { useState } from "react";
import Image from "next/image";

// Info
import work from "../public/json/work.json";

export default function Work() {
  // States
  const [selected, setSelected] = useState("itrsq");

  //   Index calc function
  const findPlacement = (index) => {
    if (index % 2 === 0) {
      return "left";
    } else {
      return "right";
    }
  };

  return (
    <section className="work">
      <h1 className="section-header" data-aos="fade-down">
        Work <span>( from Newest to Oldest )</span>
      </h1>
      <section className="work__list">
        {work.map((work, index) => {
          return (
            <div
              className={`work__project__${findPlacement(index)}`}
              key="work.title"
              data-aos="fade"
            >
              <div className={`work__img__${findPlacement(index)}`}>
                <a href={work.link} target="_blank" rel="noreferrer">
                  <Image
                    src={work.image}
                    alt={work.image}
                    height={work.height}
                    width={work.width}
                    layout="responsive"
                  />
                </a>
              </div>
              <h2 data-aos={`fade-${findPlacement(index)}`} data-aos-delay={0}>
                {work.title}
              </h2>
              <h3
                className="section-info"
                data-aos={`fade-${findPlacement(index)}`}
                data-aos-delay={30}
              >
                {work.role}
              </h3>
              <p data-aos={`fade-${findPlacement(index)}`} data-aos-delay={50}>
                {work.description}
              </p>
              <h3
                className="section-info"
                data-aos={`fade-${findPlacement(index)}`}
                data-aos-delay={100}
              >
                {work.skills}
              </h3>
              <div
                className="work__project__buttons"
                data-aos={`fade-${findPlacement(index)}`}
                data-aos-delay={150}
              >
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-classic"
                >
                  View
                </a>
                <a
                  href={work.repo}
                  className="btn-classic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          );
        })}
      </section>
      <section className="work__more">
        <h1>Want to see more projects ?</h1>
        <a
          href="https://github.com/juliantran003"
          target="_blank"
          rel="noreferrer"
          className="btn-classic"
        >
          See more repos <i className="fa-brands fa-github"></i>
        </a>
      </section>
    </section>
  );
}

// Pafckages
import { useState } from "react";
// Info
import experience from "../public/json/experience.json";

export default function Experience() {
  // States
  const [selected, setSelected] = useState("itrsq");

  return (
    <section className="experience">
      <h1 className="section-header" data-aos="fade-down">
        Experience
      </h1>
      <div className="experience__container">
        <ul className="experience__selector" data-aos="fade-right">
          {experience.map((experience) => {
            return (
              <li
                key={experience.selected}
                onClick={() => setSelected(experience.selected)}
                className={
                  selected === experience.selected && "experience__selected"
                }
              >
                {experience.company}
              </li>
            );
          })}
        </ul>

        <div className="experience__description" data-aos="fade-left">
          {experience.map((experience) => {
            return (
              selected === experience.selected && (
                <>
                  <h1 className="section-sub-header" data-aos="fade-up">
                    {experience.company}
                  </h1>
                  <h2
                    className="section-info "
                    data-aos="fade-up"
                    data-aos-delay={50}
                  >
                    {experience.duration}
                  </h2>
                  <h2
                    className="section-info"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    {experience.role}
                  </h2>
                  <p
                    className="section-body"
                    data-aos="fade-up"
                    data-aos-delay={150}
                  >
                    {experience.description}
                  </p>
                  <h3
                    className="section-info"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    {experience.skills}
                  </h3>
                  <a
                    className="btn-classic"
                    href={experience.link}
                    target="_blank"
                    data-aos="fade-up"
                    data-aos-delay={400}
                    rel="noreferrer"
                    d
                  >
                    {experience.linkName}
                  </a>
                </>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}

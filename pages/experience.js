import { useState } from "react";
import experience from "../json/experience.json";

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
          <li
            className="experience__selected"
            onClick={() => setSelected("itrsq")}
          >
            ITRSQ
          </li>
          <li onClick={() => setSelected("summit")}>Summit</li>
          <li onClick={() => setSelected("lereacteur")}>Le Réacteur</li>
          <li onClick={() => setSelected("selfpractice")}>Self-Practice</li>
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
                    className="section-info"
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
                </>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}

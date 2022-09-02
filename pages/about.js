import Image from "next/image";
import profile from "../public/images/profile.jpeg";
import Link from "next/link";

// Logos
import react from "../public/images/logos/react.png";
import nextjs from "../public/images/logos/nextjs.png";
import nodejs from "../public/images/logos/nodejs.png";
import javascript from "../public/images/logos/javascript.png";
import html from "../public/images/logos/html.png";
import css from "../public/images/logos/css.png";

export default function About() {
  // Function to find current Age
  function getAge() {
    var today = new Date();
    var birthDate = new Date("October 22, 1997");
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <section className="about">
      <div className="about__description">
        <h1 className="section-header" data-aos="fade-down">
          About
        </h1>
        <span></span>
        <p className="section-body" data-aos="fade-up" data-aos-delay={100}>
          My name is <span>Julian Tran</span>. I am a {getAge()} year-old{" "}
          <span>Full Stack Javascript developer</span>.<br />
          My Web Developer journey began in March 2021 when I attended the
          3-month intensive bootcamp training at <span>Le Réacteur</span> in
          France. <br />
          <br />
          At the core of my decision, stood the ideal of working more
          independently in an exciting field from any place in the world, to fit
          both my ambitions and my other passion: writing music. <br />
          <br />
          Shortly after graduating from my training, I joined a small team in a
          company called <span>ITRSQ </span> where I had the opportunity to
          further hone and expand my skills as a for the last year (building
          websites and servers from scratch).
          <br />
          {/* <br />I am now looking for my next opportunity, preferably as{" "}
          <span>Freelance</span>, to see where my journey takes me. */}
        </p>
        <Link href="/about" passHref>
          <button
            className="btn-classic"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            {" "}
            Contact Me
          </button>
        </Link>
      </div>
      <div className="about__visuals">
        <div className="about__picture__container" data-aos="zoom-in">
          <Image
            src={profile}
            alt="A picture of myself"
            width={1340}
            height={1368}
            layout="responsive"
            className="about__picture"
          />
        </div>
        <div>
          <h1 data-aos="zoom-in" data-aos-delay={100}>
            Here is my tech stack :{" "}
          </h1>
          <div className="about__stack">
            <div className="about__stack__icon__container">
              <Image
                src={react}
                alt={react}
                width={1200}
                height={1043}
                layout="responsive"
                className="about__stack__icon"
                data-aos="zoom-in"
              />
            </div>
            <div className="about__stack__icon__container">
              <Image
                src={nextjs}
                alt={nextjs}
                width={300}
                height={300}
                layout="responsive"
                className="about__stack__icon"
                data-aos="zoom-in"
                data-aos-delay={100}
              />
            </div>
            <div className="about__stack__icon__container">
              <Image
                src={nodejs}
                alt={nodejs}
                width={600}
                height={600}
                layout="responsive"
                className="about__stack__icon"
                data-aos="zoom-in"
                data-aos-delay={200}
              />
            </div>
            <div className="about__stack__icon__container">
              <Image
                src={javascript}
                alt={javascript}
                width={1024}
                height={1024}
                layout="responsive"
                className="about__stack__icon"
                data-aos="zoom-in"
                data-aos-delay={300}
              />
            </div>
            <div className="about__stack__icon__container">
              <Image
                src={html}
                alt={html}
                width={512}
                height={512}
                layout="responsive"
                className="about__stack__icon"
                data-aos="zoom-in"
                data-aos-delay={400}
              />
            </div>
            <div className="about__stack__icon__container">
              <Image
                src={css}
                alt={react}
                width={1200}
                height={1361}
                layout="responsive"
                className="about__stack__icon"
                data-aos="zoom-in"
                data-aos-delay={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

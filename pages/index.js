import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <section className="home">
      <Head>
        <title>Julian Tran - Home</title>
      </Head>
      <div className="home__hello">
        <h1 data-aos="fade-up">Hi ! My name is</h1>
        <h2 data-aos="fade-up" data-aos-delay={100}>
          Julian Tran.
        </h2>
        <h3 data-aos="fade-up" data-aos-delay={200}>
          Full Stack JavaScript Developer.
        </h3>
        <p data-aos="fade-up" data-aos-delay={300}>
          I build modern websites using <span>React</span> and custom servers
          with <span>Node.js</span>.
          {/* <br /> I prefer to work freelance but am always open to new
          opportunities. */}
        </p>
        <Link href="/contact" passHref>
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
    </section>
  );
}

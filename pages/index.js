import Link from "next/link";

export default function Home() {
  return (
    <section className="home">
      <div className="home__hello">
        <h1>Hi ! My name is</h1>
        <h2>Julian Tran.</h2>
        <h3>Full Stack JavaScript Developer.</h3>
        <p>
          I build modern websites using <span>React</span> and custom servers
          with <span>Node.js</span>.
          <br /> I prefer to work freelance but am always open to new
          opportunities.
        </p>
        <Link href="/about" passHref>
          <button className="btn-classic"> Contact Me</button>
        </Link>
      </div>
    </section>
  );
}

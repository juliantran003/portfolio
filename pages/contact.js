// Packages
import { useState } from "react";

export default function Contact() {
  // States
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [email, setEmail] = useState();
  return (
    <section className="contact">
      {/* <h1 className="section-header">Contact </h1>
      <section className="contact__details">
        <h2>
          Email :{" "}
          <a href="mailto:juliantran003@gmail.com">juliantran003@gmail.com</a>
        </h2>
        <h2>
          Phone : <a href="tel:+447821197231">+447821197231</a>
        </h2>
      </section> */}
      <h1 className="section-header" data-aos="fade-down">
        Contact Form{" "}
      </h1>
      <form action="" className="contact__form">
        <div className="contact__user">
          <label htmlFor="email" data-aos="fade-right" data-aos-delay={0}>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              tabIndex="1"
            />
          </label>
          <label htmlFor="name" data-aos="fade-right" data-aos-delay={50}>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              tabIndex="2"
            />
          </label>
          <label htmlFor="subject" data-aos="fade-right" data-aos-delay={100}>
            Subject
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              tabIndex="3"
            />
          </label>
        </div>
        <div className="contact__message">
          {" "}
          <label htmlFor="message" data-aos="fade-left" data-aos-delay={50}>
            Your Message
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              tabIndex="4"
            />
          </label>
        </div>
      </form>
      <button
        className="contact__btn"
        tabIndex="5"
        data-aos="fade-up"
        data-aos-delay={100}
      >
        Send
      </button>
    </section>
  );
}

import "../styles/global.css";
import "../styles/reset.css";
import Layout from "../components/layout.js";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Scroll Animation function usin AOS package
    Aos.init({ duration: 800 });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

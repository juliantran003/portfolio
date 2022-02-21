import "../styles/global.css";
import "../styles/reset.css";
import Layout from "../components/layout.js";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

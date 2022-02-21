import Head from "next/head";

// Components
import Header from "./header";
import Socials from "./socials";
import Email from "./email";
import BurgerMenu from "./burgerMenu";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/fe9e3b2e41.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Header />
      <Socials />
      <BurgerMenu />
      <Email />
      <main>{children}</main>
    </>
  );
}

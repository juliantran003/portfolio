import Script from "next/script";
import Head from "next/head";

// Components
import Header from "./header";
import Socials from "./socials";
import Email from "./email";
import BurgerMenu from "./burgerMenu";

// Favicon
import icon from "../public/favicon.ico";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#02183a" />

        <meta name="msapplication-TileColor" content="#02183a" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/fe9e3b2e41.js"
        crossOrigin="anonymous"
      />

      <Header />
      <Socials />
      <BurgerMenu />
      <Email />
      <main>{children}</main>
    </>
  );
}

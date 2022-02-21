import Script from "next/script";

// Components
import Header from "./header";
import Socials from "./socials";
import Email from "./email";
import BurgerMenu from "./burgerMenu";

export default function Layout({ children }) {
  return (
    <>
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

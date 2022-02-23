import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu() {
  // States
  const [burger, setBurger] = useState(false);

  return (
    <>
      {!burger && (
        <nav className="burgerMenu">
          <i className="fa-solid fa-bars" onClick={() => setBurger(true)}></i>
        </nav>
      )}
      <nav
        className={!burger ? "burgerMenu__menu__hidden" : "burgerMenu__menu"}
      >
        {burger && (
          <i
            className="fa-solid fa-xmark burgerMenu__x"
            onClick={() => setBurger(false)}
          ></i>
        )}
        <Link href="/">
          <a href="#" onClick={() => setBurger(false)}>
            home
          </a>
        </Link>
        <Link href="/about">
          <a href="#" onClick={() => setBurger(false)}>
            about
          </a>
        </Link>
        <Link href="/experience">
          <a href="#" onClick={() => setBurger(false)}>
            experience
          </a>
        </Link>
        <Link href="/work">
          <a href="#" onClick={() => setBurger(false)}>
            work
          </a>
        </Link>
        <Link href="/contact">
          <a href="#" onClick={() => setBurger(false)}>
            contact
          </a>
        </Link>
      </nav>
    </>
  );
}

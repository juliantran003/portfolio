import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu() {
  // States
  const [burger, setBurger] = useState(true);

  return (
    <>
      {burger && (
        <nav className="burgerMenu">
          <i class="fa-solid fa-bars" onClick={() => setBurger(false)}></i>
        </nav>
      )}
      <nav className={burger ? "burgerMenu__menu__hidden" : "burgerMenu__menu"}>
        {!burger && (
          <i
            class="fa-solid fa-xmark burgerMenu__x"
            onClick={() => setBurger(true)}
          ></i>
        )}
        <Link href="/about">about</Link>
        <Link href="/experience">experience</Link>
        <Link href="/work">work</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </>
  );
}

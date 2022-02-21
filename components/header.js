import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">Julian Tran</Link>
      <nav className="header__menu">
        <Link href="/about">about</Link>
        <Link href="/experience">experience</Link>
        <Link href="/work">work</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}

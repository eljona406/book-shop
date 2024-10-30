// src/components/Header.tsx
import Link from "next/link";

const Header = () => (
  <header>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/books">Books</Link>
      <Link href="/about">About</Link>
    </nav>
  </header>
);

export default Header;

// components/Navbar.tsx
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav
      className="max-w-4xl mx-auto flex flex-wrap gap-4 items-center"
      aria-label="Main navigation"
    >
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/components">Components</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/playground">Playground</Link>
      <ThemeToggle />
    </nav>
  );
}

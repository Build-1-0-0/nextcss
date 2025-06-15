// components/Layout.tsx
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="p-4 shadow bg-gray-100 dark:bg-gray-800">
        <nav className="max-w-4xl mx-auto flex flex-wrap gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/components">Components</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/playground">Playground</Link>
          <ThemeToggle />
        </nav>
      </header>
      <main className="p-4 max-w-5xl mx-auto">{children}</main>
    </>
  );
}

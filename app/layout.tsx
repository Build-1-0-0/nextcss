// File: app/layout.tsx
import ThemeToggle from '@/components/ThemeToggle'; 
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <header className="p-4 shadow bg-gray-100 dark:bg-gray-800">
          <nav className="max-w-4xl mx-auto flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/components">Components</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/playground">Playground</Link>
            <ThemeToggle />
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

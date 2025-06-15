import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import './globals.css'; // Make sure global styles and Tailwind are applied

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <header className="p-4 shadow bg-gray-100 dark:bg-gray-800">
          <nav className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4">
              <Link href="/">Home</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/components">Components</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/playground">Playground</Link>
            </div>
            <ThemeToggle />
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
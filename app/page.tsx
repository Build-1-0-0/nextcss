// File: app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">🎨 Welcome to NextCSS</h1>
        <p className="text-lg mb-6">Explore modern CSS, Tailwind, and design systems in one place.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/portfolio" className="px-4 py-2 bg-blue-500 text-white rounded">Portfolio</a>
          <a href="/components" className="px-4 py-2 bg-green-500 text-white rounded">Components</a>
          <a href="/gallery" className="px-4 py-2 bg-purple-500 text-white rounded">Gallery</a>
          <a href="/playground" className="px-4 py-2 bg-pink-500 text-white rounded">Playground</a>
        </div>
      </div>
    </main>
  );
}

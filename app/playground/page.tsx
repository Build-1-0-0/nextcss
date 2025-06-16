// File: app/playground/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup'; // enable HTML highlighting
import 'prismjs/themes/prism.css'; // default theme (light)
import 'prismjs/themes/prism-tomorrow.css'; // dark theme

let timeout: ReturnType<typeof setTimeout>;

export default function PlaygroundPage() {
  const [html, setHtml] = useState(`<div class='text-red-500'>Hello Tailwind!</div>`);
  const [debouncedHtml, setDebouncedHtml] = useState(html);

  useEffect(() => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setDebouncedHtml(html);
    }, 400); // debounce time
    return () => clearTimeout(timeout);
  }, [html]);

  useEffect(() => {
    Prism.highlightAll();
  }, [debouncedHtml]);

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">🧪 CSS Playground</h1>

      <textarea
        className="w-full h-40 p-4 border rounded font-mono bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
      />

      <div>
        <h2 className="text-xl font-semibold mb-2">Live Preview</h2>
        <div
          className="p-4 border rounded bg-white dark:bg-gray-900"
          dangerouslySetInnerHTML={{ __html: debouncedHtml }}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Highlighted Code</h2>
        <pre className="rounded overflow-x-auto">
          <code className="language-html">{debouncedHtml}</code>
        </pre>
      </div>
    </main>
  );
}
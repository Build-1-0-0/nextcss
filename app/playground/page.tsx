// File: app/playground/page.tsx
'use client';
import { useState } from "react";

export default function PlaygroundPage() {
  const [html, setHtml] = useState(`<div class='text-red-500'>Hello Tailwind!</div>`);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🧪 CSS Playground</h1>
      <textarea
        className="w-full h-40 p-4 border rounded mb-4 font-mono"
        value={html}
        onChange={e => setHtml(e.target.value)}
      />
      <div className="p-4 border rounded bg-white dark:bg-gray-900" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}

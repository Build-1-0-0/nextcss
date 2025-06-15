// File: components/ThemeToggle.tsx
'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="ml-auto px-3 py-1 border rounded"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

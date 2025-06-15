'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Load theme preference on initial render
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialIsDark = storedTheme
      ? storedTheme === 'dark'
      : prefersDark;

    setIsDark(initialIsDark);
    document.documentElement.classList.toggle('dark', initialIsDark);
  }, []);

  // Apply and store theme when changed
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="ml-auto px-3 py-1 border rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
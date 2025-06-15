// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-4">
      © {new Date().getFullYear()} nextcss. All rights reserved.
    </footer>
  );
}
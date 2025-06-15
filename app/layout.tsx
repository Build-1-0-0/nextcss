// app/layout.tsx
import './globals.css';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'nextcss',
  description: 'Modern CSS playground and design system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
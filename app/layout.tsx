// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "NextCSS",
  description: "A CSS-powered portfolio playground",
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

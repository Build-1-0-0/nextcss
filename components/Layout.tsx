// components/Layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="p-4 shadow bg-gray-100 dark:bg-gray-800">
        <Navbar />
      </header>
      <main className="p-4 max-w-5xl mx-auto">{children}</main>
      <Footer />
    </>
  );
}

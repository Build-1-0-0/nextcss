// File: app/gallery/page.tsx
import ArtCard from "@/components/ArtCard";

const artworks = [
  {
    title: "CSS Sunset",
    tags: ["gradient", "circle"],
    content: <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500"></div>
  },
  {
    title: "Hover Ripple",
    tags: ["hover", "animation"],
    content: <div className="w-32 h-32 bg-blue-500 hover:scale-110 transform transition duration-300"></div>
  }
];

export default function GalleryPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🎨 CSS Gallery</h1>
      <div className="grid grid-cols-2 gap-4">
        {artworks.map((art, i) => (
          <ArtCard key={i} {...art} />
        ))}
      </div>
    </main>
  );
}

// File: components/ArtCard.tsx
export default function ArtCard({ title, tags, content }: { title: string; tags: string[]; content: JSX.Element }) {
  return (
    <div className="border rounded p-4">
      <div className="mb-2">{content}</div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">{tags.join(", ")}</p>
    </div>
  );
}

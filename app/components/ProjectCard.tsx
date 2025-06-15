// File: components/ProjectCard.tsx
export default function ProjectCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block p-4 border rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </a>
  );
}

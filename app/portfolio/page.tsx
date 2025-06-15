// File: app/portfolio/page.tsx
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "NextCSS Playground",
    description: "An experimental playground for Tailwind and modern CSS design.",
    link: "https://nextcss-phi.vercel.app"
  },
  {
    title: "CSS Artwork Gallery",
    description: "Showcase of CSS art using gradients, animations, and creative layouts.",
    link: "#"
  }
];

export default function PortfolioPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🎯 Portfolio</h1>
      <div className="grid gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </main>
  );
}

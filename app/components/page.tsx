// File: app/components/page.tsx
import ComponentPreview from "@/components/ComponentPreview";

const components = [
  {
    name: "Button",
    code: `<button class='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>Click Me</button>`
  },
  {
    name: "Card",
    code: `<div class='p-4 rounded shadow bg-white dark:bg-gray-800'><h2 class='text-xl font-bold'>Card Title</h2><p>Card content here</p></div>`
  }
];

export default function ComponentLibraryPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🧩 Component Library</h1>
      <div className="space-y-6">
        {components.map((component, i) => (
          <ComponentPreview key={i} {...component} />
        ))}
      </div>
    </main>
  );
}

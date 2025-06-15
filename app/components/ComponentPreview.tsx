// File: components/ComponentPreview.tsx
export default function ComponentPreview({ name, code }: { name: string; code: string }) {
  return (
    <div className="border rounded p-4">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <div dangerouslySetInnerHTML={{ __html: code }} className="mb-2" />
      <pre className="bg-gray-100 dark:bg-gray-800 text-sm p-2 rounded overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

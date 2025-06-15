'use client';

import { useState } from 'react';

interface ComponentPreviewProps {
  name: string;
  code: string;
}

export default function ComponentPreview({ name, code }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border p-4 rounded shadow bg-white dark:bg-gray-900">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <div
        className="p-4 bg-gray-100 dark:bg-gray-800 rounded mb-2"
        dangerouslySetInnerHTML={{ __html: code }}
      />
      <button
        onClick={() => setShowCode(!showCode)}
        className="text-sm text-blue-500 hover:underline"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>
      {showCode && (
        <pre className="mt-2 bg-gray-200 dark:bg-gray-700 p-2 rounded text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
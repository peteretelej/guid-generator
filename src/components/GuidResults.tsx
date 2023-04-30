import React, { useRef } from 'react';

interface GuidListProps {
  guids: string[];
  onCopy: () => void;
  onExport: (format: string) => void;
}

const GuidResults: React.FC<GuidListProps> = ({ guids, onCopy, onExport }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand('copy');
      onCopy();
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        ref={textareaRef}
        readOnly
        className="w-full h-64 bg-gray-200 text-gray-800 p-2 rounded"
        value={guids.join('\n')}
      />
      <div className="flex space-x-4">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleCopy}
        >
          Copy to Clipboard
        </button>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          onClick={() => onExport('json')}
        >
          Export JSON
        </button>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          onClick={() => onExport('csv')}
        >
          Export CSV
        </button>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          onClick={() => onExport('xml')}
        >
          Export XML
        </button>
      </div>
    </div>
  );
};

export default GuidResults;

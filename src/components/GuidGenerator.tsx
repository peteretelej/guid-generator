import React, { useState, useEffect } from 'react';
import GuidGeneratorForm from './GuidGeneratorForm';
import GuidResults from './GuidResults';
import Toast from './Toast';

const App: React.FC = () => {
  const [guids, setGuids] = useState<string[]>([]);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleGenerate = (newGuids: string[]) => {
    setGuids(newGuids);
  };

  const handleCopy = () => {
    setShowToast(true);
  };

  const handleExport = (format: string) => {
    let fileContent: string;
    let fileMimeType: string;
    let fileExtension: string;

    switch (format) {
      case 'json':
        fileContent = JSON.stringify(guids);
        fileMimeType = 'application/json';
        fileExtension = 'json';
        break;
      case 'csv':
        fileContent = guids.join('\n');
        fileMimeType = 'text/csv';
        fileExtension = 'csv';
        break;
      case 'xml':
        fileContent = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<guids>',
          ...guids.map(guid => `<guid>${guid}</guid>`),
          '</guids>',
        ].join('\n');
        fileMimeType = 'application/xml';
        fileExtension = 'xml';
        break;
      default:
        return;
    }

    const blob = new Blob([fileContent], { type: fileMimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `guids.${fileExtension}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showToast) {
      timer = setTimeout(() => setShowToast(false), 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);

  return (
    <div className=" bg-gray-100 text-gray-900">
      <main className="p-4">
        <GuidGeneratorForm onGenerate={handleGenerate} />
        {guids.length > 0 && (
          <div className="mt-8">
            <GuidResults guids={guids} onCopy={handleCopy} onExport={handleExport} />
          </div>
        )}
        {showToast && (
          <div className="fixed bottom-4 right-4">
            <Toast message={guids.length>1 ? "Guids have been copied to the clipboard!" : "Guid has been copied to the clipboard!"} onClose={() => setShowToast(false)} />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;

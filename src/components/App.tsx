import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-900", "text-white");
    } else {
      document.body.classList.remove("bg-gray-900", "text-white");
      document.body.classList.add("bg-gray-100", "text-gray-900");
    }
  }, [darkMode]);

  return (
    <div >
      <main className="p-4">
        {/* Add your generator form, GUID list, and other components here */}
      </main>
    </div>
  );
};

export default App;

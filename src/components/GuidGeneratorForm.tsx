import React, { useState } from "react";
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from 'uuid';


interface GuidGeneratorFormProps {
  onGenerate: (guids: string[]) => void;
}

const GuidGeneratorForm: React.FC<GuidGeneratorFormProps> = ({
  onGenerate,
}) => {
  const [version, setVersion] = useState<string>("v4");
  const [count, setCount] = useState<number>(1);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [braces, setBraces] = useState<boolean>(false);
  const [hyphens, setHyphens] = useState<boolean>(true);

  const formatGuid = (guid: string): string => {
    if (uppercase) guid = guid.toUpperCase();
    if (braces) guid = `{${guid}}`;
    if (!hyphens) guid = guid.replace(/-/g, '');
    return guid;
  };

  const generateGuids = () => {
    const guids: string[] = [];

    for (let i = 0; i < count; i++) {
      let guid: string;

      switch (version) {
        case 'v1':
          guid = uuidv1();
          break;
        case 'v3':
          // TODO: allow custom namespace and name
          guid = uuidv3('example.com', uuidv3.DNS);
          break;
        case 'v4':
          guid = uuidv4();
          break;
        case 'v5':
          // TODO: allow custom namespace and name
          guid = uuidv5('example.com', uuidv5.DNS);
          break;
        default:
          guid = uuidv4();
      }

      guids.push(formatGuid(guid));
    }

    onGenerate(guids);
  };


  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="version" className="block text-sm font-medium">
          GUID Format
        </label>
        <select
          id="version"
          name="version"
          className="mt-1 block w-full bg-white border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={version}
          onChange={(e) => setVersion(e.target.value)}
        >
          <option value="v1">UUID v1</option>
          <option value="v3">UUID v3</option>
          <option value="v4">UUID v4</option>
          <option value="v5">UUID v5</option>
        </select>
      </div>
      <div>
        <label htmlFor="count" className="block text-sm font-medium">
          Number of GUIDs
        </label>
        <input
          id="count"
          name="count"
          type="number"
          className="mt-1 block w-full bg-white border border-gray-300 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
      </div>
      <div className="space-y-2">
        <div>
          <input
            id="uppercase"
            name="uppercase"
            type="checkbox"
            className="rounded"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          <label htmlFor="uppercase" className="ml-2 text-sm">
            Uppercase
          </label>
        </div>
        <div>
          <input
            id="braces"
            name="braces"
            type="checkbox"
            className="rounded"
            checked={braces}
            onChange={(e) => setBraces(e.target.checked)}
          />
          <label htmlFor="braces" className="ml-2 text-sm">
            Braces
          </label>
        </div>
        <div>
          <input
            id="hyphens"
            name="hyphens"
            type="checkbox"
            className="rounded"
            checked={hyphens}
            onChange={(e) => setHyphens(e.target.checked)}
          />
          <label htmlFor="hyphens" className="ml-2 text-sm">
            Hyphens
          </label>
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={generateGuids}
        >
          Generate
        </button>
      </div>
    </form>
  );
};

export default GuidGeneratorForm;
import { useState } from 'react';
import { TabProps } from './types';

export function Tabs({ tabs }: TabProps) {
  const [tabSelected, setTabSelected] = useState(0);

  const handleTabClick = (index) => {
    setTabSelected(index);
  };

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`py-2 px-4 mr-2 focus:outline-none text-sm font-medium ${
              index === tabSelected
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 border-b-2 border-b-transparent hover:text-primary'
            }`}
          >
            <span>{tab.title}</span>
          </button>
        ))}
      </div>
      <div>
        <span>{tabs[tabSelected].content}</span>
      </div>
    </div>
  );
}

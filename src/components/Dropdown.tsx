import React, { ReactNode, useState } from 'react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';

interface DropdownOptionProps {
  value: string;
  active: boolean;
  updateValue: (value: string) => void;
  icon?: ReactNode;
}

const DropdownOption = ({
  value = '',
  active = false,
  updateValue,
  icon,
}: DropdownOptionProps) => {
  const handleChange = (e: React.MouseEvent) => {
    e.preventDefault();
    updateValue(value);
  };

  if (!icon) {
    icon = <CheckIcon className="h-5 w-5" aria-hidden="true" />;
  }

  return (
    <li
      className="text-gray-900 cursor-default hover:bg-blue-500 hover:text-white select-none relative py-2 pl-3 pr-9"
      onClick={handleChange}
    >
      <div className="flex items-center">
        <span className="ml-3 block font-normal truncate">{value}</span>
      </div>
      {active && (
        <span className="absolute inset-y-0 right-0 flex items-center pr-4">
          {icon}
        </span>
      )}
    </li>
  );
};

interface DropdownProps {
  value: string;
  options: TrlObject[];
  icon?: ReactNode;
}

const Dropdown = ({ value, options, icon }: DropdownProps) => {
  const [state, setState] = useState({
    value,
    showOptions: false,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, showOptions: !state.showOptions }));
  };

  const updateValue = (value: string) => {
    setState((prev) => ({ ...prev, showOptions: false, value }));
  };

  if (!icon) {
    icon = (
      <ChevronDownIcon
        className={
          state.showOptions ? 'h-5 w-5 text-gray-800' : 'h-5 w-5 text-gray-400'
        }
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="mt-1 relative">
      <input type="hidden" value={state.value} />
      <button
        type="button"
        className={
          state.showOptions
            ? 'transition transition-all relative w-full bg-white rounded-md shadow-lg pl-3 pr-10 py-3 text-left cursor-default outline-none ring-1 ring-blue-500 border-blue-500 sm:text-sm'
            : 'transition transition-all relative w-full bg-white rounded-md border border-solid border-gray-300 pl-3 pr-10 py-3 text-left cursor-default sm:text-sm'
        }
        onClick={handleClick}
      >
        <span className="flex items-center">
          <span className="ml-3 block truncate text-gray-500">
            {state.value}
          </span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          {icon}
        </span>
      </button>
      {state.showOptions && (
        <div className="mt-1 w-full rounded-md bg-white shadow-lg">
          <ul className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <DropdownOption
                key={index}
                value={option.name}
                active={state.value === option.name}
                updateValue={updateValue}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

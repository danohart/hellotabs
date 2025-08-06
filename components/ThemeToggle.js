import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faLaptop } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);

  const themeOptions = [
    { value: "system", label: "System", icon: faLaptop },
    { value: "light", label: "Light", icon: faSun },
    { value: "dark", label: "Dark", icon: faMoon },
  ];

  const getCurrentIcon = () => {
    if (theme === "system") {
      return resolvedTheme === "dark" ? faMoon : faSun;
    }
    return themeOptions.find((opt) => opt.value === theme)?.icon || faLaptop;
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className='flex items-center gap-2 p-2 rounded-lg bg-purple-200 hover:bg-gray-400 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors'
        aria-label='Toggle theme'
      >
        <FontAwesomeIcon
          icon={getCurrentIcon()}
          className='w-4 h-4 text-gray-500 dark:text-gray-300'
        />
        <span className='text-sm font-medium text-gray-500 dark:text-gray-300'>
          {theme === "system"
            ? `Auto`
            : themeOptions.find((opt) => opt.value === theme)?.label}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${
            showDropdown ? "rotate-180" : ""
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      {showDropdown && (
        <div className='absolute top-full left-0 mt-1 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg shadow-lg z-50 min-w-full'>
          {themeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value);
                setShowDropdown(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                theme === option.value
                  ? "bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <FontAwesomeIcon icon={option.icon} className='w-4 h-4' />
              <div className='flex flex-col'>
                <span className='text-sm font-medium'>{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

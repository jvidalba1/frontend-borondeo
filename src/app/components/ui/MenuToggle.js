'use client';

/**
 * MenuToggle Component
 * Desktop toggle button for sidebar (not a burger menu)
 * Follows Single Responsibility Principle: only handles toggle button display
 */
export default function MenuToggle({ isOpen, onClick, ariaLabel = "Toggle sidebar" }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      className="p-2 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {isOpen ? (
        // Close arrow (pointing right)
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      ) : (
        // Open icon (menu or bars)
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  );
}

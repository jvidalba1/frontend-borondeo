'use client';

/**
 * BurgerMenu Component
 * Mobile burger menu icon that toggles between hamburger and close (X) icon
 * Follows Single Responsibility Principle: only handles menu icon display
 */
export default function BurgerMenu({ isOpen, onClick, ariaLabel = "Toggle menu" }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      className="p-2 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {isOpen ? (
        // Close icon (X)
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        // Hamburger icon
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

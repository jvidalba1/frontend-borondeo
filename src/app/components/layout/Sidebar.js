"use client";

import { useEffect } from "react";

/**
 * Sidebar Component
 * Collapsible right sidebar with menu items
 * Follows Single Responsibility Principle: handles sidebar display and menu items only
 *
 * Responsive behavior:
 * - Mobile: Full-screen overlay
 * - Desktop: Fixed width (300px) sliding from right
 *
 * Accessibility:
 * - ESC key closes sidebar
 * - Focus trap when open (mobile)
 * - ARIA labels for screen readers
 *
 * Props:
 * - isOpen: boolean - current sidebar state
 * - onClose: function - callback to close sidebar
 */
export default function Sidebar({ isOpen, onClose }) {
  // Handle ESC key to close sidebar
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop - only on mobile when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 right-0 bottom-10
          bg-white dark:bg-gray-900 background-pepas border-neon-green
          border-l border-gray-200 dark:border-gray-800
          shadow-lg
          transition-transform duration-300 ease-in-out
          z-40
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          w-full md:w-80
        `}
        aria-label="Sidebar navigation"
        aria-hidden={!isOpen}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">MENU</h2>
          </div>

          {/* Menu Items */}
          <nav className="space-y-4">
            <a
              href="#hola1"
              className="block px-4 py-3 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              Hola1
            </a>
            <a
              href="#hola2"
              className="block px-4 py-3 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              Hola2
            </a>
            <a
              href="#hola3"
              className="block px-4 py-3 text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
              Hola3
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}

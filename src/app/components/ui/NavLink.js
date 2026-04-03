'use client';

/**
 * NavLink Component
 * Reusable navigation link component
 * Follows Open/Closed Principle: accepts props for customization without modification
 */
export default function NavLink({ href = "#", children, className = "" }) {
  return (
    <a
      href={href}
      className={`px-4 py-2 text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

"use client";

/**
 * Footer Component
 * Minimal footer with attribution and copyright
 * Follows Single Responsibility Principle: handles footer display only
 */
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-10 bg-gray-900/80 background-pepas backdrop-blur-sm text-white z-30">
      <div className="h-full flex items-center justify-center px-4">
        <p className="text-xs md:text-sm text-center">Con ❤️ desde Colombia</p>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import BurgerMenu from "../ui/BurgerMenu";
import MenuToggle from "../ui/MenuToggle";
import NavLink from "../ui/NavLink";
import logo from "../../assets/logo1-borondeo.png";

/**
 * Header Component
 * Top navigation bar with Borondeo branding, navigation links, and menu toggle
 * Follows Single Responsibility Principle: handles header display and navigation only
 *
 * Props:
 * - isSidebarOpen: boolean - current sidebar state
 * - onToggleSidebar: function - callback to toggle sidebar
 */
export default function Header({ isSidebarOpen, onToggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white background-pepas border-neon-green border-b border-gray-200 dark:border-gray-800 z-40 shadow-sm">
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        {/* Logo/Branding */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold borondeo-header-title">
            B O R O N D E O
          </h1>
        </div>

        <div className="flex items-center">
          <Image
            src={logo}
            width={80}
            height={80}
            alt="Picture of the author"
          />
        </div>
        {/* Navigation Links - Hidden on mobile */}
        {/* <nav className="hidden md:flex items-center space-x-2">
          <NavLink href="#explore">Explore</NavLink>
          <NavLink href="#layers">Layers</NavLink>
          <NavLink href="#search">Search</NavLink>
        </nav> */}

        {/* Menu Toggle */}
        <div className="flex items-center">
          {/* Mobile: Burger Menu */}
          <div className="md:hidden">
            <BurgerMenu
              isOpen={isSidebarOpen}
              onClick={onToggleSidebar}
              ariaLabel="Toggle mobile menu"
            />
          </div>

          {/* Desktop: Standard Toggle */}
          <div className="hidden md:block">
            <MenuToggle
              isOpen={isSidebarOpen}
              onClick={onToggleSidebar}
              ariaLabel="Toggle sidebar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

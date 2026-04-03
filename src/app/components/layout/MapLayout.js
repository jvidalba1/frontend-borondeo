'use client';

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import MapView from '../map/MapView';

/**
 * MapLayout Component
 * Main layout orchestrator that coordinates Header, Sidebar, Map, and Footer
 * Follows Single Responsibility Principle: manages layout structure and sidebar state only
 *
 * State Management:
 * - Manages sidebar open/closed state
 * - Passes state and callbacks to child components
 */
export default function MapLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Header */}
      <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />

      {/* Map Container */}
      <main className="absolute top-16 left-0 right-0 bottom-10">
        <MapView />
      </main>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

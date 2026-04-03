# Version 1 Plan - Borondeo Map View

## Project Overview

Build a skeleton web application with a full-screen interactive map interface, featuring a header, toggleable right sidebar menu, and minimal footer.

## Tech Stack Clarification

**Current Stack:**

- Next.js 16.2.1 (App Router)
- React 19.2.4
- Tailwind CSS 4
- JavaScript (ES6+)

**Map Library:**

- MapLibre GL JS (maplibre.org) - Open-source fork of Mapbox GL JS
- For styling source, use always a free option.

**Note on Vite:**
Next.js includes its own build system (Turbopack/Webpack) and doesn't require Vite. We'll proceed with Next.js's native bundler which is optimized for React Server Components and the App Router.

## Architecture Overview

### Layout Structure

**Desktop View (≥768px):**
```
┌─────────────────────────────────────────────────────────┐
│                    Header (Fixed)                        │
│  [Borondeo]       [Nav Links]          [Menu Toggle]    │
├─────────────────────────────────────────┬───────────────┤
│                                         │               │
│                                         │   Sidebar     │
│           Map Container                 │   (Toggle)    │
│           (Full height)                 │               │
│                                         │   - Item 1    │
│                                         │   - Item 2    │
│                                         │   - Item 3    │
│                                         │               │
├─────────────────────────────────────────┴───────────────┤
│              Footer (Minimal, Fixed)                     │
└─────────────────────────────────────────────────────────┘
```

**Mobile View (<768px):**
```
┌─────────────────────────────────────────┐
│           Header (Fixed)                │
│  [Borondeo]              [☰ Burger]     │
├─────────────────────────────────────────┤
│                                         │
│                                         │
│         Map Container                   │
│         (Full Screen)                   │
│                                         │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│        Footer (Minimal, Fixed)          │
└─────────────────────────────────────────┘

When burger is clicked:
┌─────────────────────────────────────────┐
│           Header (Fixed)                │
│  [Borondeo]              [✕ Close]      │
├─────────────────────────────────────────┤
│                                         │
│         Sidebar Menu (Overlay)          │
│                                         │
│         - Item 1                        │
│         - Item 2                        │
│         - Item 3                        │
│                                         │
│         (Covers entire map)             │
│                                         │
└─────────────────────────────────────────┘
```

## Component Architecture (SOLID Principles)

### Core Components

1. **Layout Components** (`src/app/components/layout/`)
   - `Header.js` - Top navigation bar with logo and menu toggle
   - `Sidebar.js` - Right-side collapsible menu
   - `Footer.js` - Minimal footer with attribution
   - `MapLayout.js` - Container orchestrating header, sidebar, footer, and map

2. **Map Components** (`src/app/components/map/`)
   - `MapView.js` - MapLibre map container and initialization
   - `MapControls.js` - Zoom controls, navigation controls

3. **UI Components** (`src/app/components/ui/`)
   - `BurgerMenu.js` - Burger menu icon for mobile (☰ / ✕)
   - `MenuToggle.js` - Toggle button for desktop sidebar
   - `NavLink.js` - Reusable navigation link component

### Component Responsibilities (Single Responsibility Principle)

- **Header**: Display branding, navigation links, and sidebar toggle control
- **Sidebar**: Display menu items and handle open/close state
- **Footer**: Display copyright and map attribution
- **MapView**: Initialize and manage MapLibre instance
- **MapLayout**: Coordinate layout positioning and sidebar state

## Dependencies to Install

```bash
npm install maplibre-gl
npm install react-map-gl maplibre-gl
```

**Rationale:**

- `maplibre-gl` - Core MapLibre library
- `react-map-gl` - React wrapper for MapLibre (provides React-friendly API)

## File Structure

```
frontend-borondeo/
├── src/
│   └── app/
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.js
│       │   │   ├── Sidebar.js
│       │   │   ├── Footer.js
│       │   │   └── MapLayout.js
│       │   ├── map/
│       │   │   ├── MapView.js
│       │   │   └── MapControls.js
│       │   └── ui/
│       │       ├── BurgerMenu.js
│       │       ├── MenuToggle.js
│       │       └── NavLink.js
│       ├── globals.css
│       ├── layout.js (root layout)
│       └── page.js (home page - renders MapLayout)
├── public/
│   └── (map assets, icons if needed)
└── package.json
```

## Implementation Plan

### Phase 1: Setup & Dependencies

1. Install MapLibre dependencies
2. Add MapLibre CSS to globals.css or layout
3. Create component directory structure

### Phase 2: Layout Components (Mobile-First)

1. **Header Component**
   - Branding: "Borondeo" logo/title on the left
   - Desktop: Navigation links (Explore, Layers, Search) in center
   - Mobile: Hide navigation links, show only logo
   - Menu toggle button on the right:
     - Desktop: Standard toggle icon (→ ☰)
     - Mobile: Burger menu icon (☰) that opens full-screen sidebar
   - Fixed position, spans full width
   - Height: ~60px
   - Responsive: Adjust padding and font sizes for mobile

2. **Sidebar Component**
   - Positioned on the right side
   - Width: ~300px on desktop, full width on mobile
   - Slide-in/out animation with CSS transitions
   - State: open/closed (controlled by parent)
   - Menu items: Hola1, Hola2, Hola3 (placeholder)
   - Z-index above map, below header

3. **Footer Component**
   - Fixed bottom position
   - Minimal height (~40px)
   - Attribution text: "© 2026 Borondeo — OpenStreetMap contributors"
   - MapLibre attribution
   - Dark semi-transparent background
   - Responsive: Smaller font size on mobile

### Phase 3: Map Integration

1. **MapView Component**
   - Initialize MapLibre GL JS map
   - Set initial view: world view centered on [0, 20], zoom level 2
   - Map style: OSM-based style or MapLibre default
   - Handle container resize
   - Clean up map instance on unmount

2. **Map Container Styling**
   - Full viewport height minus header/footer
   - Position: relative or absolute
   - Ensure proper z-index layering

### Phase 4: State Management

1. **Sidebar Toggle State**
   - Use React useState in MapLayout or page.js
   - Pass state and toggle function to Header and Sidebar
   - Consider using URL query params for sidebar state (optional)

2. **Responsive Behavior**
   - Mobile (<768px):
     - Burger menu in header triggers sidebar
     - Sidebar overlays entire map (full screen)
     - When open, map is not visible
     - Close button (X) in header when sidebar is open
     - Only show: Header + Map (no navigation links in header)
   - Desktop (≥768px):
     - Toggle button in header
     - Sidebar slides in from right, fixed width (300px)
     - Sidebar overlays map but doesn't hide it completely
     - Navigation links visible in header center

### Phase 5: Styling & Polish

1. **Tailwind Configuration**
   - Ensure all necessary utilities available
   - Custom animations for sidebar transition
   - Color palette matching travel/exploration theme

2. **Accessibility**
   - Keyboard navigation for sidebar toggle
   - ARIA labels for map controls
   - Focus management when sidebar opens/closes

## Map Configuration

### MapLibre Setup

**Initial View:**

- Center: `[0, 20]` (longitude, latitude)
- Zoom: `2` (world view)
- Pitch: `0` (2D view)
- Bearing: `0` (north up)

**Map Style:**

- Option 1: Use free OSM-based style from MapTiler/Maptiler Cloud (requires API key but has free tier)
- Option 2: Use demotiles.maplibre.org style (demo purposes)
- Option 3: Self-hosted OSM style JSON

**Controls:**

- Navigation controls (zoom +/-, compass)
- Scale control
- Attribution control (required for OSM)

## Design Considerations

### Following SOLID Principles

1. **Single Responsibility**: Each component handles one concern
   - Header: navigation and branding only
   - Sidebar: menu display and state
   - MapView: map rendering only

2. **Open/Closed**: Components accept props for customization without modification

3. **Liskov Substitution**: NavLink component can be used anywhere links are needed

4. **Interface Segregation**: Components receive only the props they need

5. **Dependency Inversion**: Map component depends on MapLibre abstraction, not concrete implementation

### Performance Considerations

- Lazy load map component if possible (Next.js dynamic imports)
- Use CSS transforms for sidebar animations (GPU-accelerated)
- Memoize map controls to prevent unnecessary re-renders
- Consider using `'use client'` directive for interactive components

## Responsive Design Strategy

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Behavior

- **Mobile (<768px)**:
  - Header:
    - Show only "Borondeo" branding and burger menu icon
    - Hide navigation links (Explore, Layers, Search)
  - Sidebar:
    - Full-screen overlay when opened
    - Covers entire map area
    - Slide-in animation from right
    - Backdrop with semi-transparent overlay
  - Map: Full viewport (minus header/footer) when sidebar closed
  - Footer: Reduced padding, smaller text

- **Tablet (768px - 1024px)**:
  - Transition zone: Can use mobile or desktop pattern
  - Recommend: Desktop pattern with slightly narrower sidebar (250px)

- **Desktop (>1024px)**:
  - Header:
    - Show full navigation links in center
    - Toggle button on right (not burger icon)
  - Sidebar:
    - Fixed width (300px), slide in from right
    - Partially overlays map (map still visible)
    - Semi-transparent backdrop optional
  - Map: Adjusts to sidebar width when open
  - Footer: More spacious padding

## Version 1 Feature Scope (MVP)

### Included:

- ✅ Responsive header with logo and navigation
- ✅ Toggleable right sidebar
- ✅ Full-screen interactive map with MapLibre
- ✅ Basic zoom and navigation controls
- ✅ Minimal footer with attribution
- ✅ Mobile-responsive layout
- ✅ Smooth transitions/animations

### Explicitly Excluded (Future Versions):

- ❌ User authentication
- ❌ Search functionality
- ❌ Layer switching
- ❌ Markers/pins on map
- ❌ Backend API integration
- ❌ Data persistence
- ❌ Advanced map features (clustering, routes, etc.)

## Testing Strategy

Since the project doesn't include tests initially (per CLAUDE.md), we'll focus on:

- Manual testing across devices
- Browser compatibility (Chrome, Firefox, Safari)
- Responsive design testing
- Map interaction testing

## Success Criteria

Version 1 is complete when:

1. All components render without errors
2. Map displays with world view on load
3. Sidebar toggles smoothly open/closed
4. Layout is responsive on mobile, tablet, desktop
5. No console errors or warnings
6. ESLint and Prettier pass
7. Code follows SOLID principles

## Deployment Considerations

- Ensure MapLibre works in production build
- Check bundle size (MapLibre adds ~200kb)
- Verify map tiles load from CDN
- Test on Vercel or chosen hosting platform

## Next Steps After Version 1

Potential features for version 2:

- Search functionality with geocoding
- Layer switching (satellite, terrain)
- Custom markers and popups
- User location detection
- Map bookmarks/saved places
- Integration with backend API

## Technical Risks & Mitigations

**Risk 1: MapLibre bundle size**

- Mitigation: Use dynamic imports, consider tree-shaking

**Risk 2: Map rendering performance on mobile**

- Mitigation: Optimize tile loading, reduce initial map features

**Risk 3: Style attribution requirements**

- Mitigation: Clearly display OSM and MapLibre attributions in footer

**Risk 4: Sidebar state management complexity**

- Mitigation: Keep state simple with useState, avoid premature Redux/Context

## Timeline Estimate

**Note**: Per project guidelines, no time estimates provided. Work proceeds in phases as outlined above.

## Questions to Resolve Before Implementation

1. ✅ Map library: MapLibre confirmed
2. ✅ Map style source: Use free option (demotiles.maplibre.org or free OSM style)
3. ✅ Branding: "Borondeo" confirmed
4. ✅ Mobile behavior: Burger menu converts to full-screen overlay
5. ⚠️ Sidebar default state: Open or closed on desktop?
6. ⚠️ Navigation links: Should they be functional or placeholder for now?
7. ⚠️ Sidebar menu items: What should the actual menu items be? (Currently: Hola1, Hola2, Hola3)

---

**Document Version**: 1.1
**Created**: 2026-03-30
**Last Updated**: 2026-03-30
**Status**: Ready for Implementation

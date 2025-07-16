# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

QUOREICH AI CORPORATE is a React-based corporate website for an AI training company. It's built with modern technologies including React 18, TypeScript, Tailwind CSS, and features both frontend and backend components.

## Key Technologies

- **Frontend**: React 18 + TypeScript, Vite build tool, Tailwind CSS
- **Animations**: Framer Motion for page transitions, GSAP for complex animations
- **3D Graphics**: Three.js with React Three Fiber for 3D models and animations
- **Backend**: Express.js server with Prisma ORM and SQLite database
- **Deployment**: GitHub Pages with automated deployment

## Development Commands

```bash
# Start development server (frontend only)
npm run dev

# Build for production (TypeScript compilation + Vite build)
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Manual linting (ESLint packages installed but no config)
npx eslint src --ext .ts,.tsx

# TypeScript type checking
npx tsc --noEmit
```

## Development Setup Notes

- **ESLint**: Packages installed (@typescript-eslint/eslint-plugin, @typescript-eslint/parser) but no configuration file exists
- **No Testing Framework**: No Jest, Vitest, or other testing setup
- **No Prettier**: No code formatting configuration
- **No Pre-commit Hooks**: No automated code quality checks before commits
- **CI/CD**: GitHub Actions workflow exists but only builds and deploys (no linting/testing)

## Architecture

### Frontend Structure
- **src/pages/**: Main application pages (Home, About, Contact, Services, Courses)
- **src/components/**: Reusable components organized by feature
  - `home/`: Home page specific components (HeroSection, TestimonialCarousel, etc.)
  - `shared/`: Shared components (CustomCursor, PageTransition, ScrollIndicator)
  - `services/`, `courses/`, `contact/`: Feature-specific components
- **src/data/**: Static data and mock content
- **src/types/**: TypeScript type definitions
- **src/services/**: API service layer for backend communication

### Backend Structure
- **src/server/index.ts**: Express server with REST API endpoints
- **prisma/schema.prisma**: Database schema (SQLite with Course model)
- API endpoints for CRUD operations on courses at `/api/courses`

### Key Features
- Lazy loading for all pages using React.lazy()
- Custom cursor with interactive animations
- Scroll progress indicator
- Page transitions with Framer Motion
- 3D VR headset model animation using Three.js
- Responsive testimonial carousel
- Contact form with validation
- Admin course management interface

### Styling
- Tailwind CSS with custom color palette and animations
- Dark theme with gradient backgrounds
- Custom gradient animation keyframes
- Responsive design patterns throughout

### Data Flow
- Static data in `src/data/index.ts` for courses, team members, and features
- API service layer in `src/services/api.ts` for dynamic course management
- Prisma client for database operations in backend

## Development Notes

- The project uses React Router for client-side routing
- All pages are wrapped with PageTransition for smooth navigation
- Components follow TypeScript strict mode conventions
- The server runs on port 3001 by default
- Database file is `prisma/dev.db` (SQLite)

## Common Issues and Solutions

- **Missing ESLint Config**: Create `.eslintrc.js` or `.eslintrc.json` if linting is needed
- **No Tests**: Consider adding Vitest or Jest for testing
- **Type Errors**: Run `npx tsc --noEmit` to check for TypeScript errors before building
- **Build Failures**: The build process runs TypeScript compilation first, then Vite build

## File Locations

- **Frontend**: All React components and pages in `src/`
- **Backend**: Express server in `src/server/index.ts`
- **Database**: Prisma schema in `prisma/schema.prisma`
- **Styling**: Tailwind config in `tailwind.config.js`
- **Build**: Vite config in `vite.config.ts`
- **Types**: TypeScript definitions in `src/types/index.ts`

## Build Configuration

- Vite config includes code splitting for vendor libraries, router, animations, and Three.js
- Manual chunks optimize bundle sizes for production
- Assets are organized in the `dist` folder after build
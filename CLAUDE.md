# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Borondeo is a travel-focused web platform designed to host multiple useful applications and content experiences under one ecosystem.

The project starts with a public website at www.borondeo.com which is going to be linked to this frontend-borondeo project in the future, initially launched as a simple landing page. Over time, it will evolve into a broader platform that includes editorial content, user accounts, and travel-related web applications.

## Core Principles

1. Act as a senior frontend engineer and frontend architect when making technical decisions
2. **CRITICAL**: All code MUST follow SOLID design principles and best practices. Never write code that violates these principles. If you do, you will be asked to refactor it.
3. Avoid premature abstraction and unnecessary layers - keep solutions simple and focused

## Development Workflow

### Branch Strategy

Always create feature branches before making changes:

```bash
git checkout -b feature-[brief-description]
```

### Before Committing

1. Write comprehensive tests for all new functionality
2. Compile the code
3. Run all tests to ensure they pass
4. Run ESLint and Prettier
5. Write detailed commit messages explaining both changes and rationale

### Quality Requirements

- Code must compile without warnings
- Test coverage must remain above 80%
- All tests must pass
- ESLint and Prettier must pass without errors

## Code Standards

- we are using Next.js and React, ensure always conventions and best practices from both technologies.
- Use modern JavaScript (ES6+) features and syntax
- Component design should favor composition over inheritance
- CSS: Use Tailwind utilities first, custom CSS only when necessary
- Follow SOLID principles in all code - violations must be refactored

## Project Status

This is not a new project

I started from my side with following command:

npx create-next-app@latest frontend-borondeo
npm install

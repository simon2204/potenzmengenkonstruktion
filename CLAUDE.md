# CLAUDE.md - Project Context for Potenzmengenkonstruktion

## Project Overview
This is an Angular 17 educational web application for teaching the power set construction algorithm (Potenzmengenkonstruktion) - converting NFAs to DFAs.

## Key Commands
```bash
# Build the project
npm run build

# Start development server
npm start

# Run tests (if available)
npm test
```

## Project Structure
```
src/
├── app/
│   ├── endlicherautomat/     # Core automata logic
│   ├── inputTable/           # Interactive table UI
│   ├── services/             # DFA generation service
│   └── toolbar/              # Application toolbar
└── statemachine/             # Reusable state machine library
```

## Important Notes
- TypeScript strict mode is enabled
- No linter currently configured (ESLint recommended)
- Auto-save functionality uses browser localStorage
- German naming conventions throughout codebase

## Common Tasks
- When making changes, always run `npm run build` to check for TypeScript errors
- The project uses standalone Angular components
- State management is handled through services with observables

## Recent Bug Fixes (2025-06-16)
- Fixed memory leak in transition-edit-dialog (missing event listener cleanup)
- Fixed subscription memory leak in inputTable component
- Fixed null/undefined handling in EndlicherAutomat.ts
- Replaced setTimeout race conditions with proper Angular change detection
# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common commands
- Install deps (CI-style):
  - `npm ci`
- Typecheck/build output into `dist/` (what CI publishes):
  - `npm run build`
  - Runs `tsc --outDir ./dist`, then generates `dist/package.json` + copies `README.md` and `LICENSE`.
- Dev loop (incremental TypeScript compile into `dist/`):
  - `npm run dev`
- Lint:
  - `npm run lint`
- Generate `README.md` from `README.jsx`:
  - `npm run readme`
    - This uses the locally-built CLI from `dist/` (see the `file:./dist` dependency in `package.json`). If you changed `src/`, recompile first via `npm run dev` or `npm run build`.
  - Watch mode (preferred): `npx readme.jsx ./README.jsx --watch`
    - Note: the current `package.json` `readme:watch` script appears to be mis-typed.
- Tests (Node’s built-in test runner):
  - `npm test`
  - Run a single test file directly:
    - `node --test src/path/to/some.test.js`

## Release/publish (GitHub Actions)
- Workflow: `.github/workflows/publish.yml`
- Trigger: pushing a git tag matching `v*`
- What it does:
  - Uses Node 20
  - `npm ci`
  - `npm run build --if-present`
  - Publishes from `dist/` via `npm publish --access public`

## Architecture overview
### 1) CLI compiler (`src/index.ts`)
- Entry point of the published package (see generated `dist/package.json` `bin`).
- Takes a single input file path (typically `./README.jsx`) plus optional `--watch`.
- Pipeline:
  1. Transpile the input JSX using `typescript.transpileModule()` with a custom JSX factory:
     - `jsxFactory: "Readme.createElement"`
     - `jsxFragmentFactory: "Readme.Fragment"`
  2. Prepend an import of the runtime (`readme.jsx/jsx.js`), write the result to a temporary `README.js` in the consuming project.
  3. `import()` that `README.js` and read its default export (expected to be a Markdown string).
  4. Format as Markdown via Prettier, write to `README.md`.
  5. Delete the temporary `README.js`.

### 2) JSX runtime (`src/jsx.ts`)
- Implements `Readme.createElement` + `Readme.Fragment` used by transpiled output.
- Produces strings (HTML-ish or Markdown) rather than a React element tree.
- Handles intrinsic HTML tags (e.g. `div`, `img`, `table`) by stringifying props and concatenating children.

### 3) UI component library (`src/ui/*`)
- Components are small TSX functions that return Markdown/HTML strings.
- `src/ui/index.tsx` exports the `UI` namespace used by consumers:
  - `import { UI } from "readme.jsx/ui";`

### 4) Side-effect components that write assets
Some components generate files during README compilation (relative to the consuming project’s `process.cwd()`):
- `Svg` (`src/ui/svg.tsx`): renders an SVG string and writes it via `writeDeep()` to `distUrl`.
- `NumberHeading` + `Terminal`: build on `Svg` to generate animated SVG assets under `./assets/...` and then embed them via `UI.Image`.

### 5) Build packaging (`src/scripts/build.js`)
- Produces a publishable `dist/` folder.
- Key detail: `dist/package.json` is generated (exports map, `bin`, dependencies like `prettier`).
  - If you change public entrypoints/exports, update this generator.

## Repo conventions / gotchas
- ESM-first repo: TypeScript files import sibling modules using `.js` extensions so that the emitted JS runs under Node ESM without rewriting import specifiers.
- `dist/` is treated as build output (it’s in `.gitignore`); edit `src/` and rerun `npm run build` rather than patching `dist/` manually.
- This repo’s root `README.md` is generated from `README.jsx`; prefer editing `README.jsx` and regenerating.
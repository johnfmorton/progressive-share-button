# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Progressive Share Button is a zero-dependency Web Components library that wraps the Web Share API. It provides a progressive enhancement approach for sharing functionality with automatic OS detection (iOS, Android, Windows, Mac) and appropriate share icons.

## Build Commands

```bash
npm run build       # Build library (ES + UMD modules) + demo page + TypeScript declarations
npm run dev         # Start dev server on 0.0.0.0:8888
npm run clean       # Remove dist/, es/, and demo/ directories
npm run vite-build  # Build demo page only
```

Note: No test or lint commands are currently configured.

## Architecture

**Single source file**: All component logic is in `/lib/progressive-share-button.ts` (≈250 lines).

The library exports:
- `ProgressiveShareButton()` - Initializer function that registers the custom element
- `ProgressiveShareButtonClass` - The HTMLElement class for custom registration

**Key implementation details**:
- Uses Shadow DOM for style encapsulation
- Emits custom events: `progressive-share-success` and `progressive-share-fail`
- Supports `::part()` CSS selectors for external styling (button, icon, slot)
- Has a "smart-share" feature that concatenates title, text, and URL for APIs that only support text
- Detects OS at runtime to show appropriate share icon

## Build Configuration

- `vite.config.mjs` - Library build (outputs to `/dist/`)
- `vite.demo.config.mjs` - Demo page build (outputs to `/demo/`, uses base path for GitHub Pages)

## Code Style

Per `prettier.config.js`: 4-space indentation, single quotes, no semicolons, trailing commas (ES5).

## Publishing

The library is published to both NPM and JSR manually. The only GitHub Actions workflow (`.github/workflows/ghpages.yaml`) builds the demo page and deploys it to GitHub Pages on push to main.

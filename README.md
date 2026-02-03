# VCursor Documentation Site

This is the source code for [cli.vcursor.com/docs](https://cli.vcursor.com/docs).
Built with Next.js 14, TypeScript, and custom styling (no Tailwind).

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run development server:
    ```bash
    npm run dev
    ```

3.  Build for production:
    ```bash
    npm run build
    ```

## Structure

-   `src/app/page.tsx`: Landing page
-   `src/app/docs`: Documentation pages
    -   `cli/`: General CLI usage
    -   `python/`: Python SDK docs
    -   `js/`: Node.js integration docs
    -   `go/`: Go integration docs
-   `src/app/globals.css`: Global styles and design system (Glassmorphism, Dark Mode)

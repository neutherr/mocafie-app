# Mocafie Landing Page

A premium landing page for Mocafie, a gluten-free cassava flour brand. Built with Astro, TailwindCSS (v4), and Shadcn UI concepts.

## Features

-   **Component-Based Architecture**: Modular design using Astro components.
-   **Responsive Design**: Fully responsive layout using TailwindCSS.
-   **Animations**: Scroll-triggered animations using Intersection Observer.
-   **Performance**: Highly optimized static site generation.

## Project Structure

-   `src/components/`: Reusable UI components (Hero, Features, Gallery, etc.).
-   `src/layouts/`: Global layout templates.
-   `src/pages/`: Page routes.
-   `src/styles/`: Global styles and Tailwind configuration.
-   `src/javascript/`: Client-side scripts (animations).

## Getting Started

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Run Development Server**:

    ```bash
    npm run dev
    ```

3.  **Build for Production**:

    ```bash
    npm run build
    ```

## Customization

-   **Colors & Fonts**: Edit `src/styles/global.css`.
-   **Content**: Modify the data arrays within each component file (e.g., `features` in `src/components/Features.astro`).
-   **Assets**: Images are currently hosted externally. Update `src` attributes in components to use local assets or your own CDN.

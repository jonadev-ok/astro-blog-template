# Copilot Instructions

- Stack: Astro v5 with Tailwind CSS v4 wired through Vite plugin (no standalone tailwind.config). Global CSS imports Tailwind via [src/styles/global.css](src/styles/global.css#L1). TypeScript extends Astro strict config; treat .astro files as primary surface.
- Workdir: commands run from the repo root at astro-blog-template/. Core scripts: `pnpm install`, `pnpm dev`, `pnpm build`, `pnpm preview`, `pnpm astro ...`.
- Entry points: pages live in [src/pages](src/pages). [src/pages/index.astro](src/pages/index.astro#L1-L6) uses the shared layout; [src/pages/blog/index.astro](src/pages/blog/index.astro) is an empty stub ready for posts.
- Layout: global shell and head tags in [src/layouts/Layout.astro](src/layouts/Layout.astro#L1-L26). It imports global styles, sets `lang="en"`, favicon links, generator meta, and wraps content in a single `<slot>`. Mirror this pattern for new layouts.
- Styling: prefer Tailwind utility classes directly in .astro files; global reset limited to zeroing margins/heights in Layout `<style>` (see [src/layouts/Layout.astro](src/layouts/Layout.astro#L19-L26)). Add any new global styles in [src/styles/global.css](src/styles/global.css) or create scoped `<style>` blocks per component.
- Assets: put static files under public/ for passthrough; reference with absolute paths (`/favicon.svg`). Keep component-specific media under src/assets/ if you need build processing.
- Components: component directories under [src/components](src/components) are currently empty placeholders (`componentsLayout`, `icons`, `islands`, `ui`). Create .astro components there as the app grows; co-locate styles when possible.
- Layout usage: wrap new pages with `Layout` to inherit head tags and CSS: `---\nimport Layout from "../layouts/Layout.astro";\n---\n<Layout>...` Adjust per-page `<title>` or meta inside the layout as needed.
- Routing: Astro file-system routing applies; new files in src/pages become routes. Use nested folders for grouped sections (e.g., blog/slug.astro).
- Vite/Astro config: Tailwind plugin added in [astro.config.mjs](astro.config.mjs#L1-L11); add any future Vite plugins there. Avoid custom tsconfig changes unless necessary to keep alignment with Astro defaults.
- Testing/linting: none configured. If adding lint/tests, document new commands here and keep npm scripts updated.
- Deployment: default Astro static build to dist/ via `pnpm build`; preview locally with `pnpm preview`.
- Localization: currently hardcoded to English (lang attr, no i18n). If adding i18n, ensure layout/head adjustments stay consistent.
- Content sourcing: no CMS/content collections set up. New content should be authored as .astro/.md files under pages until a data source is added.

If any section is unclear or missing (e.g., future component patterns, CMS integration), tell me what to clarify and I’ll update this doc.

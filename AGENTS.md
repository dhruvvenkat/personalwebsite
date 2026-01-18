# Repository Guidelines

## Project Structure & Module Organization
This repository is a single-page static site. The main entry point is `index.html`, which contains the HTML markup, inline CSS, and inline JavaScript. Static assets live in the root alongside it:
- `dvlogo.png` and `Waterloo_Logo.jpg` are image assets referenced by the page.
- `dhruv-venkat-resume.pdf` is linked as a downloadable resume.
- `updates.txt` is a lightweight backlog or notes file.

## Build, Test, and Development Commands
There is no build pipeline or package manager for this project.
- Open `index.html` directly in a browser for the simplest preview.
- For a local server with correct asset paths, run `python3 -m http.server` from the repo root and visit `http://localhost:8000`.

## Coding Style & Naming Conventions
Keep edits consistent with the existing single-file approach.
- Indentation: 4 spaces in HTML, CSS, and JavaScript.
- CSS: prefer `kebab-case` class names and group related rules together.
- JavaScript: use `camelCase` for variables and functions; keep DOM hooks and event handlers near the elements they control.
- Use CSS custom properties in `:root` for theming and color changes.

## Testing Guidelines
There are no automated tests. Validate changes manually in a browser:
- Check layout and responsiveness on desktop and mobile widths.
- Verify interactive features (theme toggle, navigation, chatbot, resume download).
- If the chatbot is used, confirm API requests work with your local configuration.

## Commit & Pull Request Guidelines
Commit messages are short and descriptive, typically in present tense (for example, "add resume button"). Keep them concise and focused on the change.
For pull requests, include a clear summary, link related issues if any, and add before/after screenshots for visual updates.

## Security & Configuration Tips
Do not commit secrets. The chatbot integration should use a backend proxy or environment-based configuration for API keys. If you must test locally, use a temporary key and avoid committing it.

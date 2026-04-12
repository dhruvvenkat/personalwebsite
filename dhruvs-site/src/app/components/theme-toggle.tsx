"use client";

type ThemeMode = "dark" | "light";

const THEME_STORAGE_KEY = "dhruvs-site-theme";

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;

  try {
    window.sessionStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage failures; the visible theme still changes.
  }
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25M12 18.75V21M4.64 4.64l1.6 1.6M17.76 17.76l1.6 1.6M3 12h2.25M18.75 12H21M4.64 19.36l1.6-1.6M17.76 6.24l1.6-1.6M16.25 12a4.25 4.25 0 1 1-8.5 0 4.25 4.25 0 0 1 8.5 0Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15A8 8 0 0 1 9.85 3.75 8 8 0 1 0 20.25 14.15Z"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const toggleTheme = () => {
    const currentTheme =
      document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle color mode"
      onClick={toggleTheme}
    >
      <span className="theme-toggle-sun">
        <SunIcon />
      </span>
      <span className="theme-toggle-moon">
        <MoonIcon />
      </span>
    </button>
  );
}

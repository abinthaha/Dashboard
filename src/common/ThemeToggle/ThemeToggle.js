import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

const STORAGE_KEY = "dashboard-theme";

function readStoredTheme() {
  try {
    const t = localStorage.getItem(STORAGE_KEY);
    if (t === "dark" || t === "light") return t;
  } catch (e) {
    /* ignore */
  }
  return "dark";
}

function readDomTheme() {
  if (typeof document === "undefined") return null;
  const t = document.documentElement.getAttribute("data-theme");
  return t === "dark" || t === "light" ? t : null;
}

function SunIcon() {
  return (
    <svg
      className="theme-toggle__icon"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
      fill="none"
    >
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M17.66 6.34l1.41-1.41M6.34 17.66l-1.41 1.41"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="theme-toggle__icon"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 14.5A8.5 8.5 0 019.5 3a8.45 8.45 0 006.32 14.5z"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => readDomTheme() || readStoredTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#12151c" : "#ffffff");
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

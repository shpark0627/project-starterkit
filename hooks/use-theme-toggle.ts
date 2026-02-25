"use client";

import { useCallback } from "react";
import { useTheme } from "next-themes";

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme: theme || "dark", toggleTheme };
}

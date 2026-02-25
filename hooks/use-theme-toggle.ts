"use client";

import { useCallback, useState } from "react";
import { useTheme } from "next-themes";

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted] = useState(() => {
    // 클라이언트에서만 true, 서버 사이드 렌더링 시 false
    return typeof window !== "undefined";
  });

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // hydration 오류 방지: 마운트 전까지는 dark 고정
  return {
    theme: mounted ? (theme || "dark") : "dark",
    toggleTheme,
    mounted,
  };
}

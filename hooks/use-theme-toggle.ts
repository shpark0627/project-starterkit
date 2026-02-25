"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // 클라이언트 렌더링 전까지 기본값 반환
  return { theme: mounted ? theme : "dark", toggleTheme };
}

/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useCallback, useLayoutEffect, useState } from "react";
import { useTheme } from "next-themes";

export function useThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useLayoutEffect: DOM 업데이트 전에 실행되어 hydration 문제 해결
  // hydration 오류 방지를 위한 의도적 패턴: 초기 마운트 감지
  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    // mounted 후에만 테마 변경 가능
    if (mounted) {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }
  }, [mounted, resolvedTheme, setTheme]);

  // hydration 오류 방지: 마운트 전까지 resolvedTheme 미사용
  return {
    theme: mounted ? resolvedTheme || "dark" : "dark",
    toggleTheme,
    mounted,
  };
}

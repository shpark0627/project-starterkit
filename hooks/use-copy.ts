"use client";

import { useState, useCallback } from "react";

interface UseCopyReturn {
  copied: boolean;
  copy: (text: string) => Promise<void>;
}

export function useCopy(): UseCopyReturn {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("클립보드 복사 실패:", error);
    }
  }, []);

  return { copied, copy };
}

"use client";

import { useState, useCallback } from "react";

interface ConfirmOptions {
  title?: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
}

interface ConfirmState {
  isOpen: boolean;
  options: ConfirmOptions | null;
  resolve: ((value: boolean) => void) | null;
}

interface UseConfirmReturn {
  confirm: (options: ConfirmOptions) => Promise<boolean>;
  confirmState: ConfirmState;
  handleConfirm: () => void;
  handleCancel: () => void;
}

export function useConfirm(): UseConfirmReturn {
  const [state, setState] = useState<ConfirmState>({
    isOpen: false,
    options: null,
    resolve: null,
  });

  const confirm = useCallback((options: ConfirmOptions): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({ isOpen: true, options, resolve });
    });
  }, []);

  const handleConfirm = useCallback(() => {
    state.resolve?.(true);
    setState({ isOpen: false, options: null, resolve: null });
  }, [state]);

  const handleCancel = useCallback(() => {
    state.resolve?.(false);
    setState({ isOpen: false, options: null, resolve: null });
  }, [state]);

  return { confirm, confirmState: state, handleConfirm, handleCancel };
}

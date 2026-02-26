"use client";

import { useState } from "react";
import { useConfirm } from "@/hooks/use-confirm";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { Button } from "@/components/ui/button";

export function ConfirmDemo() {
  const { confirm, confirmState, handleConfirm, handleCancel } = useConfirm();
  const [result, setResult] = useState<string | null>(null);

  const handleDeleteClick = async () => {
    const isConfirmed = await confirm({
      title: "삭제 확인",
      description: "정말 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.",
      confirmText: "삭제",
      cancelText: "취소",
    });

    setResult(isConfirmed ? "삭제되었습니다." : "삭제가 취소되었습니다.");
  };

  const handleActionClick = async () => {
    const isConfirmed = await confirm({
      title: "작업 확인",
      description: "계속하시겠습니까?",
      confirmText: "계속",
      cancelText: "취소",
    });

    setResult(isConfirmed ? "작업을 진행합니다." : "작업이 취소되었습니다.");
  };

  return (
    <div className="space-y-4">
      <div className="space-x-2">
        <Button onClick={handleDeleteClick} variant="destructive">
          삭제 테스트
        </Button>
        <Button onClick={handleActionClick} variant="outline">
          작업 확인 테스트
        </Button>
      </div>

      {result && (
        <div className="p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded text-sm">
          {result}
        </div>
      )}

      {confirmState.options && (
        <ConfirmDialog
          isOpen={confirmState.isOpen}
          title={confirmState.options.title}
          description={confirmState.options.description}
          confirmText={confirmState.options.confirmText}
          cancelText={confirmState.options.cancelText}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

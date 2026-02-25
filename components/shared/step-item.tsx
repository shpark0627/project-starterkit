import React from "react";
import { cn } from "@/lib/utils";

interface StepItemProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function StepItem({
  step,
  title,
  description,
  isLast = false,
  className,
}: StepItemProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      {/* 스텝 번호 */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold text-zinc-300">
          {step}
        </div>
        {!isLast && <div className="mt-2 h-12 w-px bg-zinc-800" />}
      </div>

      {/* 콘텐츠 */}
      <div className="pt-1 pb-4">
        <h3 className="mb-1 font-semibold text-lg">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

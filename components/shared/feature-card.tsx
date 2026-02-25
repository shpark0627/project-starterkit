import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn("border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:bg-zinc-900 transition-all", className)}>
      <CardContent className="pt-6">
        <div className="mb-4">
          <Icon className="h-8 w-8 text-zinc-400" />
        </div>
        <h3 className="mb-2 font-semibold text-lg">{title}</h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  );
}

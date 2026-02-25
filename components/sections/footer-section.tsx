import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

export function FooterSection() {
  return (
    <footer id="footer" className="py-20 sm:py-24">
      <Container>
        <Separator className="mb-12 bg-zinc-800" />

        <div className="grid gap-12 md:grid-cols-3">
          {/* 브랜드 */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Modern Web Starter Kit
            </h3>
            <p className="text-sm text-zinc-400">
              차세대 웹 개발을 위한 완벽한 출발점. 프로덕션 레벨의 기술 스택으로
              빠르고 안정적인 프로젝트를 시작하세요.
            </p>
          </div>

          {/* 리소스 */}
          <div>
            <h4 className="mb-4 font-semibold text-sm uppercase text-zinc-300">
              리소스
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  문서
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  예제
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  커뮤니티
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  지원
                </a>
              </li>
            </ul>
          </div>

          {/* 소셜 */}
          <div>
            <h4 className="mb-4 font-semibold text-sm uppercase text-zinc-300">
              팔로우
            </h4>
            <div className="flex gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white hover:bg-zinc-900 transition-all"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white hover:bg-zinc-900 transition-all"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>Twitter</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white hover:bg-zinc-900 transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* 저작권 & 기술 배지 */}
        <Separator className="my-8 bg-zinc-800" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-500">
            © 2024 Modern Web Starter Kit. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-400">
              Next.js 16
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-400">
              TypeScript
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-400">
              Tailwind CSS
            </Badge>
            <Badge variant="secondary" className="bg-zinc-800/50 text-zinc-400">
              shadcn/ui
            </Badge>
          </div>
        </div>
      </Container>
    </footer>
  );
}

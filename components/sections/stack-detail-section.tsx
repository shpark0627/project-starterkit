import React from "react";
import {
  Box,
  Zap,
  FileJson,
  Code2,
  Palette,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { TechBadge } from "@/components/shared/tech-badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const faqItems = [
  {
    question: "shadcn/ui와 다른 UI 라이브러리의 차이점은?",
    answer:
      "shadcn/ui는 복사-붙여넣기 기반의 컴포넌트 라이브러리로, 모든 소스 코드가 프로젝트에 포함됩니다. 이를 통해 완전한 커스터마이징과 의존성 제어가 가능합니다.",
  },
  {
    question: "Tailwind CSS를 꼭 사용해야 하나요?",
    answer:
      "Tailwind CSS는 필수가 아니지만 권장됩니다. 강력한 유틸리티 기반 CSS로 빠른 개발을 가능하게 하며, 파일 크기도 매우 작습니다.",
  },
  {
    question: "TypeScript는 필수인가요?",
    answer:
      "TypeScript는 선택사항이지만, 큰 프로젝트에서는 개발 생산성과 코드 안정성을 크게 향상시킵니다. 프로젝트의 규모에 따라 결정할 수 있습니다.",
  },
  {
    question: "프로덕션 배포는 어떻게 하나요?",
    answer:
      "Next.js는 Vercel, Netlify, AWS, Docker 등 다양한 플랫폼에 배포할 수 있습니다. Vercel은 Next.js 최적화로 권장됩니다.",
  },
];

const frontendStack = [
  { name: "Next.js 16", version: "v16" },
  { name: "React 19", version: "v19" },
  { name: "TypeScript 5", version: "v5" },
];

const stylingStack = [
  { name: "Tailwind CSS", version: "v4" },
  { name: "shadcn/ui", version: "latest" },
  { name: "lucide-react", version: "v575" },
];

const toolsStack = [
  { name: "ESLint 9", version: "v9" },
  { name: "npm", version: "v10+" },
];

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "Next.js 16": Code2,
  "React 19": Sparkles,
  "TypeScript 5": FileJson,
  "Tailwind CSS": Palette,
  "shadcn/ui": Box,
  "lucide-react": Sparkles,
  "ESLint 9": FileJson,
  npm: Zap,
};

export function StackDetailSection() {
  return (
    <section id="stack" className="py-20 sm:py-32 md:py-40">
      <Container>
        <SectionHeader
          badge="기술 스택"
          title="완벽하게 선택된 스택"
          description="각 기술은 최신 모범 사례와 함께 선택되었습니다"
        />

        <div className="mt-16 space-y-12">
          {/* Frontend 스택 */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Frontend</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {frontendStack.map((tech) => (
                <HoverCard key={tech.name}>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer">
                      <TechBadge
                        icon={iconMap[tech.name] || Box}
                        name={tech.name}
                        version={tech.version}
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="border-zinc-700 bg-zinc-900">
                    <p className="text-sm text-zinc-300">
                      {tech.name}에 대한 공식 문서를 확인하세요
                    </p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>

          {/* Styling 스택 */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Styling & Components</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {stylingStack.map((tech) => (
                <HoverCard key={tech.name}>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer">
                      <TechBadge
                        icon={iconMap[tech.name] || Box}
                        name={tech.name}
                        version={tech.version}
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="border-zinc-700 bg-zinc-900">
                    <p className="text-sm text-zinc-300">
                      {tech.name}에 대한 공식 문서를 확인하세요
                    </p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>

          {/* Tools 스택 */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Developer Tools</h3>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {toolsStack.map((tech) => (
                <HoverCard key={tech.name}>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer">
                      <TechBadge
                        icon={iconMap[tech.name] || Box}
                        name={tech.name}
                        version={tech.version}
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="border-zinc-700 bg-zinc-900">
                    <p className="text-sm text-zinc-300">
                      {tech.name}에 대한 공식 문서를 확인하세요
                    </p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ 섹션 */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="mb-6 text-xl font-semibold text-center">
            자주 묻는 질문
          </h3>
          <Accordion type="single" collapsible className="border border-zinc-800 rounded-lg">
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="border-zinc-800"
              >
                <AccordionTrigger className="hover:text-zinc-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

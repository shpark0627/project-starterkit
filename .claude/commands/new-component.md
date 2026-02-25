# /new-component - 재사용 가능한 컴포넌트 생성

`components/shared/` 폴더에 재사용 가능한 React 컴포넌트 boilerplate를 생성합니다.

## 사용법
```bash
/new-component stat-card
/new-component metric-display
/new-component image-carousel
```

## 자동 생성되는 파일

### `components/shared/{name}.tsx`

다음 구조로 자동 생성됨:

```tsx
import React from "react";
import { cn } from "@/lib/utils";

interface {PascalCase}Props {
  // 필수 props를 여기에 추가
  className?: string;
}

export function {PascalCase}({
  className,
}: {PascalCase}Props) {
  return (
    <div
      className={cn(
        // 라이트 모드 스타일
        "border-zinc-200 bg-white",
        "hover:border-zinc-300 hover:bg-zinc-50",
        // 다크 모드 스타일
        "dark:border-zinc-800 dark:bg-zinc-900/50",
        "dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50",
        // 공통 스타일
        "rounded-lg border p-4 transition-all",
        className
      )}
    >
      {/* 컴포넌트 내용 */}
    </div>
  );
}
```

---

## 주요 특징

### 1. Props 인터페이스
```tsx
interface {PascalCase}Props {
  // 필수 props
  title: string;
  value: number;
  // 선택 props
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}
```

**규칙**:
- `className?: string` 항상 포함 (클라이언트 커스터마이징용)
- Props를 명시적으로 destructuring
- 타입 안정성을 위해 `any` 금지

### 2. `cn()` 함수 활용

`lib/utils.ts`의 `cn()` 함수로 클래스 병합:

```tsx
className={cn(
  "base-style",
  "hover:effect",
  "dark:dark-style",
  condition && "conditional-style",
  className  // 외부 전달 클래스
)}
```

**장점**:
- Tailwind 클래스 충돌 자동 해결
- 조건부 스타일 처리 간편

### 3. 다크 모드 이중 클래스

라이트/다크 모드를 함께 정의:

```tsx
"border-zinc-200 bg-white"              // 라이트 모드
"dark:border-zinc-800 dark:bg-zinc-900" // 다크 모드
```

**색상 팔레트** (프로젝트 표준):
- 배경: `white` / `dark:bg-zinc-900/50`
- 테두리: `border-zinc-200` / `dark:border-zinc-800`
- 텍스트: `text-zinc-900` / `dark:text-zinc-50`
- 호버: `hover:bg-zinc-50` / `dark:hover:bg-zinc-800/50`

---

## 사용 예시

### 컴포넌트 작성 후 import

**page.tsx**:
```tsx
import { StatCard } from "@/components/shared/stat-card";

export default function Home() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Users" value={1234} />
      <StatCard title="Revenue" value={5678} />
    </div>
  );
}
```

### Props 전달

```tsx
<StatCard
  title="Total Sales"
  value={9999}
  icon={<TrendingUp />}
  variant="primary"
  className="lg:col-span-2"
/>
```

---

## 참고 패턴

### `feature-card.tsx` 참조

```tsx
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "space-y-3 rounded-lg border border-zinc-200 bg-white p-6",
        "hover:border-zinc-300 hover:bg-zinc-50",
        "dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50",
        "transition-all",
        className
      )}
    >
      <div className="text-zinc-600 dark:text-zinc-400">{icon}</div>
      <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}
```

---

## 체크리스트

- [ ] 1️⃣ `/new-component {name}` 실행
- [ ] 2️⃣ `components/shared/{name}.tsx` 파일 생성 확인
- [ ] 3️⃣ Props 인터페이스 정의
- [ ] 4️⃣ `cn()` 함수로 스타일 조합
- [ ] 5️⃣ 라이트/다크 모드 클래스 작성
- [ ] 6️⃣ 필요한 페이지/섹션에서 import 및 사용
- [ ] 7️⃣ `npm run lint` 통과 확인

---

## 팁

**컴포넌트 분류**:
- **Layout**: Container, Sidebar, Header (구조 담당)
- **Shared**: 재사용 가능한 일반 컴포넌트 (FeatureCard, Badge 등)
- **Sections**: 페이지 섹션 (HeroSection, FeaturesSection 등)
- **UI**: shadcn/ui 컴포넌트 (Button, Card 등)

**언제 새 컴포넌트를 만들까?**
- 2개 이상의 페이지/섹션에서 사용될 때
- 재사용성이 높은 패턴일 때
- 단일 책임 원칙(SRP)을 따를 때

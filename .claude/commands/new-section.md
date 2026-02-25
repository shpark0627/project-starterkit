# /new-section - 새 섹션 컴포넌트 생성

새로운 섹션(Section) 컴포넌트를 만들기 위한 boilerplate 자동 생성 및 통합 가이드입니다.

## 사용법
```bash
/new-section hero2
/new-section pricing
/new-section testimonials
```

## 자동 생성되는 파일

### 1. `components/sections/{name}-section.tsx`

**파일 위치**: `components/sections/$ARGUMENTS-section.tsx`

다음 구조로 자동 생성됨:

```tsx
import React from "react";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";

// 섹션 데이터 (수정 필요)
const items = [
  // { ... }
];

export function {PascalCase}Section() {
  return (
    <section id="{kebab-case}" className="py-20 sm:py-32 md:py-40">
      <Container>
        <SectionHeader
          badge="Badge Text"
          title="Section Title"
          description="Section description goes here"
        />

        {/* 컨텐츠 영역 - 필요에 맞게 수정 */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div key={idx} className="space-y-3">
              {/* 각 아이템 구조 */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

**주요 특징**:
- `<section id>` 속성으로 네비게이션 링크 연결 지원
- `<Container>` 최대 너비 제어
- `<SectionHeader>` 배지 + 제목 + 설명
- 반응형 그리드 (sm:grid-cols-2, lg:grid-cols-3)
- `py-20 sm:py-32 md:py-40` 반응형 패딩

---

## 수동 통합 작업 (2곳)

### 2. `app/page.tsx` 에 추가

**위치**: 다른 섹션 import 근처

```tsx
import { {PascalCase}Section } from "@/components/sections/{name}-section";
```

**위치**: JSX 렌더링 부분 (적절한 순서에 배치)

```tsx
<{PascalCase}Section />
```

---

### 3. `components/layout/site-header.tsx` 의 `navItems` 배열에 추가

**위치**: 기존 `navItems` 배열 내부 (적절한 순서)

```tsx
const navItems = [
  // ... 기존 항목들
  {
    label: "Section Title",
    href: "#{kebab-case}",
  },
];
```

---

## 예시

### 커맨드 실행
```bash
/new-section testimonials
```

### 생성되는 파일
- `components/sections/testimonials-section.tsx`

### 수동 추가 작업
1. **app/page.tsx**:
   ```tsx
   import { TestimonialsSection } from "@/components/sections/testimonials-section";
   // ...
   <TestimonialsSection />
   ```

2. **components/layout/site-header.tsx** (`navItems`):
   ```tsx
   {
     label: "Testimonials",
     href: "#testimonials",
   }
   ```

---

## 참고 패턴

### `features-section.tsx` 참조
```tsx
const items = [
  { icon: Code2, title: "React 19", description: "..." },
  // ...
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32 md:py-40">
      <Container>
        <SectionHeader badge="Stack" title="..." description="..." />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <FeatureCard key={idx} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
```

---

## 체크리스트

- [ ] 1️⃣ `/new-section {name}` 실행
- [ ] 2️⃣ `components/sections/{name}-section.tsx` 파일 생성 확인
- [ ] 3️⃣ `app/page.tsx`에 import 및 JSX 추가
- [ ] 4️⃣ `components/layout/site-header.tsx` 네비게이션 추가
- [ ] 5️⃣ 섹션 내용 커스터마이징
- [ ] 6️⃣ `npm run lint` 통과 확인

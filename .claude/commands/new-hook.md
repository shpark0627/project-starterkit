# /new-hook - 커스텀 훅 생성

`hooks/` 폴더에 "use client" 기반 커스텀 훅 boilerplate를 생성합니다.

## 사용법
```bash
/new-hook toggle
/new-hook form-state
/new-hook api-fetch
```

## 자동 생성되는 파일

### `hooks/use-{name}.ts`

다음 구조로 자동 생성됨:

```ts
"use client";

import { useState, useCallback } from "react";

interface Use{PascalCase}Return {
  // 반환 값 타입 정의
}

export function use{PascalCase}(): Use{PascalCase}Return {
  const [state, setState] = useState<type>(initialValue);

  const action = useCallback(() => {
    // 로직
  }, []);

  return {
    state,
    action,
  };
}
```

---

## 주요 특징

### 1. "use client" 지시어

모든 훅은 클라이언트 사이드에서만 실행되어야 하므로 최상단에 포함:

```ts
"use client";
```

**언제 필요?**
- `useState`, `useEffect`, `useCallback` 사용
- `navigator`, `window` 등 브라우저 API 접근
- 이벤트 리스너 등록

### 2. 반환 타입 인터페이스

타입 안정성을 위해 명시적인 반환 타입 정의:

```ts
interface UseToggleReturn {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export function useToggle(
  initialState: boolean = false
): UseToggleReturn {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = useCallback(
    () => setIsOpen((prev) => !prev),
    []
  );

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, toggle, open, close };
}
```

### 3. `useCallback` 의존성

메모리 누수와 성능 저하를 방지하기 위해 명시적 의존성 배열:

```ts
const handleClick = useCallback(() => {
  // 로직
}, [dependency1, dependency2]); // 의존성 명시
```

---

## 일반적인 훅 패턴

### Toggle/Boolean State

```ts
interface UseToggleReturn {
  state: boolean;
  toggle: () => void;
  setState: (value: boolean) => void;
}

export function useToggle(
  initialState: boolean = false
): UseToggleReturn {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(
    () => setState((prev) => !prev),
    []
  );

  return { state, toggle, setState };
}
```

### Async Data Fetching

```ts
interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function useFetch<T>(
  url: string
): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}
```

### Form State Management

```ts
interface UseFormReturn<T> {
  formData: T;
  setField: (field: keyof T, value: any) => void;
  reset: () => void;
}

export function useForm<T>(
  initialState: T
): UseFormReturn<T> {
  const [formData, setFormData] = useState(initialState);

  const setField = useCallback(
    (field: keyof T, value: any) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const reset = useCallback(() => {
    setFormData(initialState);
  }, [initialState]);

  return { formData, setField, reset };
}
```

---

## 참고 패턴

### `use-copy.ts` 참조

```ts
"use client";

import { useState, useCallback } from "react";

interface UseCopyReturn {
  isCopied: boolean;
  copy: (text: string) => Promise<void>;
}

export function useCopy(): UseCopyReturn {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  }, []);

  return { isCopied, copy };
}
```

---

## 사용 예시

### 컴포넌트에서 import

```tsx
"use client";

import { useToggle } from "@/hooks/use-toggle";

export function Header() {
  const { state: isOpen, toggle } = useToggle(false);

  return (
    <>
      <button onClick={toggle}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <div>Menu Content</div>}
    </>
  );
}
```

### 복합 훅 사용

```tsx
"use client";

import { useFetch } from "@/hooks/use-fetch";

interface Post {
  id: number;
  title: string;
}

export function PostList() {
  const { data: posts, loading, error } = useFetch<Post[]>(
    "/api/posts"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

## 체크리스트

- [ ] 1️⃣ `/new-hook {name}` 실행
- [ ] 2️⃣ `hooks/use-{name}.ts` 파일 생성 확인
- [ ] 3️⃣ `"use client"` 지시어 확인
- [ ] 4️⃣ 반환 타입 인터페이스 정의
- [ ] 5️⃣ `useCallback` 의존성 배열 작성
- [ ] 6️⃣ 컴포넌트에서 import 및 사용
- [ ] 7️⃣ `npm run lint` 통과 확인

---

## 팁

**네이밍 규칙**:
- 파일명: `use-{action}.ts` (kebab-case)
- 함수명: `use{Action}` (PascalCase)
- 인터페이스: `Use{Action}Return`

**언제 훅을 만들까?**
- 상태 로직을 여러 컴포넌트에서 재사용할 때
- 복잡한 부수 효과(side effects)를 캡슐화할 때
- 코드 가독성과 유지보수성을 높일 때

**피해야 할 패턴**:
- 훅 조건부 호출 (if 문 내부에서 호출)
- 반복문 내부에서 훅 호출
- 훅이 아닌 일반 함수에서 훅 호출
- 과도한 의존성 배열 생략 (ESLint 경고)

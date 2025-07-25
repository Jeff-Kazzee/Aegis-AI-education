# Unified Project Structure

This structure organizes the project into logical directories, separating code, content, and configuration.

```
aegis-project/
│
├── .github/
│   └── workflows/
│       └── ci.yaml
│
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── course/
│   │   │   │   ├── [slug]/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── posts/
│   │   │   │   └── page.tsx
│   │   │   └── support/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   └── posts/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   │
│   └── lib/
│       ├── lessons.ts
│       └── substack.ts
│
├── content/
│   └── lessons/
│       ├── 01-introduction.md
│       └── 02-another-lesson.md
│
├── tests/
├── package.json
├── README.md
└── tsconfig.json
```
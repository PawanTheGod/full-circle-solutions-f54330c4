# 360° Marketing Agency — Frontend

> React + Vite + TypeScript + TailwindCSS + shadcn/ui

---

## 👥 Team & Branch Ownership

| Branch | Developer | Pages / Components |
|---|---|---|
| `main` | — | Stable merged code only |
| `navbar-footer` | **Pawan** | Navbar, Footer, Routing, Global CSS, Back-to-Top |
| `home-page` | **Aditya Bharande** | `src/pages/Index.tsx` |
| `services-page` | **Atman** | `src/pages/Services.tsx` |
| `portfolio-testimonials` | **Nouman** | `src/pages/Portfolio.tsx`, `src/pages/Testimonials.tsx` |
| `plans-about` | **Pratic** | `src/pages/Plans.tsx`, `src/pages/About.tsx` |
| `contact-page` | **Aditya Alibade** | `src/pages/Contact.tsx` |

---

## 🚀 Getting Started (Every Team Member)

```bash
# 1. Clone the repo
git clone https://github.com/PawanTheGod/full-circle-solutions-f54330c4.git
cd full-circle-solutions-f54330c4

# 2. Checkout YOUR branch
git checkout home-page          # replace with your branch name

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
# → http://localhost:5173
```

---

## 📁 File Ownership (DO NOT edit other people's files)

```
src/
├── components/
│   ├── Navbar.tsx          ← PAWAN only
│   ├── Footer.tsx          ← PAWAN only
│   ├── BackToTop.tsx       ← PAWAN only
│   ├── NavLink.tsx         ← PAWAN only
│   ├── PageHeader.tsx      ← PAWAN only
│   ├── ScrollAnimation.tsx ← PAWAN only
│   └── ui/                 ← shadcn/ui — DO NOT TOUCH
│
├── pages/
│   ├── Index.tsx           ← ADITYA BHARANDE (home-page branch)
│   ├── Services.tsx        ← ATMAN (services-page branch)
│   ├── Portfolio.tsx       ← NOUMAN (portfolio-testimonials branch)
│   ├── Testimonials.tsx    ← NOUMAN (portfolio-testimonials branch)
│   ├── Plans.tsx           ← PRATIC (plans-about branch)
│   ├── About.tsx           ← PRATIC (plans-about branch)
│   └── Contact.tsx         ← ADITYA ALIBADE (contact-page branch)
│
├── App.tsx                 ← PAWAN only (routing)
├── index.css               ← PAWAN only (global styles)
└── main.tsx                ← PAWAN only
```

---

## 📤 How to Submit Your Work

```bash
# Work only in your assigned files
# When ready to submit:

git add src/pages/YourPage.tsx
git commit -m "feat: complete home page hero section"
git push origin your-branch-name
```

Then tell **Pawan** your branch is ready to merge.

---

## ⚠️ Rules for All Team Members

1. **Never commit to `main`** — work only on your assigned branch
2. **Never edit files owned by another person**
3. **One commit = one feature** — write clear commit messages
4. **Import shared components from** `@/components/` — they're ready to use
5. **Use Lucide React for icons** — already installed: `import { Icon } from 'lucide-react'`
6. **Use shadcn/ui components** — already installed: `import { Button } from '@/components/ui/button'`

---

## 🎨 Design System (Use These — Don't Invent New Colors)

The global theme is already set in `src/index.css`. Use Tailwind classes:

```
Background:  bg-background / bg-muted / bg-card
Text:        text-foreground / text-muted-foreground
Accent:      text-secondary / bg-secondary
Border:      border / border-border
```

---

## 📦 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| TypeScript | 5 | Type safety |
| Vite | 5 | Build tool |
| TailwindCSS | 3 | Styling |
| shadcn/ui | latest | UI components |
| React Router | 6 | Page routing |
| Lucide React | latest | Icons |
| React Query | 5 | Data fetching |

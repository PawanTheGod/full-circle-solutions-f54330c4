# 360 Marketing Agency - Web Platform

A premium, full-stack marketing agency web platform built with a modern React SPA frontend and a Node.js/Express backend. The application features a high-end, minimalist aesthetic with sophisticated scroll animations, dynamic layouts, and a secure contact management system.

---

## 🚀 Core Features

- **Elite UI/UX Architecture:** Custom scroll animations, tight layout density, and modern typography (Space Grotesk & DM Sans).
- **Responsive "Bento" Grids:** Highly polished, mobile-responsive grids used across the Portfolio and Services sections.
- **Dynamic Scroll Observers:** Custom `ScrollAnimation.tsx` component that orchestrates staggered reveal animations.
- **Secure Backend API:** A lightweight Express backend that securely processes contact leads and stores them in a Supabase PostgreSQL database.
- **Scalable Component Pattern:** Built exclusively using fully customizable `shadcn/ui` and Radix UI primitives.

---

## 🏗️ Technology Stack

### Frontend Ecosystem
- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 (JIT Compiler) + Vanilla CSS (`index.css`)
- **UI Library:** shadcn/ui (Radix Primitives) + custom Lucide React icons
- **Animations:** Framer Motion + Tailwind Keyframes
- **Routing:** React Router v6

### Backend Ecosystem
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** Supabase (PostgreSQL via REST API)
- **Security:** Helmet, CORS, and standard Express sanitization.

---

## 📁 Repository Structure

```text
360-marketing-agency/
│
├── backend/                   ← Express.js API (Port 5000)
│   ├── controllers/
│   │   └── contactController.js  (Processes form securely)
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── .env                   ← ⚠️ Insert Supabase Keys Here
│   ├── package.json
│   └── server.js
│
├── frontend/                  ← React UI (Port 5173 / 8081)
│   ├── src/
│   │   ├── components/        (PageHeaders, UI primitives)
│   │   ├── pages/             (Index, Services, Portfolio, etc.)
│   │   ├── lib/               (Tailwind utils)
│   │   ├── index.css          (Global styling + utility classes)
│   │   ├── App.tsx            (Router definitions)
│   │   └── main.tsx
│   ├── tailwind.config.ts     (Safelist animations included)
│   ├── eslint.config.js       (Configured for shadcn/ui)
│   └── package.json
│
└── README.md
```

---

## 🗺️ Page Architecture

The frontend consists of 7 tightly integrated pages sharing a persistent `Navbar` and `Footer`:

1. **`Index.tsx`**: High-impact homepage with an animated hero section, statistical counters, and curated portfolio highlights.
2. **`Services.tsx`**: A sticky, side-scrolling grid detailing Digital Dominance, Visual Storytelling, and Web Architecture.
3. **`Portfolio.tsx`**: An interactive, filterable masonry grid featuring the agency's best work.
4. **`Testimonials.tsx`**: Social proof consisting of a bento-style stats grid and a horizontally scrollable quote carousel.
5. **`Plans.tsx`**: Retainer pricing tiers showcasing exact service parameters.
6. **`About.tsx`**: The agency's "Manifesto", core team bios, and company philosophy.
7. **`Contact.tsx`**: The lead generation engine featuring Google Maps integration and the core submission form connected to the Express backend.

---

## ⚙️ Installation & Setup

### 1. Database Configuration (Supabase)
Before running the backend, you must configure your database.
1. Create a project in [Supabase](https://supabase.com).
2. Create a table named `contacts` with the following columns: `name`, `email`, `phone`, `service`, `message`.

### 2. Backend Initialization
Edit `backend/.env` with your precise credentials.
```env
PORT=5000
NODE_ENV=development

# Front End Network Origin
FRONTEND_URL=http://localhost:5173

# Supabase Credentials
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
```

Run the API:
```bash
cd backend
npm install
npm run dev
```
*The API will mount at `http://localhost:5000/api/contact`.*

### 3. Frontend Initialization
If you are running the frontend on a different port than `5173`, ensure you define the backend URL in `frontend/.env`:
```env
VITE_API_URL=http://localhost:5000
```

Run the Client:
```bash
cd frontend
npm install
npm run dev
```

---

## 🎨 Design System & CSS Notes
- **Negative Space Optimization**: The codebase has been actively tuned to reduce excessive padding, offering a high-density, punchy user experience. If future modules are built, utilize `.section-padding` from `index.css` rather than hardcoding `py-32` blocks.
- **Scroll Animations**: All UI elements are lazy-loaded via the `ScrollAnimation.tsx` wrapper. To prevent Tailwind's JIT compiler from purging dynamic classes, the animations are strict-mapped in the component and `safelist` logic is added to `tailwind.config.ts`.
- **Dark Mode**: The global CSS supports a pristine dark mode. It can be instantiated simply by adding a toggle mechanism assigning the `dark` class to the HTML root.

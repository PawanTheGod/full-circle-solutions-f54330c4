# 360° Marketing Agency

A professional full-stack web application with a clean **frontend / backend** separation.

---

## 📁 Project Structure

```
360-marketing-agency/
│
├── backend/                   ← Express.js API (Node.js)
│   ├── controllers/
│   │   └── contactController.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── .env                   ← ⚠️ Fill in your Gmail credentials
│   ├── package.json
│   └── server.js
│
├── frontend/                  ← React + Vite + TailwindCSS
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Index.tsx      (Home)
│   │   │   ├── Services.tsx
│   │   │   ├── Plans.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx    ← Calls backend API
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.ts
│   └── vite.config.ts
│
└── README.md
```

---

## 🚀 How to Run

### 1. Start the Backend

```bash
cd backend
npm install
node server.js
```

Backend runs at → **http://localhost:5000**

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at → **http://localhost:5173**

---

## ⚙️ Backend Environment Variables

Edit `backend/.env` before starting:

```env
PORT=5000
NODE_ENV=development

# Gmail App Password (NOT your account password)
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-16-char-app-password

# Where contact form submissions are delivered
AGENCY_EMAIL=hello@360marketing.in

# Frontend origin for CORS
FRONTEND_URL=http://localhost:5173
```

> **How to get a Gmail App Password:**
> 1. Enable 2-Step Verification on your Google Account
> 2. Go to **Manage your Google Account → Security → App Passwords**
> 3. Create an app password for "Mail" and paste it as `GMAIL_PASS`

---

## 🔗 How Frontend Talks to Backend

The `Contact.tsx` page sends form submissions to:

```
POST http://localhost:5000/api/contact
```

CORS is already configured in `backend/server.js` to accept requests from `http://localhost:5173`.

---

## 👥 Team Development

Each team member should work in their assigned area:

| Developer | Area | Path |
|-----------|------|------|
| Frontend lead | Pages & components | `frontend/src/pages/` |
| Frontend dev | Shared components | `frontend/src/components/` |
| Backend dev | API & email | `backend/` |

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite, TailwindCSS, shadcn/ui |
| Backend | Node.js, Express.js |
| Email | Nodemailer + Gmail |
| Routing | React Router DOM v6 |

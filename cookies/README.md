# 🍪 Cookies & Auth — Learning Project

A full-stack project built while learning **HTTP Cookies**, **JWT Authentication**, and **CORS** with a React + Express setup.

## 📚 What I Learned

- How cookies work in browsers (setting, reading, clearing)
- JWT (JSON Web Tokens) — signing and verifying tokens
- `httpOnly` cookies for secure auth
- CORS configuration with `credentials: true`
- `withCredentials` in Axios for cross-origin cookie requests
- React Router DOM for client-side routing
- Connecting a React frontend to an Express backend

## 🗂️ Project Structure

```
cookies/
├── backend/          # Express + TypeScript API
│   └── src/
│       └── index.ts  # All routes (signup, signin, user, logout)
└── frontend/
    └── frontend/     # React + Vite + TypeScript
        └── src/
            ├── App.tsx
            ├── config.ts       # Backend URL config
            └── page/
                ├── SignIn.tsx
                ├── SignUp.tsx
                └── User.tsx
```

## 🚀 Getting Started

### Backend

```bash
cd backend
npm install
npm run build
npm run start
```

Runs on `http://localhost:3000`

### Frontend

```bash
cd frontend/frontend
npm install
npm run dev
```

Runs on `http://localhost:5173`

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 19, Vite, TypeScript, Axios |
| Backend   | Node.js, Express 5, TypeScript    |
| Auth      | JWT (`jsonwebtoken`)              |
| Cookies   | `cookie-parser`, browser cookies  |
| Routing   | React Router DOM v7               |

## 🔐 API Routes

| Method | Route      | Description              |
|--------|------------|--------------------------|
| POST   | `/signup`  | Register a new user      |
| POST   | `/signin`  | Login and set auth cookie|
| GET    | `/user`    | Get user info from cookie|
| POST   | `/logout`  | Clear the auth cookie    |

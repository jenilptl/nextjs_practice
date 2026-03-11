# 🚀 Next.js Practice — Learning Journey

> A collection of **6 mini-projects** built while learning Next.js (App Router) during Semester 4 — Backend Development.  
> Each folder covers a specific Next.js concept with working code examples.

---

## 📁 Projects Overview

| # | Folder | Concept Learned | Tech Used |
|---|--------|----------------|-----------|
| 1 | [`01-basic-routing-and-layouts`](./01-basic-routing-and-layouts) | Pages, Layouts, Navigation | Next.js, Bootstrap |
| 2 | [`02-dynamic-routes-and-route-groups`](./02-dynamic-routes-and-route-groups) | Dynamic `[id]` params, Nested routes, Route Groups `(auth)` | Next.js |
| 3 | [`03-middleware-and-authentication`](./03-middleware-and-authentication) | Middleware, URL Redirects, Token Auth | Next.js Middleware |
| 4 | [`04-client-side-data-fetching`](./04-client-side-data-fetching) | Client-side Fetching, `useState`, `useEffect` | Next.js, MockAPI |
| 5 | [`05-prisma-orm-with-mysql`](./05-prisma-orm-with-mysql) | Prisma ORM, MariaDB Adapter, CRUD API | Prisma, MySQL/MariaDB |
| 6 | [`06-multi-database-integration`](./06-multi-database-integration) | Multi-DB: MySQL + MongoDB + PostgreSQL | mysql2, mongoose, pg |

---

## 📖 What I Learned in Each Project

### 01 — Basic Routing & Layouts
- Creating pages with the Next.js App Router (`/about`, `/contact`)
- Building a **shared layout** with navbar, sidebar, and footer
- Using `<Link>` component for client-side navigation
- Integrating **Bootstrap** via CDN for styling

### 02 — Dynamic Routes & Route Groups
- **Dynamic routing** with `[id]` parameter — e.g., `/users/5`
- **Nested dynamic routes** — e.g., `/prime/[start]/[end]` to find primes in a range
- **Route Groups** using `(parentheses)` — organizing routes into `(admin)`, `(auth)`, `(client)` without affecting URL structure
- Using `params` as a Promise in Next.js 16+

### 03 — Middleware & Authentication
- Creating **Next.js Middleware** (`middleware.ts`) for request interception
- **URL redirect** logic — auto-adding query params (e.g., `pageNo=0`)
- **Token-based authentication** — redirecting unauthorized users to `/Login`
- **Token refresh** — replacing expired tokens via middleware
- Using `matcher` config to target specific routes

### 04 — Client-Side Data Fetching
- Fetching data from an **external REST API** (MockAPI)
- Using `useState` and `useEffect` hooks
- Displaying data in a styled **table**
- **Loading** and **error** states
- Navigating to **detail pages** with dynamic `[id]` routes

### 05 — Prisma ORM with MySQL
- Setting up **Prisma** with `@prisma/adapter-mariadb`
- Defining a **Prisma schema** with models
- Building **API routes** (`GET`, `POST`) for CRUD operations
- Using **PrismaClient** with environment variables
- Fetching and displaying students from the database

### 06 — Multi-Database Integration
- Connecting to **3 different databases** in one Next.js app:
  - 🐬 **MySQL** — using `mysql2` connection pool
  - 🍃 **MongoDB** — using `mongoose` with schema models
  - 🐘 **PostgreSQL** — using `pg` Pool with Neon cloud DB
- Building separate **API routes** for each database
- Displaying data from each database on its own page
- **Dynamic detail pages** for PostgreSQL records

---

## 🛠️ How to Run Any Project

```bash
# 1. Navigate to a project folder
cd 01-basic-routing-and-layouts

# 2. Install dependencies
npm install

# 3. Set up environment variables (if .env.example exists)
cp .env.example .env
# Then edit .env with your actual values

# 4. Run the development server
npm run dev
```

The app will start at [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Databases:** MySQL, MariaDB, MongoDB, PostgreSQL (Neon)
- **ORM:** Prisma
- **Styling:** CSS Modules, Bootstrap
- **APIs:** MockAPI, REST API Routes

---

## 📋 Environment Variables

Projects that need `.env` files have a `.env.example` template:

| Project | Variables Needed |
|---------|-----------------|
| `05-prisma-orm-with-mysql` | `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_PORT`, `DB_NAME`, `DATABASE_URL` |
| `06-multi-database-integration` | `DATABASE_URL` (PostgreSQL connection string) |

---

## 👤 Author

**Jenil Patel** — [@jenilptl](https://github.com/jenilptl)

---

## 📄 License

This project is for educational purposes — part of Semester 4 Backend Development coursework.

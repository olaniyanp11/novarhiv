# Novarhives — Investment Dashboard

A modern fintech dashboard built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Recharts**, and **Framer Motion**.

## Tech Stack

| Layer        | Library               |
|--------------|-----------------------|
| Framework    | Next.js 14 App Router |
| Language     | TypeScript            |
| Styling      | Tailwind CSS          |
| Charts       | Recharts              |
| Animations   | Framer Motion         |
| Icons        | Lucide React          |
| Auth         | localStorage (demo)   |

## Project Structure

```
novarhives/
├── app/
│   ├── globals.css        # Tailwind base + Google Fonts + scrollbar
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main dashboard page (auth state root)
├── components/
│   ├── Sidebar.tsx        # Fixed left navigation
│   ├── Navbar.tsx         # Top bar (search, notifications, auth)
│   ├── LoginModal.tsx     # Animated login popup (Framer Motion)
│   ├── GreetingBar.tsx    # Welcome banner
│   ├── QuickActions.tsx   # Invest / Withdraw / Add Funds / Transfer
│   ├── DashboardCards.tsx # 4 overview stat cards
│   ├── Charts.tsx         # PortfolioChart + BreakdownChart (Recharts)
│   ├── TransactionsTable.tsx  # Recent transactions table
│   ├── InvestmentPlans.tsx    # Active plans with progress bars
│   └── Insights.tsx       # AI recommendations
├── lib/
│   ├── auth.ts            # localStorage helpers + TypeScript types
│   └── data.ts            # All dummy data & types
├── tailwind.config.ts     # Custom nova.* color tokens
└── tsconfig.json
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

## Authentication (Demo Mode)

- Click **Login** in the navbar to open the animated modal
- Enter any valid email + password (both required)
- On login: user saved to `localStorage` under key `novarhives_user`
- On page load: auth state hydrated from `localStorage` automatically
- Logout via avatar dropdown → clears `localStorage`

## Customization

### Colors
All Novarhives theme colors are defined as Tailwind tokens in `tailwind.config.ts`:
```ts
nova: {
  deep:    "#071a10",   // page background
  card:    "#0d2818",   // card surface
  neon:    "#39ff8b",   // primary accent
  mid:     "#1db954",   // secondary accent
  ...
}
```

### Data
All dashboard data lives in `lib/data.ts` — swap it for real API calls as needed.

### Charts
`components/Charts.tsx` exports two components:
- `<PortfolioChart />` — Recharts AreaChart (12-month performance)
- `<BreakdownChart />` — Recharts PieChart (investment allocation donut)

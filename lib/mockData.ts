// lib/mockData.ts
// Centralized mock data for the Novarhives dashboard

export interface StatCard {
  label: string;
  value: string;
  change: string;
  up: boolean;
  icon: string;
  accentColor: string;
}

export interface Transaction {
  id: number;
  name: string;
  ticker: string;
  category: string;
  date: string;
  amount: number;
  credit: boolean;
  status: "completed" | "pending" | "failed";
  icon: string;
  iconBg: string;
}

export interface Plan {
  id: number;
  name: string;
  tier: string;
  tierColor: string;
  tierBg: string;
  target: number;
  reached: number;
  monthsLeft: number;
}

export interface Insight {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

export interface PortfolioDataPoint {
  month: string;
  portfolio: number;
  benchmark: number;
}

export interface Holding {
  id: number;
  name: string;
  ticker: string;
  category: string;
  value: number;
  change: number;
  changePercent: number;
  allocation: number;
  icon: string;
}

export interface AnalyticsMetric {
  label: string;
  value: string;
  change: string;
  up: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  joinedDate: string;
  riskTolerance: "Low" | "Medium" | "High";
  notifications: boolean;
  twoFactor: boolean;
}

// Mock User Data
export const MOCK_USER: UserProfile = {
  name: "Alex Johnson",
  email: "alex.johnson@novarhives.com",
  joinedDate: "January 2024",
  riskTolerance: "Medium",
  notifications: true,
  twoFactor: false,
};

// Dashboard Stats
export const DASHBOARD_STATS: StatCard[] = [
  {
    label: "Total Balance",
    value: "$284,920",
    change: "▲ 8.2% this month",
    up: true,
    icon: "💰",
    accentColor: "#39ff8b",
  },
  {
    label: "Total ROI",
    value: "24.7%",
    change: "▲ 3.1% vs last yr",
    up: true,
    icon: "📈",
    accentColor: "#60a5fa",
  },
  {
    label: "Net Profit",
    value: "$56,384",
    change: "▲ 12.5% YTD",
    up: true,
    icon: "✦",
    accentColor: "#a78bfa",
  },
  {
    label: "Active Plans",
    value: "4",
    change: "▼ 1 expiring soon",
    up: false,
    icon: "◈",
    accentColor: "#fb923c",
  },
];

// Transactions
export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 1,
    name: "Apple Inc.",
    ticker: "AAPL",
    category: "Stocks",
    date: "Apr 28, 2025",
    amount: 4200,
    credit: true,
    status: "completed",
    icon: "📊",
    iconBg: "rgba(57,255,139,0.15)",
  },
  {
    id: 2,
    name: "Bitcoin",
    ticker: "BTC",
    category: "Crypto",
    date: "Apr 25, 2025",
    amount: 8500,
    credit: false,
    status: "completed",
    icon: "₿",
    iconBg: "rgba(96,165,250,0.15)",
  },
  {
    id: 3,
    name: "REIT Fund Pro",
    ticker: "",
    category: "Real Estate",
    date: "Apr 22, 2025",
    amount: 1850,
    credit: true,
    status: "pending",
    icon: "🏢",
    iconBg: "rgba(167,139,250,0.15)",
  },
  {
    id: 4,
    name: "Ethereum",
    ticker: "ETH",
    category: "Crypto",
    date: "Apr 19, 2025",
    amount: 3100,
    credit: true,
    status: "completed",
    icon: "⚡",
    iconBg: "rgba(251,191,36,0.15)",
  },
  {
    id: 5,
    name: "Tesla Inc.",
    ticker: "TSLA",
    category: "Stocks",
    date: "Apr 15, 2025",
    amount: 2340,
    credit: false,
    status: "failed",
    icon: "📉",
    iconBg: "rgba(239,68,68,0.15)",
  },
];

// Investment Plans
export const MOCK_PLANS: Plan[] = [
  {
    id: 1,
    name: "Growth Accelerator",
    tier: "Premium",
    tierColor: "#39ff8b",
    tierBg: "rgba(57,255,139,0.12)",
    target: 100000,
    reached: 68200,
    monthsLeft: 8,
  },
  {
    id: 2,
    name: "Crypto Shield Fund",
    tier: "Standard",
    tierColor: "#60a5fa",
    tierBg: "rgba(96,165,250,0.15)",
    target: 50000,
    reached: 41500,
    monthsLeft: 3,
  },
  {
    id: 3,
    name: "Dividend Harvest",
    tier: "Elite",
    tierColor: "#a78bfa",
    tierBg: "rgba(167,139,250,0.15)",
    target: 75000,
    reached: 22800,
    monthsLeft: 18,
  },
];

// Insights
export const MOCK_INSIGHTS: Insight[] = [
  {
    id: 1,
    icon: "📊",
    title: "Rebalance Portfolio",
    desc: "Your crypto allocation has grown to 28%. Consider rebalancing to maintain your target 25% allocation.",
  },
  {
    id: 2,
    icon: "🎯",
    title: "Goal on Track",
    desc: "Crypto Shield Fund is 83% complete. At current rate, you'll reach the $50K target 2 weeks ahead of schedule.",
  },
  {
    id: 3,
    icon: "⚠️",
    title: "Market Alert",
    desc: "High volatility detected in tech sector. Consider diversifying into bonds to reduce risk exposure this quarter.",
  },
];

// Portfolio Data for Charts
export const PORTFOLIO_DATA: PortfolioDataPoint[] = [
  { month: "Jan", portfolio: 210000, benchmark: 200000 },
  { month: "Feb", portfolio: 218000, benchmark: 205000 },
  { month: "Mar", portfolio: 224000, benchmark: 208000 },
  { month: "Apr", portfolio: 219000, benchmark: 206000 },
  { month: "May", portfolio: 231000, benchmark: 212000 },
  { month: "Jun", portfolio: 238000, benchmark: 215000 },
  { month: "Jul", portfolio: 245000, benchmark: 220000 },
  { month: "Aug", portfolio: 252000, benchmark: 224000 },
  { month: "Sep", portfolio: 248000, benchmark: 221000 },
  { month: "Oct", portfolio: 261000, benchmark: 228000 },
  { month: "Nov", portfolio: 270000, benchmark: 235000 },
  { month: "Dec", portfolio: 284920, benchmark: 242000 },
];

// Pie Data for Allocation
export const PIE_DATA = [
  { name: "Stocks", value: 45, color: "#39ff8b" },
  { name: "Crypto", value: 25, color: "#1db954" },
  { name: "Bonds", value: 18, color: "#60a5fa" },
  { name: "Real Estate", value: 12, color: "#a78bfa" },
];

// Holdings for Portfolio Page
export const MOCK_HOLDINGS: Holding[] = [
  {
    id: 1,
    name: "Apple Inc.",
    ticker: "AAPL",
    category: "Stocks",
    value: 45200,
    change: 1200,
    changePercent: 2.7,
    allocation: 15.9,
    icon: "📊",
  },
  {
    id: 2,
    name: "Bitcoin",
    ticker: "BTC",
    category: "Crypto",
    value: 71200,
    change: -850,
    changePercent: -1.2,
    allocation: 25.0,
    icon: "₿",
  },
  {
    id: 3,
    name: "Ethereum",
    ticker: "ETH",
    category: "Crypto",
    value: 35800,
    change: 450,
    changePercent: 1.3,
    allocation: 12.6,
    icon: "⚡",
  },
  {
    id: 4,
    name: "US Treasury Bonds",
    ticker: "UST",
    category: "Bonds",
    value: 51200,
    change: 200,
    changePercent: 0.4,
    allocation: 18.0,
    icon: "🏛️",
  },
  {
    id: 5,
    name: "REIT Fund Pro",
    ticker: "REIT",
    category: "Real Estate",
    value: 34100,
    change: 600,
    changePercent: 1.8,
    allocation: 12.0,
    icon: "🏢",
  },
  {
    id: 6,
    name: "Tesla Inc.",
    ticker: "TSLA",
    category: "Stocks",
    value: 28900,
    change: -300,
    changePercent: -1.0,
    allocation: 10.2,
    icon: "🚗",
  },
];

// Analytics Metrics
export const ANALYTICS_METRICS: AnalyticsMetric[] = [
  {
    label: "Portfolio Volatility",
    value: "12.3%",
    change: "▼ 2.1% this quarter",
    up: false,
  },
  {
    label: "Sharpe Ratio",
    value: "1.85",
    change: "▲ 0.15 vs benchmark",
    up: true,
  },
  {
    label: "Max Drawdown",
    value: "8.7%",
    change: "▼ 1.2% YTD",
    up: false,
  },
  {
    label: "Beta",
    value: "0.92",
    change: "▲ 0.05 this month",
    up: true,
  },
];
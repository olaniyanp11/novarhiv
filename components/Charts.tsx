"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { PORTFOLIO_DATA, PIE_DATA } from "@/lib/mockData";

/* ─── Custom Tooltip for Area Chart ─── */
function PortfolioTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-nova-card border border-nova-border rounded-[10px] px-3 py-2 text-[12px]">
      <p className="text-nova-textMuted mb-1">{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} style={{ color: p.color }} className="font-semibold">
          {p.name}: ${p.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
}

/* ─── Custom Tooltip for Pie Chart ─── */
function PieTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-nova-card border border-nova-border rounded-[10px] px-3 py-2 text-[12px]">
      <p style={{ color: payload[0].payload.color }} className="font-semibold">
        {payload[0].name}: {payload[0].value}%
      </p>
    </div>
  );
}

/* ─── Portfolio Performance (Area Chart) ─── */
export function PortfolioChart() {
  return (
    <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className=" text-[15px] font-bold text-nova-textPrimary">
            Portfolio Performance
          </div>
          <div className="text-[12px] text-nova-textMuted">12-month overview</div>
        </div>
        <select className="bg-nova-surface border border-nova-border text-nova-textSecondary px-2.5 py-1.5 rounded-[8px] text-[12px] outline-none cursor-pointer">
          <option>2025</option>
          <option>2024</option>
        </select>
      </div>

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={PORTFOLIO_DATA} margin={{ top: 5, right: 5, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="portfolioGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#39ff8b" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#39ff8b" stopOpacity={0}   />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1a3d26" strokeWidth={0.5} />
            <XAxis
              dataKey="month"
              tick={{ fill: "#4a7a5e", fontSize: 10 }}
              axisLine={{ stroke: "#1a3d26" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#4a7a5e", fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${Math.round(v / 1000)}K`}
            />
            <Tooltip content={<PortfolioTooltip />} />
            <Area
              type="monotone"
              dataKey="benchmark"
              name="Benchmark"
              stroke="#1a3d26"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              fill="transparent"
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="portfolio"
              name="Portfolio"
              stroke="#39ff8b"
              strokeWidth={2.5}
              fill="url(#portfolioGrad)"
              dot={false}
              activeDot={{ r: 4, fill: "#39ff8b", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ─── Investment Breakdown (Donut Chart) ─── */
export function BreakdownChart() {
  return (
    <div className="bg-nova-card border border-nova-border rounded-[16px] p-5">
      <div className=" text-[15px] font-bold text-nova-textPrimary mb-3">
        Investment Breakdown
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
        {PIE_DATA.map((d) => (
          <span key={d.name} className="flex items-center gap-1 text-[11px] text-nova-textSecondary">
            <span
              className="w-2.5 h-2.5 rounded-[2px] inline-block flex-shrink-0"
              style={{ background: d.color }}
            />
            {d.name} {d.value}%
          </span>
        ))}
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={PIE_DATA}
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              dataKey="value"
              nameKey="name"
              paddingAngle={3}
            >
              {PIE_DATA.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                  stroke="#071a10"
                  strokeWidth={3}
                />
              ))}
            </Pie>
            <Tooltip content={<PieTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

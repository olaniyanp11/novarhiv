"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import LoginModal from "@/components/LoginModal";
import { PortfolioChart, BreakdownChart } from "@/components/Charts";
import { ANALYTICS_METRICS } from "@/lib/mockData";

export default function AnalyticsPage() {
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
      setModalOpen(!user?.email)
  })

  return (
    <div className="flex min-h-screen bg-nova-deep">
      <Sidebar />

      <div className="flex flex-col flex-1 ml-[220px] min-h-screen">
        <Navbar onOpenLogin={() => setModalOpen(true)} />

        <main className="flex-1 px-7 py-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-nova-textPrimary mb-2">Analytics</h1>
            <p className="text-nova-textMuted">Detailed performance metrics and portfolio analysis.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {ANALYTICS_METRICS.map((metric, i) => (
              <div key={i} className="bg-nova-card border border-nova-border rounded-[16px] p-5">
                <div className="text-[11px] text-nova-textMuted uppercase tracking-[1.5px] mb-2">
                  {metric.label}
                </div>
                <div className="text-xl font-bold text-nova-textPrimary">{metric.value}</div>
                <div className={`text-[12px] ${metric.up ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-[1.7fr_1fr] gap-4 mb-6">
            <PortfolioChart />
            <BreakdownChart />
          </div>

          {/* Additional Analytics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-nova-card border border-nova-border rounded-[16px] p-6">
              <h3 className="text-[15px] font-bold text-nova-textPrimary mb-4">Performance Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-nova-textSecondary">Stocks</span>
                  <span className="text-green-400">+12.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-nova-textSecondary">Crypto</span>
                  <span className="text-green-400">+8.3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-nova-textSecondary">Bonds</span>
                  <span className="text-red-400">-2.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-nova-textSecondary">Real Estate</span>
                  <span className="text-green-400">+5.7%</span>
                </div>
              </div>
            </div>

            <div className="bg-nova-card border border-nova-border rounded-[16px] p-6">
              <h3 className="text-[15px] font-bold text-nova-textPrimary mb-4">Risk Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-nova-textSecondary">Value at Risk (95%)</span>
                  <span className="text-nova-textPrimary">$8,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-nova-textSecondary">Expected Shortfall</span>
                  <span className="text-nova-textPrimary">$12,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-nova-textSecondary">Sortino Ratio</span>
                  <span className="text-nova-textPrimary">1.42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-nova-textSecondary">Information Ratio</span>
                  <span className="text-nova-textPrimary">0.87</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <LoginModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}